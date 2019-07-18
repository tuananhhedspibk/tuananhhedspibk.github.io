## GraphQL Tutorials

- Nguồn: https://www.howtographql.com/basics/0-introduction/
- Nguồn ảnh background: https://techblog.zozo.com/entry/graphql_error_handling

### Introduction
- Là 1 chuẩn API
- Cho phép **declarative data fetching**, tức client có thể chỉ ra chính xác dữ liệu nào cần thiết thông qua API
- GraphQL đưa ra 1 endpoint duy nhất và responds lại đúng dữ liệu mà client cần
- GraphQL giảm thiểu tối đa lượng dữ liệu truyền qua network qua đó cải thiện application operation

### GraphQL is the better REST
-  GraphQL được phát triển với mục đích tăng tính flex và hiệu quả trong giao tiếp giữa client và server
- Khái niệm **endpoint** ở đây có thể hiểu như là **API endpoint** (VD: /user/id)
- Ta xét 1 VD đơn giản như sau: cần xây dựng 1 blogging app, cụ thể là xây dựng trang cá nhân của 1 người dùng. Trong trang này ta muốn hiển thị: Tên người dùng, Danh sách title của các bài posts của người dùng và 3 người theo dõi gần đây nhất của người dùng hiện tại. Có thể liệt kê 3 API endpoint mà client sẽ sử dụng như sau:
  - **/users/id** (thông tin cá nhân của người dùng), **/users/id/posts** (danh sách bài posts của người dùng), **/users/id/followers** (danh sách người theo dõi của người dùng hiện tại)
  - Nếu chỉ sử dụng REST API thì lượng thông tin thừa fetch về phía client là khá nhiều (VD: dữ liệu cá nhân của người dùng, ngoài tên còn có thể có **ngày sinh, địa chỉ, ...**, tương tự với **posts API** và **followers API**)
  - Nếu không thực hiện theo chuẩn **REST** thì cứ mỗi khi **UI Design** bên phía client thay đổi thì ta buộc phải thay đổi cấu trúc của **API** từ đó dẫn đến việc mất thời gian trong quá trình xây dựng ứng dụng
- Với GraphQL chỉ cần 1 endpoint duy nhất là có thể lấy về **chỉ những dữ liệu cần thiết**
- Bản chất ở đây là client sẽ gửi cho server `1 POST request` duy nhất, request này sẽ chứa câu truy vấn dữ liệu mà client cần sử dụng và sau đó trả về cho client dữ liệu dưới dạng JSON
- **Không còn tình trạng Over - and Underfetching**
  - **Overfetching** - là việc kéo về những dữ liệu không cần thiết
  - **Underfetching** - là trường hợp ngược lại, các endpoints không trả về đủ dữ liệu cần thiết nên client phải gửi thêm các requests khác tới server, dấn đến tình trạng **n + 1 requests problem**

- **Rapid Product Iterations**
  - Với REST: cấu trúc của endpoint sẽ phải thay đổi theo dữ liệu mà client cần
  - Với GraphQL: không cần chỉnh sửa API khi product requirements và thiết kế thay đổi, có thể ứng phó nhanh với user feedback

- GraphQL sử dụng **type system** để định nghĩa khả năng của API
- **Schema** hoạt động như một cầu nối giữa client và server -> giúp team dev 2 bên có thể hoạt động độc lập với nhau

### Core Concepts
- The Schema Definition Language (SDL)
  - Sử dụng SDL để định nghĩa **type**
 ```js
 type Person {
    name: String!
    age: Int!
 }

 type Post {
    title: String!
 }
 ```

  - Kí hiệu **!** chỉ ra rằng property là bắt buộc
  - Sử dụng SDL để định nghĩa **relation** (quan hệ giữa các types)

```js
type Person {
    name: String!
    age: Int!
    posts: [Post!]!
}

type Post {
    title: String!
    author: Person!
}
```

  - Dữ liệu trả về từ GraphQL là không cố định như REST API

```js
{
    allPersons {
        name
    }
}
```

  - Trong ví dụ trên `allPersons` gọi là **root** của query, tất cả mọi thứ đi sau **root** của query gọi là **payload** của query

```js
{
    allPersons {
        name {
            posts {
                title
            }
        }
    }
}
```

  - Ở ví dụ trên, ngoài việc fetch name của user, ta còn tiến hành fetch cả posts (kèm title) của user
- Mutation: là khái niệm dùng khi muốn thay đổi dữ liệu có trong DB, có 3 loại mutations
  - **creating** new data
  - **updating** existing data
  - **deleting** existing data

```js
mutation {
    createPerson(name: "Bob", age: 36) {
        name
        age
    }
}
```

- Trong ví dụ trên, ta thêm từ khoá **mutation** ở đầu, truyền thêm tham số **name**,**age** cho **root** là **createPerson**, trong **payload** ta cũng sẽ chỉ ra các fields tương ứng
- Giá trị trả về sẽ là

```json
"createPerson": {
    "name": "Bob",
    "age": 36
}
```

- Kết quả trả về ở trên sẽ **tương ứng với payload** đã gửi lên cho server
- Ngoài ra ta cũng có thể thêm các trường khác vào trong payload của mutation, để có thể lấy thêm các thông tin khác
- Id được tạo ra thường được gen ngẫu nhiên bởi server
- **Realtime Updates with Subscriptions**
  - Ta có thể sử dụng từ khoá **subscription** để cập nhật dữ liệu từ server 1 cách real-time

```js
subscription {
    newPerson {
        name
        age
    }
}
```

  - Trong ví dụ trên, ta sẽ theo dõi khi nào có Person mới được add vào DB, lúc đó server sẽ push dữ liệu xuống client
  - Subscription sẽ **stream data** gửi về cho client, cứ mỗi khi có dữ liệu mới thì chúng sẽ được gửi về cho client subscribe

- GraphQL Schema - chỉ ra cách mà client có thể fetch cũng như update dữ liệu, là tập hợp của các **Types** với **root type** tương ứng
  - Mỗi một schema sẽ có các root types định nghĩa entry point của API

```js
type Query {}

type Mutation {}

type Subscription {}
```

  - Các root types sẽ lần lượt là **Query**, **Mutation**, **Subscription**

### Big Picture (Architecture)
- GraphQL chỉ đơn thuần là ngôn ngữ định nghĩa, nó sẽ chỉ ra GraphQL server cần có những gì
- Nếu muốn sử dụng GraphQL trong project, ta cần build GraphQL server
- Các kiến trúc thường sử dụng
  - GraphQL server với DB đã kết nối
  - GraphQL server tích hợp với 1 hệ thống có sẵn
  - Hybrid approach với **connected database** và tích hợp với hệ thống có sẵn

#### Use case 1 - GraphQL server with a connected database

- Thường được sử dụng cho *greenfield* project
- server xử lí queries và tạo response với dữ liệu mà nó lấy về từ database
- Có thể triển khai GraphQL server với bất kì phương thức giao vận nào (TCP, Websocket). Đồng thời có thể triển khai với bất cứ kiểu dữ liệu nào (SQL, NoSQL)

#### Use case 2 - GraphQL server integrating exisiting system

- Các hệ thống cũ với nhiều APIs khác nhau nên sử dụng use case này
- Có thể kết hợp sử dụng với nhiều hệ thống cùng một lúc, đồng thời che dấu đi tính phức tạp của logic fetching data
- Ở use case này sẽ không có db đi kèm vs GraphQL

#### Use case 3 - Hybrid approach with connected database & integrated systems

- Đây là use case kết hợp của 2 use case trên
- Khi truy vấn dữ liệu, hoặc là lấy từ db đi kèm hoặc là lấy từ API

### Resolver function

Ở các phần trước, chúng ta thấy rằng, phần **payload** của GraphQL query hoặc mutation đều có các fields

GraphQL có 1 *resolver function* tương ứng với từng *field* đó
Nhiệm vụ của các hàm này là lấy về dữ liệu của các fields tương ứng

Ví dụ với câu truy vấn như sau
```js
query {
    User(id: "er56431dqw21") {
        name
        friends(first: 5) {
            name
            age
        }
    }
}
```

Câu truy vấn trên dùng để lấy về thông tin liên quan đến User có id = "er56431dqw21" bao gồm **name**, cùng **5 friends** đầu tiên của người dùng (với **name**, **age**)

Quá trình truy vấn dữ liệu sẽ như sau:
- B1: Thực hiện **resolver function** ứng với **root type** là User
```ruby
User(id: String!): User
# Trả về User (có thể null) vì id có thể không tồn tại
# Đây chỉ là pseudo-code minh hoạ
```

- B2: Sau đó thực hiện **name** resolver với tham số ngầm là user truyền vào
```ruby
name(user: User!): String!
# Trả về tên của user, kiểu dữ liệu là String (không thể null)
```

- B3: Tương tự với **age**, nhưng kiểu dữ liệu của **age** là **int**
```ruby
age(user: User!): Int!
# Trả về tuổi của user, kiểu dữ liệu là Int (không thể null)
```

- B4: Gọi đến resolver function như dưới đây, với user là biến truyền vào (không tường minh) để chỉ rõ là **friends của user nào**, cộng thêm với tham số tuỳ chọn là **first** - lấy ra bao nhiêu friends của user
```ruby
friends(first: Int, user: User!): [User!]!
```

### GraphQL Clients

- Giải quyết vấn đề **over-under fetching** khi sử dụng **REST API**
- Client không cần quan tâm dữ liệu lấy về từ đâu
- Tạo cơ hội xây dựng *abstraction mới* cho frontend - dễ dàng tương tác hơn với API

### From Imperative to Declarative Data fetching

- Imperative Data fetching
  - B1: Tạo request (HTTP request)
  - B2: Nhận, parse kết quả từ server
  - B3: Lưu dữ liệu **locally**
  - B4: Hiển thị dữ liệu

- Declarative Data fetching
  - B1: Mô tả data requirements
  - B2: Hiển thị dữ liệu
  - ※ Mọi bước nằm ở giữa được triển khai bởi GraphQL Client: đặc biệt hơn nữa các thao tác, xử lí cấp độ networking như (lưu dữ liệu, ...) đều được trừu tượng hoá với tầng frontend
  