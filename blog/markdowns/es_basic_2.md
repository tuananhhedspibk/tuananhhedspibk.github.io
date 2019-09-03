## 6. Sử dụng Logstash

Sử dụng để import, đánh index dữ liệu từ 1 nguồn khác vào ES (1 dạng pipeline tool)

Nguồn tham khảo với MySQL (java, sử dụng JDBC để kết nối với database) - [Logstash MySQL](https://medium.com/veltra-engineering/logstash-mysql-elasticsearch-f2c1165801d)

## 7. Một số câu truy vấn hay dùng

- Create index: [ref](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html)
- Reindex (Replace index): [ref](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html)
- Test index analyze:

```javascript
POST /index/_analyze
{
  "field": "field_name",
  "text": ["俺は中村だ"]
}
```

- Index all docs

```javascript
POST /index/_doc
{
  "field_name": "type"
}
```

## 8. Dịch lại các documents từ trang chủ của elasticsearch

## 8.1. Score Theory

Nguồn - [Elasticsearch Score Theory](https://www.elastic.co/guide/en/elasticsearch/guide/current/scoring-theory.html)

### Boolean model

Boolean model chỉ đơn thuần áp dụng các biểu thức điều kiện **AND**, **OR**, **NOT** vào câu query (truy vấn) để tìm được tất các các **documents** thoả mãn điều kiện đó

Ví dụ: ta xét câu truy vấn sau

```
full AND text AND search AND (elasticsearch OR lucene)
```

Kết quả thu được sẽ chỉ bao gồm các documents chứa các từ khoá **full**, **text**, **search** và (**elasticsearch** hoặc **lucence**).

Quá trình này thường diễn ra khá nhanh và đơn giản. Thường dùng để lọc bớt đi các documents không thoả mãn điều kiện cho trước

### Term Frequency/Inverse Document Frequency (TF/IDF)

Khi chúng ta đã có 1 danh sách các documents thoả mãn điều kiện, chúng cần được phân hạng theo 1 thứ tự thích hợp. Không phải mọi documents đều chứa tất các term và một vài terms sẽ quan trọng hơn số còn lại. Điểm đánh giá (relevance score) của document sẽ phụ thuộc (1 phần) vào trọng số của mỗi term xuất hiện trong document.

#### Term Frequency

Tần suất term xuất hiện trong document như thế nào? Tần suất càng cao thì weight(trọng số) càng lớn. 1 trường (field) bao gồm 5 thể hiện của cùng 1 term sẽ có mức độ liên quan tới term đó cao hơn trường chỉ bao gồm 1 thể hiện. Term frequency được tính như sau

```
tf(t in d) = √frequency

// t là viết tắt của term, d là viết tắt của document
term frequency tf là căn bậc 2 của số lần term xuất hiện trong document
```

Nếu ta không quan tâm về tần suất xuât hiện của term trong field, và tất cả những gì ta quan tâm chỉ là term có xuất hiện trọng document, ta có thể vô hiệu hoá (disable) term frequencies trong field mapping như sau:

```javascript
PUT /my_index
{
  "mappings": {
    "doc": {
      "properties": {
        "text": {
          "type":          "string",
          "index_options": "docs" 
        }
     }
    }
  }
}
```

> Thiết lập **index_options** với giá trị **docs** sẽ disable term frequencies và term positions. 1 trường với mapping như thế này sẽ không đếm bao nhiêu lần term xuất hiện và sẽ không hữu dụng cho truy vấn phrase hoặc proximity. 

#### Inverse Document Frequency

Tần suất xuất hiện của term trong tất cả các documents của collection? Xuất hiện càng nhiều, thì trọng số sẽ càng thấp. Các term thông dụng như **and** hoặc là **or** đóng góp khá ít vào việc đánh giá score của document vì chúng xuất hiện gần như trong tất cả các documents, trong khi các term ít thông dụng như **elastic** hoặc **hippopotamus** giúp chúng ta có thể xem xét score của các documents rõ ràng hơn. Inverse Document Frequency sẽ được tính như sau

```
idf(t) = 1 + log ( numDocs / (docFreq + 1))

Inverse Document Frequency (idf) của term t là logarithm của số lượng các documents được đánh index chia cho số lượng các documents bao gồm term
```

### Field-length norm

Độ dài của field là như thế nào? Field ngắn hơn thì trọng số sẽ cao hơn. Nếu term xuất hiện trong field ngắn như là **title** thì ta có thể thấy nội dung của field đó sẽ tập trung vào term hơn là việc term xuất hiện trong một field lớn hơn là **body**. Field-length norm được tính như sau:

```
norm(d) = 1 / √numTerms
field-length norm (norm) là nghịch đảo của căn bậc hai số lượng các terms trong field
```

Trong khi field-length norm khá quan trọng trong full-text-search thì cũng có nhất nhiều fields không cần norm. Norm tiêu tốn xấp xỉ 1 byte cho mỗi string field trong mỗi document (kể cả document không chứa field). Ta có thể sử dụng field mapping để disable norm trên **analyzed fields** như sau:

```javascript
PUT /my_index
{
  "mappings": {
    "doc": {
      "properties": {
        "text": {
          "type": "string",
          "norms": { "enabled": false } 
        }
      }
    }
  }
}
```

### Kết hợp các thành phần

3 thành phần - term frequency, inverse document frequency và field-length nore - được tính toán và lưu trữ trong quá trình đánh index (chỉ mục) cho document. Chúng được sử dụng để tính toán trọng số (weight) của 1 term riêng biệt trong từng document cụ thể

> Khi nói đến document ở các công thức trên, thực chất là chúng ta đang nói về field trong 1 document. Mỗi field sẽ có inverted index (chỉ mục ngược) của riêng nó và vì thế với TF/IDF, giá trị của 1 field là giá trị của document

Ta xét 1 ví dụ đơn giản: document với field **text** có giá trị: **quick brown fox**. Ta thực hiện truy vấn term **fox** như sau:

```
PUT /my_index/doc/1
{ "text" : "quick brown fox" }

GET /my_index/doc/_search?explain
{
  "query": {
    "term": {
      "text": "fox"
    }
  }
}
```

Ta thu được các kết quả tương ứng với các giá trị **tf**, **idf**, **field-length norm** như dưới đây

```
weight(text:fox in 0) [PerFieldSimilarity]:  0.15342641 
result of:
    fieldWeight in 0                         0.15342641
    product of:
        tf(freq=1.0), with freq of 1:        1.0 
        idf(docFreq=1, maxDocs=1):           0.30685282 
        fieldNorm(doc=0):                    0.5 
```

Trong thực tế, chúng ta cần truy vấn với nhiều hơn 1 term. Do đó ta cần có 1 cách để có thể kết hợp các trọng số của nhiều terms lại với nhau. Để thực hiện điều này, ta sẽ sử dụng **Vector space model**.

### Vector space model

**Vector space model** cung cấp cách để đối chứng 1 câu truy vấn multi-terms với 1 document. Đầu ra là 1 score biểu diễn mức độ document match với câu truy vấn đó. Để làm được điều này, mô hình (model) biểu diễn cả document và câu truy vấn (query) như là các vectors

1 vector chỉ đơn thuần là một mảng chiều (one-dimensional array) bao gồm các con số

```
[1, 2, 5, 22, 3, 8]
```

Trong **vector space model** mỗi một con số trong vector là trọng số của term, được tính với term frequency/inverse document frequency.

```
Tips: TF/IDF thường được dùng để tính trọng số của term cho vetor space model.

Nó là 1 giải thuật đơn giản và có hiệu quả cao khi cung cấp các kết quả tìm kiếm chất lượng cao và đảm bảo về vấn đề thời gian.
```

Hãy tưởng tượng rằng chúng ta truy vấn cho cụm **happy hippopotamus**. Từ phổ biến như **happy** sẽ có trọng số thấp, trong khi từ không phổ biến như **hippopotamus** sẽ có trọng số cao. Ta giả sử rằng **happy** có trọng số là 2 và **hippopotamus** có trọng số 5. Ta có thể trực quan hoá vector 2 chiều đơn giản - **[2,5]** - như là 1 đường trên đồ thị bắt đầu ở điểm **(0,0)** và kết thúc ở điểm **(2,5)** như hình dưới đây:

<img src="https://user-images.githubusercontent.com/43769314/64092770-105d1b00-cd91-11e9-80d5-12521f1e469b.png" alt="vector space model 1" title="vector space model 1">

Nguồn: https://www.elastic.co/guide/en/elasticsearch/guide/current/scoring-theory.html#img-vector-query

Bây giờ hãy tưởng tượng chúng ta có 3 documents

1. I am **happy** in summer.
2. After **Christmas** I'm a **hippopotamus**.
3. The **happy hippopotamus** helped Harry.

Chúng ta có thể tạo ra 1 vector tương tự cho mỗi document, bao gồm trọng số của mỗi term truy vấn (query term) - **happy** và **hippopotamus** - xuất hiện trong document, và trực quan hoá các vectors đó trên cùng 1 đồ thị như hình dưới đây

<img src="https://user-images.githubusercontent.com/43769314/64092793-223ebe00-cd91-11e9-97b6-29c2af6c7536.png" alt="vector space model 2" title="vector space model 2">

Nguồn: https://www.elastic.co/guide/en/elasticsearch/guide/current/scoring-theory.html#img-vector-docs

- Document 1: (happy, ____________) - [2, 0]
- Document 2: (_____, hippopotamus) - [0, 5]
- Document 3: (happy, hippopotamus) - [2, 5]

Ưu điểm khi sử dụng vectors chính là chúng ta có thể so sánh giữa các vectors với nhau. Bằng việc đo góc giữa query vector và document vector, để từ đó có thể gán relevance score cho mỗi document. Nếu góc giữa document và query lớn thì relevance score sẽ thấp và ngược lại. Trong ví dụ trên thì Document 1 có relevance score thất nhất, trong khi Document 3 sẽ match với query.

```
Tips: Trong thực tế, chỉ có vector hai chiều (khi truy vấn với 2 terms) là có thể trực quan hoá bằng đồ thị, Nhưng khá may mắn vì đại số tuyến tính - 1 nhánh của toán học cung cấp 1 công cụ để so sánh góc giữa các vectors đa chiều, điều đó có nghĩa là chúng ta có thể áp dụng cùng 1 nguyên tắc như ở trên khi câu truy vấn gồm nhiều terms.

Cơ chế so sánh này có thể đọc thêm ở: [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
```
