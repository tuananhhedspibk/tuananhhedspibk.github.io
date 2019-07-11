# AWS Certificated Solution Architect

Dịch tóm tắt từ [sách](https://www.amazon.co.jp/AWS%E8%AA%8D%E5%AE%9A%E8%B3%87%E6%A0%BC%E8%A9%A6%E9%A8%93%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88-AWS%E8%AA%8D%E5%AE%9A-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%88-%E3%82%A2%E3%82%BD%E3%82%B7%E3%82%A8%E3%82%A4%E3%83%88-NRI%E3%83%8D%E3%83%83%E3%83%88%E3%82%B3%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dp/479739739X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=AWS&qid=1562850067&s=gateway&sr=8-1)

## Chương 2: Global Infrastructer and Network

### 2.1. Region and Availability zone

Khái niệm **region** ở đây có nghĩa là các khu vực (điểm) nơi mà AWS công khai, chia sẻ dịch vụ của mình.

Trong **region** bao gồm nhiều **Availability zone* (AZ)**
Mỗi AZ lại gồm nhiều **Data centers**. Các Region và AZ đóng vai trò quan trọng trong thiết kế kiến trúc của AWS

#### Cải thiện tính tin cậy dựa vào sự độc lập của AZ về mặt địa lý, năng lượng

Các AZ được bố trí độc lập về mặt địa lý, năng lượng. Độc lập về mặt địa lý nghĩa là các AZ được bố trí cách nhau cỡ 10km để khi có sự cố, thiên tai xảy ra đều không ảnh hưởng đến các AZ(s) khác.

Việc bố trí các AZ xa nhau như vậy có thể dẫn đến vấn đề trễ của network. Nhưng điều đó hầu như không phát sinh trong thực tế

#### Cải thiện tính khả dụng dựa vào nhiều AZ

Một hệ thống Web + DB cơ bản gồm 1 **Load balancer** sẽ điều phối, phân tải cho **2 servers giả lập**, và kết nối tới các DB (được nhân đôi) trong không gian AZ

**Server ảo EC2** và **database service RDS** được bố trí vào nhiều AZ để tăng tính dự phòng và sẵn dùng.

**Điểm quan trọng**
- Ở các khu vực có các **Region**, mỗi **Region** lại có nhiều AZ
- Các AZ được bố trí độc lập về mặt địa lí, nguồn điện, năng lượng để tăng tính chịu áp lực thiên tai của Region
- Multi AZ tăng tính khả dụng

### 2.2. VPC
