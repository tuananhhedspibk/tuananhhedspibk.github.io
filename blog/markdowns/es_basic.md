# Elastic Search Practice guide

Tham khảo từ [sách](https://www.amazon.co.jp/Elasticsearch%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89-impress-top-gear-%E6%83%A3%E9%81%93/dp/4295003913/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2CG94FTBJVCZN&keywords=elasticsearch+%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89&qid=1566870901&s=gateway&sprefix=elasticsea%2Caps%2C237&sr=8-1)

**2.1. Concepts cơ bản**

- Đơn vị lưu trữ cơ bản là **document** ~= **record** trong **table**, nhưng lưu dưới dạng JSON
Khi đưa vào ElasticSearch các document đều được thêm 1 trường để quản lí đó là **ID**
- Dưới document là **field** - tương đương 1 cặp **key - value**

Khi tiến hành search bằng ElasticSearch đa phần đều search trên field, quá trình index cũng diễn ra trên field

- Kiểu dữ liệu **text** khi lưu trữ sẽ đươc cho đi qua bộ **Analyzer** để tách thành các **tokenizer**
- Kiểu dữ liệu **keyword** thì không bị tokenize mà sẽ được giữ nguyên và tìm kiếm theo *nguyên khối*. VD:

> taro.yamada@example.com

sẽ không bị tìm kiếm theo từng thành phần như **yamada** hay **example.com** mà sẽ là cả khối **taro.yamada@example.com**

- **index** - gồm 2 ý nghĩa
  - Nơi lưu trữ document
  - Tách document (tuỳ theo analyzer) -> cấu thành thông tin **transpose index**, quá trình lưu index là việc 1 số lượng **shard** nhất định được phân chia và l**ưu trữ phân tán trên các nodes**

- **document type** - cho biết document được tạo nên từ fields nào (tuỳ vào tính chất của document)
VD: với bài viết blog thì các thuộc tính cần có là: **nội dung chính**, **ngày đăng**, **người tăng**, ...

- **mapping** - ghi lại thông tin về **kiểu dữ liệu**, **cấu trúc dữ liệu** của các fields trong document, với elasticsearch không nhất thiết phải định nghĩa **mapping** từ trước mà thay vào đó, elasticsearch sẽ tự động đoán biết được kiểu dữ liệu và **tự động định nghĩa mapping** sau đó sẽ lưu trữ document

- **node** ở đây là các server mà Elasticsearch (ES) hoạt động, ES chạy trên máy ảo JVM (mỗi một instance của JVM sẽ gọi là node). Phương pháp deploy điển hình là khởi động 1 node duy nhất trên các OS của các Server vật lí (hoặc ảo hoá)
  - Các nodes đều có 1 tên duy nhất (node.name) - cũng là tên file config của node

- **cluster** - là tập các nodes được gộp lại thành 1 nhóm (khi khởi động ES, có nhiều nodes cùng khởi động, chúng sẽ gửi tin nhắn qua lại và tự thiết lập nhóm)
  - Các clusters đều có 1 tên phân biệt (unique) là **cluster.name**
  - với các nodes group có cùng **cluster.name** chúng sẽ được coi nhưng chung 1 cluster và ngược lại

- **shard** - dữ liệu được đánh index trong ES sẽ được lưu (phân tán) trên nhiều nodes khác nhau (chúng được sao lưu thành nhiều bản - mỗi bản này gọi là shard)
  - Thực thể của các shards chính là các **index files Lucence** được tạo ra trên các node
  - ES sẽ liên kết các nodes lại với nhau cho mục đích tìm kiếm, lưu trữ (trên các **lucence files**)
  - Cần chỉ ra **số lượng shards** khi đánh index
  - Nhưng không thể tăng số lượng shard sau khi index (cần dự ước số lượng shard từ trước)

- **Replica** - là **cơ chế duplication tự động** các shard của ES. Shard gốc được sử dụng làm source cho quá trình duplication gọi là **primary shard**, các shard đươc duplicate gọi là **Replica shard**
  - Khi index thay đổi thì **primary shard** sẽ thay đổi đầu tiên, sau đó chuỗi các **replica shards** cũng sẽ được phục chế theo đó
  - Để tăng tính khả dụng thì hai loại **primary shard** và **replica shard** không nên được gán cho nhau. Vì khi

> Node bị hỏng -> shard bị mất -> 1 replica shard sẽ được chọn thay cho primary shard 1 cách tự động

Việc có nhiều replica cũng giúp tăng khả năng xử lí song song. Có thể thay đổi số lượng replica sau khi index

Mô hình của 1 cluster:

<img src="https://user-images.githubusercontent.com/43769314/63745567-80752800-c8dd-11e9-8f76-9f5758cd8e52.png" width="720">

**2.2. Cấu trúc hệ thống**

ES có cấu trúc phân tán, các clusters chứa các nodes (các nodes sẽ liên kết, liên lạc, gửi tin cho nhau cũng như có vai trò kế thừa nhau)

**Node Type** - có 4 loại nodes
- Master
- Data
- Ingest
- Coordinating

Default setting nodes thường đảm nhận vai trò của **master**, **data** và **ingest** node

Với các hệ thống quy mô nhỏ thường sẽ thấy 1 ~ vài **default setting nodes** tuy nhiên khi số lượng nodes tăng lên thì vai trò của 1 node sẽ được phân tán và chia thành nhiều nodes con hơn (mỗi node sẽ đảm nhận 1 nhiệm vụ riêng biệt)

**Masterーnode** - có vai trò quản lí trong 1 cluster, nó sẽ đảm nhận các nhiệm vụ như sau
- Quản lí node tham gia và rời khỏi cluster: bằng cách gửi **ping** đến các nodes còn lại, dựa vào việc có/ không có phản hồi để nhận biết node còn hoạt động hay không

- Quản lí metadata của cluster: số lượng nodes, shards, mapping, index, .... Truyền đạt thông tin thay đổi cho các nodes khi cần

- Gán và sắp xếp, bố trí các shards

Khi **master node** ngừng hoạt động thì các tính năng của ES cũng ngừng theo vậy nên trong hệ thống cần có các **nodes master dự phòng**, các nodes này gọi là **master-eligible node**

Mặc định mọi node sẽ là **master-eligible** nhưng có thể thiết lập để chỉ có 1 hoặc 1 vài node chọn làm **master-eligible** bằng cách chỉnh sửa file setting **elasticsearch.yml** của node như sau

```javascript
node.master: true
node.data: false
node.ingest: false
```

Mặc định cả 3 giá trị trên đều là **true**

**Data-node**: Có nhiệm vụ lưu trữ dữ liệu, xử lí, trả lời query, quản lí các **index files Lucence**
Sau khi client đánh index cho document thì sẽ quyết định shard nào sẽ lưu trữ, sau đó sẽ tiến hành routing đến Data node nào mang số hiệu shard đó.

<img src="https://user-images.githubusercontent.com/43769314/63750012-91c33200-c8e7-11e9-902c-8299c0a6ad9d.png" width="720">

Có 2 pha:
- **scatter** - routing đến node chứa nhiều hơn 1 shard để xử lí nội dung query
- **gather** - tập hơp response từ các nodes

<img src="https://user-images.githubusercontent.com/43769314/63752172-bcaf8500-c8eb-11e9-8b2a-b0474cdb9cc6.png" width="720">

Mặc định mọi nodes đều mang vai trò của **Data node**, ta có thể thay đổi vai trò đó tương tự như với **master node** với

```javascript
node.master: false
node.data: true
node.ingest: false
```

**Ingest-node** - tiền xử lí dữ liệu trước khi được đánh index theo cơ chế pipeline (tuỳ từng tình huống có thể sử dụng pipeline hoặc không). Mặc định mọi nodes có thể đảm nhận vai trò của **ingest-node** những cũng có thể thiết lập qua file **elasticsearch.yml**

```javascript
node.master: false
node.data: false
node.ingest: true
```

**Coordinating-node** - chỉ tiến hành điều phối request từ client đến các shard (**scatter** & **gather**), thiết lập cũng tương tự 3 loại trên

```javascript
node.master: false
node.data: false
node.ingest: false
```

<img src="https://user-images.githubusercontent.com/43769314/63756054-ace76f00-c8f2-11e9-8038-1e0247e2d3b5.png" width="720">

Dùng để phân tải cho quá trình xử lí request cũng như xử lí thống kê kết quả tìm kiếm (tránh để **Data node** đảm nhiệm)

**Việc chọn master node**

Để đảm bảo tính khả dụng của hệ thống nên chọn từ **3 master-eligible nodes trở lên (số lẻ)**

Nếu chọn số lượng chẵn (2, 4, 2k, ...) thì sẽ dẫn đến tình trạng **split-brain**. Được minh hoạ như hình dưới đây

<img src="https://user-images.githubusercontent.com/43769314/63819090-e5cd2580-c97e-11e9-929f-0b1763683499.png" width="720">

Nếu 2 nodes bị mất kết nối thì từ 1 cluster sẽ bị chia cắt thành 2 clusters, do tại mỗi cluster đều không biết được đâu là master node nên mỗi node sẽ tự động trở thành master node, khi đó nếu có request thay đổi từ phía client thì sẽ chỉ có 1 bên được thay đổi từ đó dẫn đến tình trạng bất đồng bộ trong cluster

Có 2 cách giải quyết đó là
- Chọn số lượng **master-eligible node** từ 3 nodes trở lên (số lẻ)
- Thay đổi thiết lập trong file **elasticsearch.yml**, bằng việc thay đổi giá trị của tham số **discovery.zen.minimum_master_nodes** bằng với số lượng đa số (hơn nửa) **master-eligible node**

Khi đó nhóm nào có số lượng nodes chiếm hơn nửa số lượng node của cả cluster thì sẽ chứa **master node** và ngược lại.

VD: Nếu có 3 **master-eligible node** thì giá trị tham số **discovery.zen.minimum_master_nodes** sẽ là 2 khi đó nodes group nào có 2 nodes trở lên sẽ có **master node** trong đó

> discovery.zen.minimum_master_nodes = number_nodes / 2 + 1

Tham số này có gía trị mặc định là **1** vậy nên khi sử dụng số lượng nodes là 3 thì phải thiết lập lại nếu không sẽ dẫn đến tình trạng **split-brain**

<img src="https://user-images.githubusercontent.com/43769314/63820106-013a2f80-c983-11e9-9532-3bc233023749.png" width="720">
  
**Cách các nodes tham gia vào cluster**

ES có cơ chế giúp cho các nodes tự động tham gia vào cluster khi được khởi tạo. Cụ thể như sau:

Khi các nodes được khởi động, chúng sẽ thử kết nối đến node được định nghĩa qua tham số **discovery.zen.ping.unicast.hosts**, nếu thành công, node sẽ trở thành 1 thành viên của cluster

Sau khi join vào cluster, master node định kì sẽ gửi các package đến các nodes còn lại để kiểm tra chúng có tồn tại hay không, ngược lại các nodes đó cũng sẽ gửi cho master node các packages về tình trạng hoạt động của chúng, nếu trong khoảng thời gian **timeout** mà master node không nhận được hồi đáp thì sẽ coi như node không phản hồi đã không còn tham gia vào cluster

**Cơ chế**

ES sử dụng cơ chế **discovery** cụ thể là **Zen discovery** cho việc quản lí cũng như detect các nodes tham gia vào cluster (được tiến hành nội bộ trong ES)

```javascript
cluster.name: my-cluster
discovery.zen.ping.unicast.hosts: ["master1", "master2", "master3"]
discovery.zen.minimum_master_nodes: 2
```

Đầu tiên là thiết lập tên cluster, sau đó sẽ kết nối tới các **master-eligible nodes** (dựa theo **host name** hoặc **IP addr**). Tuỳ vào việc cluster đã có master node hay chưa mà quá trình xử lí sẽ khác nhau

- Nếu cluster đã có master node: node này sau khi được **master node** chấp nhận, nó sẽ tham gia vào cluster

- Nếu cluster chưa có master node:
  - Nếu node mới này là **master-eligible node** nó sẽ tham gia vào quá trình tìm ra **master node** (đương nhiên là sẽ dựa theo **minimum_master_nodes parameter**) để tạo nên cluster
  - Nếu node mới này không phải **master-eligible node** thì nó sẽ chờ quá trình trên kết thúc hoặc cũng có thể tham gia vào 1 cluster mới

Giá trị mặc định của **discovery.zen.ping.unicast.hosts** là ["127.0.0.1", "[::1]", "], điều này để tránh node không tham gia vào các clusters khác cũng như liên lạc được với các nodes khác vậy nên khi xây dựng **cluster** có nhiều nodes thì việc thiết lập giá trị cho tham số này là cần thiết

**Phân chia shard và replica**

Số lượng shards mặc định của 1 node là 5

Việc thiết lập **số lượng shards** cũng như **số lượng replicas** đều hướng tới 2 mục đích:
- Tăng tính khả dụng
- Tăng khả năng tìm kiếm

**Quan điểm thiết lập số lượng shards**

- Cần dự đoán trước số shards sẽ sử dụng sau này dựa theo số lượng nodes có thể scale up
- Tuy nhiên nếu kích cỡ dữ liệu sau khi đánh index thuộc khoảng (20GB - 30GB) thì chỉ cần 1 shard là đủ (nghĩa là số lượng shards không nhất thiết phải phụ thuộc vào số lượng nodes)

> overallocation: thiết lập quá nhiều shard

> underallocation: thiết lập quá ít shard so với số lượng node


**Quan điểm thiết lập số lượng replica**
- Tăng số lượng replica để tăng khả năng tìm kiếm: ưu điểm của việc sử dụng replica đó là tăng tính khả dụng, chịu tải cho quá trình tìm kiếm (phân tán đều tải), nhưng nếu số lượng shards nhiều thì **kích cỡ Lucence index file sẽ tăng**
- Đưa số lượng replica về 0 khi tiến hành Batch handle, bulk index
  - Mục đích chính là giảm thời gian xử lí, tránh phải sao lưu ra quá nhiều bản sao khi đánh index dữ liệu, giảm đi rủi ro phát sinh lỗi, sau khi quá trình đánh index kết thúc ta sẽ thiết lập lại giá trị cho replica

> Số lượng shard không thể thay đổi sau khi đánh index, số lượng replica thì có thể thay đối

Thực tế là nếu thiết lập số lượng shards nhiều (**overallocation**) thì có thể dẫn đến **overhead** vì khi đó sẽ có 1 số lượng các nodes tồn tại trên nhiều shards dẫn đến khi truy vấn sẽ phải tiến hành trên nhiều shards (có thể overhead nhưng không quá nghiêm trọng) so với việc thiết lập ít shards dẫn đến **underallocation** nghĩa là sẽ không thể phân tán tải khi lượng dữ liệu tăng lên

**2.3.REST API**

<img src="https://user-images.githubusercontent.com/43769314/63828422-58e79380-c9a1-11e9-9199-398b741b15fa.png" width="720">


**3. Query Language**

**4. Analyzer, Aggregation**
**4.1. Analyzer and Full text search**

- **Analyzer** là tính năng xử lí tách các đoạn văn thành các từ đơn để phục vụ cho mục đích **full text search**

Xét ví dụ, trong văn bản có câu

> 「マラソンが東京で開催される」

nhưng người dùng sẽ tìm kiếm theo câu

> 「東京でマラソン」

Hai câu này không hề giống và đồng nhất với nhau vậy để cho ra kết quả chính xác, cần phân tách câu thành các từ đơn (câu văn lẫn câu truy vấn)

<img src="https://user-images.githubusercontent.com/43769314/63837406-665b4880-c9b6-11e9-9311-1d5d612632b5.png" width="720">

Tiếng nhật lẫn tiếng Anh đều biến đổi các từ đề phù hợp với các thì trong ngôn ngữ, như ví dụ dưới đây

<img src="https://user-images.githubusercontent.com/43769314/63840517-28612300-c9bc-11e9-8815-5fa1effb0dba.png" width="720">

Vậy nên cần phải có quá trình xử lí các từ khi tiến hành **tokenizer - phân tách từ**. Quá trình này gồm 3 quy tắc như sau

- **Stemming**: Biến các từ về *thể chuẩn*. VD: "making", "makes" -> "make" ; "食べる", "食べた" -> "食べ"
- **Chuẩn hoá**: chữ hoa -> chữ thường, katakana -> hiragana, ...

- **stop-word**: từ không mang ý nghĩa (trong tiếng Anh là: is, at, a, ...)

<img src="https://user-images.githubusercontent.com/43769314/63842550-c4405e00-c9bf-11e9-826b-91aa0833ffce.png" width="720">

**Định nghĩa Analyzer**

Mapping bao gồm: field và kiểu dữ liệu nhưng ta có thể chỉ ra **Analyzer** cho từng field thông qua thuộc tính **analyzer** của thuộc tính nằm dưới trường **properties**

<img src="https://user-images.githubusercontent.com/43769314/63844157-a58f9680-c9c2-11e9-9986-9ea11fc007a1.png" width="720">
