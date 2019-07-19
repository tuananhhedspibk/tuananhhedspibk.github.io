# AWS Certificated Solution Architect

Dịch tóm tắt từ [sách](https://www.amazon.co.jp/AWS%E8%AA%8D%E5%AE%9A%E8%B3%87%E6%A0%BC%E8%A9%A6%E9%A8%93%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88-AWS%E8%AA%8D%E5%AE%9A-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%88-%E3%82%A2%E3%82%BD%E3%82%B7%E3%82%A8%E3%82%A4%E3%83%88-NRI%E3%83%8D%E3%83%83%E3%83%88%E3%82%B3%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dp/479739739X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=AWS&qid=1562850067&s=gateway&sr=8-1)

## Chương 2: Global Infrastructer and Network

### 2.1. Region and Availability zone

Khái niệm **region** ở đây có nghĩa là các khu vực (điểm) nơi mà AWS công khai, chia sẻ dịch vụ của mình.

Trong **region** bao gồm nhiều **Availability zone (AZ)**
Mỗi AZ lại gồm nhiều **Data centers**. Các Region và AZ đóng vai trò quan trọng trong thiết kế kiến trúc của AWS

#### Cải thiện tính tin cậy dựa vào sự độc lập của AZ về mặt địa lý, năng lượng

Các AZ được bố trí độc lập về mặt địa lý, năng lượng. Độc lập về mặt địa lý nghĩa là các AZ được bố trí cách nhau cỡ 10km để khi có sự cố, thiên tai xảy ra đều không ảnh hưởng đến các AZ(s) khác.

Việc bố trí các AZ xa nhau như vậy có thể dẫn đến vấn đề trễ của network. Nhưng điều đó hầu như không phát sinh trong thực tế

#### Cải thiện tính khả dụng dựa vào nhiều AZ

Một hệ thống Web + DB cơ bản gồm 1 **Load balancer** sẽ điều phối, phân tải cho **2 servers giả lập**, và kết nối tới các DB (được nhân đôi) trong không gian AZ

**Server ảo EC2** và **database service RDS** được bố trí vào nhiều AZ để tăng tính dự phòng và sẵn dùng.

<img src="https://user-images.githubusercontent.com/15076665/61116744-0248f780-a4d0-11e9-8a9d-9d2d96c4bf6c.png" width=720>

Ảnh được chụp từ [sách](https://www.amazon.co.jp/AWS%E8%AA%8D%E5%AE%9A%E8%B3%87%E6%A0%BC%E8%A9%A6%E9%A8%93%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88-AWS%E8%AA%8D%E5%AE%9A-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%88-%E3%82%A2%E3%82%BD%E3%82%B7%E3%82%A8%E3%82%A4%E3%83%88-NRI%E3%83%8D%E3%83%83%E3%83%88%E3%82%B3%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dp/479739739X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=AWS&qid=1562850067&s=gateway&sr=8-1)

**Điểm quan trọng**
- Ở các khu vực có các **Region**, mỗi **Region** lại có nhiều AZ
- Các AZ được bố trí độc lập về mặt địa lí, nguồn điện, năng lượng để tăng tính chịu áp lực thiên tai của Region
- Multi AZ tăng tính khả dụng

### 2.2. VPC

Là **Network service** chính của AWS. VPC là viết tắt của **Virtual Private Cloud**. VPC sẽ tạo cho người sử dụng các **private network** trong AWS.

VPC sẽ thông qua **Internet gateway (IGW)** - đóng vai trò cửa ra của internet, để kết nối trực tiếp với internet.

Để kết nối tới các **Điểm cơ sở - On premises**　thì VPC sẽ đi qua **private gateway ảo - virtual private gateway - VGW**, thông qua các dịch vụ trên đường truyền là **Direct connect** hoặc **VPN** để kết nối tới các **điểm cơ sở** không kết nối trực tiếp với internet

Hình minh hoạ

<img src="https://user-images.githubusercontent.com/15076665/61119870-afbf0980-a4d6-11e9-9b4f-1697a6323cc8.png" width=720>

Ảnh được chụp từ [sách](https://www.amazon.co.jp/AWS%E8%AA%8D%E5%AE%9A%E8%B3%87%E6%A0%BC%E8%A9%A6%E9%A8%93%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88-AWS%E8%AA%8D%E5%AE%9A-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%88-%E3%82%A2%E3%82%BD%E3%82%B7%E3%82%A8%E3%82%A4%E3%83%88-NRI%E3%83%8D%E3%83%83%E3%83%88%E3%82%B3%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dp/479739739X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=AWS&qid=1562850067&s=gateway&sr=8-1)

Có khá nhiều dịch vụ của AWS như **S3**, **CloudWatch**, **Dynamodb**, ... không thể đưa vào trong VPC được. Những services như vậy và tài nguyên của VPC liên kết với nhau như thế nào còn tuỳ vào quá trình thiết lập (config).

> Điểm quan trọng: VPC là dịch vụ network - network service chính của AWS

#### IP Address

Người tạo có thể gán IP address tuỳ ý (CIDR block) cho VPC

IP Address có 3 lớp
- Lớp A (10.0.0.0 ~ 10.255.255.255)
- Lớp B (172.16.0.0 ~ 172.31.255.255)
- Lớp C (192.168.0.0 ~ 192.168.255.255)

là có thể sử dụng được

Nhưng ở lớp A, Không thể lấy được CIDR block bằng /8 mà phải là /16

> Điểm quan trọng: không gian network có thể tạo bởi kích cỡ giới hạn tối đa có thể (/16)

#### Subnet

### 6-4. S3

S3 (viết tắt của **Simple Storage Service**) là service lưu trữ object không hạn chế dung lượng cũng như có tính bền cao.

S3 khác với hệ thống lưu trữ file thông thường ở chỗ, S3 lưu trữ dưới cấu trúc flat chứ không phải cấu trúc thư mục (directory), ngoài ra người dùng cũng có thể gán các thông tin (**meta data**) cho dữ liệu.

Có thể sử dụng **REST** hoặc **SOAP (Simple Object Access Protocol)** để kết nối tới các object của S3.

Người dùng không chỉ sử dụng S3 như 1 công cụ để lưu trữ dữ liệu mà còn sử dụng dưới hình thức nơi lưu trữ **EBS Snapshot**, **AWS Backend Service**

Do tính mềm dẻo mà ta có thể sử dụng **S3** cho nhiều mục đích khác nhau. Tuy nhiên dưới đây là 1 vài **use cases** chủ yếu
- Data Backup
- Data leak để giải quyết Big Data
- Lưu trữ file trung gian ETL (Extract/ Transform/ Load)
- Địa chỉ gửi log của **EC2 instance**, **container**
- Static host
- Database cho kiểu dữ liệu đơn giản Key-Value

> Point: S3 là dịch vụ có tính chịu tải cao, lưu trữ object không hạn chế dung lượng, cũng như có thể sử dụng vào nhiều mục đích khác nữa

#### Các yếu tố cấu thành nên S3

- **Bucket**: là nơi lưu trữ các object của S3. Tên của bucket không hề liên quan đến tên của **region** hay **account**. Với quy ước tên này là duy nhất trong AWS

- **Object**: là đơn vị lưu trữ dữ liệu trong S3. Được gán **key** (tương tự như tên của object). **Bucket_Name + Object_key + Version_ID** sẽ tạo nên URL cho object (chắc chắn là duy nhất). Có thể sử dụng URL này thông qua Web API để thao tác với Object. Không hạn chế số lượng object lưu trong Bucket nhưng kích cỡ tối đa của object là 5TB.

- **Meta Data**: là thông tin dùng để quản lí object. Bao gồm metadata của hệ thống (thời gian tạo + size), cũng như metadata do user định nghĩa ở ứng dụng.

#### Tính bền và toàn vẹn của S3

Dữ liệu được lưu trữ trong S3, ngoài việc được lưu tại nhiều AZ, chúng còn được **duplicate** tại nhiều bộ nhớ vật lí trong AZ. Sau khi được lưu trữ, trong khoảng thời gian sau đó cho tới lúc quá trình duplicate nếu tham chiếu đến dữ liệu thì tuỳ vào địa chỉ tham chiếu, có thể sẽ hiển thị trạng thái trước khi lưu trữ.

#### Storage Class

S3 có 5 cấp độ (storage class)
- **STANDARD**
- **STANDARD-IA**
- **ONEZONE-IA**
- **INTELLIGENT-TIERING**
- **GLACIER**

#### Quản lí life cycle

Có thể định nghĩa vòng đời (life cycle) tương ứng với tần suất sử dụng các object được lưu trong S3. Việc thiết lập life cycle có thể lựa chọn một trong những cách sau:

- **Migration Action**: là hành động thay đổi storage class tương ứng với tần suất sử dụng của dữ liệu. VD: khi mới tạo thì object có tần suất truy xuất cao, sau một thời gian nhất định, thì tần xuất truy suất cũng như độ quan trọng sẽ giảm dần, từ đó có thể di chuyển đến storage class thích hợp

- **Expiration Date Action**: là hành động xoá đi các object vượt quá thời hạn sử dụng. Ta có thể quản lí việc xoá các objects với thời gian sử dụng nhất định hoặc các objects tạm thời. Do S3 là kiểu storage trả tiền tuỳ theo lượng lưu trữ, ta nên xoá 1 cách định kì các dữ liệu không cần thiết để giảm chi phí

#### Tính năng versioning

Là tính năng cho phép quản lí nhiều phiên bản của object.
Có thể chỉ định cho phép hoặc không cho phép tính năng này trong 1 bucket.
Versioning là lưu cả bản cũ, mới của object, kèm theo đó là version ID để phân biệt.

#### Tính năng Web hosting

S3 có thể tạo môi trường hosting cho static web.
Việc release nội dung tĩnh cũng tương tự như việc sử dụng S3 - lưu tại **S3 bucket**
Với web động thì không dùng S3 đươc, mà phải dùng EC2

**Những điểm cần chú ý khi sử dụng uniquely domain cho S3 web hosting**

Khi sử dụng S3 web hosting thì sẽ tự động tạo domain (FQDN). Trong trường hợp muốn domain này là duy nhất (unique) thì cần thiết lập thông tin **CNAME** cho **DNS** của **Route 53**
Trong trường hợp này cần match giữa **bucket name** và **domain name**
VD: nếu muốn domain là **www.example.com** thì cũng cần thiết lập tên cho bucket là **www.example.com**

Tuy nhiên trong trường hợp phía trước của S3 là **CloudFront** thì không cần match giữa **domain name** và **bucket name**

<img src="https://user-images.githubusercontent.com/43769314/61519551-20ba7000-aa47-11e9-865e-1dd1005d178c.png">

**Quản lí truy nhập S3**

Có 3 chế độ quản lí đó là **Bucket policy**, **ACL**, **IAM**
- **Bucket policy**: quản lí dựa theo đơn vị là **bucket**
- **ACL** (Access control list): quản lí dựa theo cơ chế **public**/ **private** đơn vị **object**.
- **IAM**: dùng trong TH điều khiển truy nhập S3 resource theo đơn vị **user**.

> Point: Có thể sử dụng Bucket policy, ACL, IAM để quản lí truy nhập S3. Có thể sử dụng Bucket policy với IAM user nhưng nên sử dụng IAM policy

#### URL có gắn chữ kí

Là tính năng đưa ra URL có chỉ định kì hạn đối với object mà ta muốn cho phép truy nhập
