# Query In Elasticsearch

Nguồn tham khảo:
- https://www.elastic.co/guide/en/elasticsearch/reference/6.4/query-dsl-bool-query.html
- https://stackoverflow.com/questions/26001002/elasticsearch-difference-between-term-match-phrase-and-query-string
- https://viblo.asia/p/query-dsl-trong-elasticsearch-Eb85oJq2l2G

Câu truy vấn sử dụng các điều kiện logic. Các loại thường dùng

## Match All Query

Trả về toàn bộ các documents

```javascript
GET my_index/_search
{
    "query": {
        "match_all": {}
    }
}
```

## Match Query

Mặc định sử dụng toán tử **or**

```javascript
GET my_index/_search
{
    "query": {
        "match" : {
            "name" : "My Test"
        }
    }
}
```
Truy vấn trên sẽ match các bản ghi có trường **name** chứa hoặc **My** hoặc **Test**

Nếu truy vấn bằng toán tử **and**

```javascript
GET my_index/_search
{
    "query": {
        "match" : {
            "name" : "My Test",
            "operator": "and"
        }
    }
}
```
Thì kết quả sẽ phải có cả 2 từ **My** và **Test** nhưng hai từ này không nhất thiết phải đi liền nhau thành 1 cụm nghĩa là trường hợp **My elastic search will be Test** cũng sẽ **được matched**

## Match Phrase Query

```javascript
GET my_index/_search
{
    "query": {
        "match_phrase" : {
            "name" : "My Test",
        }
    }
}
```
Truy vấn theo cụm từ
**My Test is java** sẽ **được matched** nhưng **My java Test** sẽ **không được matched**

## Multi Match Query

Tìm kiếm trên nhiều trường

```javascript
GET my_index/_search
{
    "query": {
        "multi_match" : {
            "query" : "My Test",
            "fields": ["name", "title"]
        }
    }
}
```

## Term Query

Term query sẽ match các single term nguyên thể (giá trị không được analyzed). Ví dụ nếu ta có **Test** không được analyzed ở thời điểm index, câu query sau đây sẽ không trả về kết quả gì

```javascript
GET my_index/_search
{
    "query": {
        "term" : {
            "name" : "test",
        }
    }
}
```


## Bool Query

- **must** (tương đương với and - ảnh hưởng tới score)
- **filter** (giống với must nhưng **không ảnh hưởng** tới score)
- **should** (tương đương với or)
- **must_not**
