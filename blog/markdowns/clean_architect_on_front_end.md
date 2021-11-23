# Clean Architect Với FrontEnd

※ Bài viết được dịch từ: https://dev.to/bespoyasov/clean-architecture-on-frontend-4311

## Mục tiêu

Đầu tiên chúng ta cùng nhau bàn về clean architect (kiến trúc sạch) với các khái niệm cơ bản như `domain`, `usecase`, `application layers`. Sau đó sẽ là cách chúng ta áp dụng nó cho front end.

Tiếp theo chúng ta sẽ cùng nhau thiết kế một cookie store frontend-app theo quy tắc của clean architect. Cuối cùng sẽ là triển khai một usecase trong số đó.

## Thiết kế ứng dụng

### Thiết kế domain

Đây là phần quan trọng nhất trong ứng dụng. Đây sẽ là nơi chứa các entities và thực hiện việc biến đổi dữ liệu.

Store domain sẽ bao gồm:
- Data types của mỗi entity: user, cookie, cart, order.
- Factories để tạo entity (class nếu viết bằng OOP)
- Hàm biến đổi dữ liệu (hàm này chỉ nên phụ thuộc vào domain rules)

Các hàm biến đổi này có thể là:
- Tính giá tiền.
- Kiểm tra xem một item có nằm trong cart hay không.

<img src="https://user-images.githubusercontent.com/15076665/143025746-eb520186-d663-4f93-86f1-8886ea7d8ab8.png">

### Thiết kế tầng ứng dụng

Tầng này sẽ bao gồm các use-cases. Một usecase luôn có:
- Actor
- Action
- Result

Trong ứng dụng lần này, chúng ta có:
- Mua sản phẩm
- Payment (gọi API của bên thứ 3)
- Update, Render sản phẩm, order

<img src="https://user-images.githubusercontent.com/15076665/143027053-d0220c8b-9099-4758-ba9a-156879b0fbdd.jpeg">

### Thiết kế tầng adapter

Định nghĩa các modules tương tác với các dịch vụ bên ngoài (external services)

Trong ứng dụng FrontEnd, adapter thường là:
- UI Framework
- API server request modules
- Converter cho API response, và truyền kết quả vào Application layer

<img src="https://user-images.githubusercontent.com/15076665/143027719-d68bcf1d-758e-42eb-84cb-5a21ac371251.jpeg">

### Suy tưởng sang MVC

Tham chiếu tới MVC
- Model: các domain entities
- Controller: domain entity converter, application layer
- View: Adapter layer

## Đi vào chi tiết: Domain
