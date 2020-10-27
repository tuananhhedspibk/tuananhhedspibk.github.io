Nội dung được tham khảo từ [nguồn](https://www.datadriveninvestor.com/2020/05/28/the-master-slave-database-concept-for-beginners/)

Banner và các ảnh trong bài được lấy từ [nguồn](https://www.datadriveninvestor.com/2020/05/28/the-master-slave-database-concept-for-beginners/)

## The Master-Slave Database Concept For Beginners

### master-slave là gì ?

Khái niệm master-slave khá đơn giản, nó chỉ bao gồm `một master` và `nhiều slaves`. `Master` sẽ là nơi diễn ra `ghi dữ liệu`, `Slaves` sẽ là nơi diễn ra `đọc dữ liệu`. Dữ liệu của slave được sao lưu từ `master`.

Tăng tính tin cậy của hệ thống. Nếu chỉ có **một master DB duy nhất** DB sẽ quá tải khi có nhiều write/read request, từ đó sẽ làm cho hệ thống trở nên chậm với người dùng.

### Trực quan hoá quá trình triển khai master-slave

<img src="https://user-images.githubusercontent.com/15076665/97269658-384eee00-1871-11eb-80f7-74160aa430f7.jpeg" width="500">

Ở hình trên main database là PostgreSQL, slaves là MongoDB. Quá trình chuyển và đồng bộ hoá dữ liệu từ master sang slaves gọi là `replication`.

Có nhiều cách để đồng bộ hoá dữ liệu, tiêu biểu là dùng các `serverless function pipeline`

### Ý kiến riêng

Việc sử dụng kiến trúc `master-slave` sẽ giúp việc truy xuất dữ liệu nhanh hơn, **MỌI DỮ LIỆU**

<img src="https://user-images.githubusercontent.com/15076665/97275652-8b2ca380-1879-11eb-9f8d-b2b80accd9f6.jpeg" width="500">

Sử dụng kĩ thuật caching sẽ giúp cải thiện site của bạn, nhưng nó chỉ có tác dụng với các dữ liệu đã được query, với những dữ liệu chưa được query, sẽ phải truy vấn đến Master DB. `master-slave` thực hiện việc này tốt hơn khi dữ liệu được đọc từ bất kì slaves nào.

Dưới đây là mô hình caching theo suy nghĩ của tôi.

<img src="https://user-images.githubusercontent.com/15076665/97275979-f70f0c00-1879-11eb-90cb-975089833896.jpeg" width="500">

Dưới đây là mô hình kết hợp cả hai.

<img src="https://user-images.githubusercontent.com/15076665/97276336-6422a180-187a-11eb-948b-b1ad0f091ea3.jpeg" width="500">
