## AWS Quick Note

Tham khảo từ các nguồn:
- https://qiita.com/shibataka000/items/e3f3792201d6fcc397fd

### 1. Amazon Cognito

Cung cấp **authentication**, **authorization** và **user management** với web, mobile app

Gồm 2 phần:
- User pool - là các **user directories** cung cấp **signin**, **signup** options cho users.
  - Bản chất là user directory, mỗi member sẽ có 1 profile directory mà ta có thể truy cập thông qua SDK
- Identity pool - cho phép phân quyền access của user đối với các AWS services
  - Có thể được sử dụng để lấy về **temporary AWS credential** cho mục đích access các AWS services khác
  - Cần tích hợp với **User pool** để lưu trữ **user profile information**

Cơ chế hoạt động
1. Đăng nhập thông qua **user pool**, **user pool** sẽ cung cấp **user pool token** (bản chất là JSON web tokens - JWT) cho phía user nếu đăng nhập thành công
2. Tiếp theo, hoán đổi giữa **token** và **AWS credentials** thông qua **identity pool**
3. Sử dụng **AWS credential** này để truy cập vào các **AWS Services**

### 2. DynamoDB

Một dạng database (key-value) - NoSQL, ưu tiên tính mở rộng cao

### 2.1. Partition Key
Dữ liệu trong DynamoDB được lưu phân tán trên nhiều partitions khác nhau. Việc dữ liệu được lưu ở partition nào sẽ được định nghĩa thông qua **partition key**

Trong partition có **sort key** thì dữ liệu cũng có thể được sắp xếp

Xét ví dụ dưới: Với bảng Pets, ta có **partition key** là **AnimalType** và **sort key** là **Name**

<img src="https://camo.qiitausercontent.com/8cd0a0437e865d14eef0e14960204b306c6cf2d6/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36313634312f62306133326162322d383061312d633763302d353464372d3333386130346636623135362e706e67" width="720">

Nguồn: https://qiita.com/shibataka000/items/e3f3792201d6fcc397fd

### 2.2. Các API dùng với DynamoDB

- Tạo dữ liệu:
  - **PutItem** - Ghi dữ liệu (1 record) với **Primary Key** chỉ định trước
  - **BatchWriteItem** - Ghi dữ liệu theo batch
- Đọc/ lấy dữ liệu:
  - **GetItem** - Lấy dữ liệu (1 record), có chỉ ra **Primary Key**
  - **BatchGetItem** - Lấy dữ liệu theo batch
  - **Query** - Lấy (nhiều) dữ liệu thông qua việc chỉ định **Partition Key**, chỉ định **Sort Key** để filter dữ liệu thu được
  - **Scan** - Lấy về toàn bộ dữ liệu của bảng
- Cập nhật dữ liệu:
  - **UpdateItem** - Update dữ liệu (1 record) thông qua việc chỉ định **Primary Key**
- Xoá dữ liệu:
  - **DeleteItem** - Xoá dữ liệu (1 record) thông qua việc chỉ định **Primary Key**
  - **BatchWriteItem** - Xoá dữ liệu theo batch
  
**Primary Key** là key dùng để phân biệt các record (unique).

Thường thì sẽ sử dụng **Primary Key** ở các API, nhưng để truy vấn có điều kiện thì thường dùng **Partition Key** và **Sort Key**

### 2.3. Các loại Key

- **Partition Key**
  - Dùng để quyết định phân vùng mà dữ liệu được lưu trữ
  - Nên thiết lập Key để sao cho access/ truy nhập đến các phân vùng là đồng đều nhất có thể
- **Sort Key**
  - Dùng để sắp xếp dữ liệu trong một phân vùng sao cho về mặt vật lí chúng gần nhau nhất có thể
  - Với **Query API** thông qua việc chỉ định **Sort Key** ta có thể filter dữ liệu lấy về được
- **Primary Key**
  - Là key phức hợp của **Partition Key** và **Sort Key** hoặc cũng có thể là **Partition Key**
  - Dùng để phân biệt tính duy nhất (unique) của dữ liệu
  
### 2.4. Secondnary Index
### 2.4.1. Global Secondnary Index (GSI)

Là việc tạo ra một bảng mới với **Sort Key** và **Partition Key** khác dựa theo một bảng có sẵn. Lấy ví dụ như sau

<img src="https://camo.qiitausercontent.com/9c37eb77ee90fdca9d8768f89803c4c8b4c80a6d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36313634312f35396162353835642d393664332d656236302d393763372d6537616663376366643564652e706e67" width="720">

Nguồn: https://qiita.com/shibataka000/items/e3f3792201d6fcc397fd

Có bảng GameScores lưu trữ score của một game

**Partition Key** và **Sort Key** của bảng lần lượt là **UserId** và **GameTitle**. Nhưng với hai keys như vậy ta không thể biết được user nào có điểm số cao nhất đối với từng trò chơi.

Vậy nên sử dụng **GameTitle** làm **Partition Key**, **TopScore** làm **Sort Key**, ta sẽ tạo ra một bảng mới. Thông tin cần thiết ở đây là thông tin của người dùng, vậy ở bảng mới, ta chỉ cần **UserId** là đủ

<img src="https://camo.qiitausercontent.com/76eaab5546713d00fd02b114770d552a84644a7f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36313634312f33643936663962382d313366622d306631642d306530352d6534623336346133373734382e706e67" width="720">

Nguồn: https://qiita.com/shibataka000/items/e3f3792201d6fcc397fd

### 2.4.2. Local Secondnary Index

Là việc tạo một bảng mới với **Partition Key** có sẵn và **Sort Key** khác dựa theo một bảng có trước. Xét ví dụ sau:

<img src="https://camo.qiitausercontent.com/081195566352079ef8f4270201e5d22cd7b7bf45/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36313634312f39616333323630622d636536632d353461302d363661622d3664323664303135646363302e706e67" width="720">

Nguồn: https://qiita.com/shibataka000/items/e3f3792201d6fcc397fd

Với bảng trên ta có **ForumName** là **Partition Key**, **Subject** là **Sort Key**. Việc lấy được các thông tin về danh sách các subjects của các threads trong quá khứ là việc không thể.

Nhưng với việc vẫn sử dụng **ForumName** làm **Partition Key** nhưng **LastPostDateTime** làm **Sort Key** thì mọi việc trở nên dễ dàng hơn, việc tạo ra bảng mới này cũng chỉ cần thêm dữ liệu **Subject** của các **Threads**

<img src="https://camo.qiitausercontent.com/b6cb22d8e3b6aa60c587dc6fcec2fb2b1cb2f12f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36313634312f32316535313338372d643336362d373861332d663964662d6162366637633265366432322e706e67" width="720">

Nguồn: https://qiita.com/shibataka000/items/e3f3792201d6fcc397fd
