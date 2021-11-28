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

<img width="720" src="https://user-images.githubusercontent.com/15076665/143025746-eb520186-d663-4f93-86f1-8886ea7d8ab8.png">

### Thiết kế tầng ứng dụng (application layer)

Tầng này sẽ bao gồm các use-cases. Một usecase luôn có:

- Actor
- Action
- Result

Trong ứng dụng lần này, chúng ta có:

- Mua sản phẩm
- Payment (gọi API của bên thứ 3)
- Update, Render sản phẩm, order

<img width="720" src="https://user-images.githubusercontent.com/15076665/143027053-d0220c8b-9099-4758-ba9a-156879b0fbdd.jpeg">

### Thiết kế tầng adapter

Định nghĩa các modules tương tác với các dịch vụ bên ngoài (external services)

Trong ứng dụng FrontEnd, adapter thường là:

- UI Framework
- API server request modules
- Converter cho API response, và truyền kết quả vào Application layer

<img width="720" src="https://user-images.githubusercontent.com/15076665/143027719-d68bcf1d-758e-42eb-84cb-5a21ac371251.jpeg">

### Suy tưởng sang MVC

Tham chiếu tới MVC

- Model: các domain entities
- Controller: domain entity converter, application layer
- View: Adapter layer

## Đi vào chi tiết: Domain

Tôi sẽ chia folder theo như cấu trúc dưới đây.

```
src/
|_domain/
  |_user.ts
  |_product.ts
  |_order.ts
  |_cart.ts
|_application/
  |_addToCart.ts
  |_authenticate.ts
  |_orderProducts.ts
  |_ports.ts
|_services/
  |_authAdapter.ts
  |_notificationAdapter.ts
  |_paymentAdapter.ts
  |_storageAdapter.ts
  |_api.ts
  |_store.tsx
|_lib/
|_ui/
```

Domain sẽ nằm trong folder `domain/`, Application sẽ nằm trong folder `application/`, Adapter sẽ nằm trong folder `services/`

### Tạo các domain entities

###  Thiết kế chi tiết: Shared Kernel


```ts
// shared-kernel.d.ts

type Email = string;
type UniqueId = string;
type DateTimeString = string;
type PriceCents = number;
```

Tôi sử dụng `DateTimeString` thay vì chỉ đơn thuần là `string`, việc làm này sẽ khiến người đọc code cảm thấy dễ hiểu hơn về loại xâu kí tự đang được sử dụng. Các types càng gần với business rule bao nhiêu sẽ càng dễ xử lí khi xảy ra lỗi bấy nhiêu.

Không phải mọi phần của code đều có thể coi như shared kernel. Điều quan trọng nhất đó là các đoạn code cần phải *tương thích với bất kì phần nào của hệ thống*. Nếu một phần được viết bằng Typescriptvà phần khác được viết bằng ngông ngữ khác thì shared-kernel chỉ có thể được dùng ở 2 phần đó mà thôi.

Trong trường hợp hiện tại, tôi viết toàn bộ ứng dụng bằng Typescript, nên type-alias dùng cho built in types có thể được xem như shared-kernel. Và chúng có thể được dùng ở mọi nơi của ứng dụng.

### Đi vào chi tiết: Application Layer

Tầng này sẽ chứa các usecases. Use-case liên quan đến các tương tác với thế giới bên ngoài (sử dụng các external services). Việc tương tác với các external-services sẽ được coi là side-effects. Chúng ta hiểu rằng sẽ dễ dàng làm việc cũng như debug với các hàm, cũng như hệ thống không có side-effects. Và mọi domain functions đều phải được viết như là các `pure functions`.

Để kết hợp clean transformation và tương tác với impure world, ta có thể sử dụng application layer như impure context

### Impure Context dùng cho pure transformations

Impure Context dùng cho pure transformations được tổ chức như sau:
- Thực thi side-effect để lấy dữ liệu
- Thực thi pure transformation
- Thực thi side-effect để lưu hoặc truyền kết quả đi

VD: Với use-case "đưa item vào cart"
- Lấy cart state từ store
- Gọi cart update function, truyền item được thêm vào
- Lưu cart vào storage

Logic chính sẽ nằm ở phần data transformation, các tương tác với thế giới bên ngoài sẽ thông qua lớp vỏ như hình dưới đây:

<img width="691" alt="Screen Shot 2021-11-28 at 18 38 57" src="https://user-images.githubusercontent.com/15076665/143762910-f3cb0bec-c251-4948-b210-ede13785777f.png">

Impure context còn được gọi là functional core.

### Thiết kế use-case

Chúng ta sẽ thử thiết kế checkout usecase.

Kích bản sẽ như sau, user có cart với cookies ở bên trong, khi user click vào checkout button:
- Tạo order mới
- Trả tiền thông qua hệ thống thanh toán của bên thứ 3
- Thông báo cho user nếu thanh toán thất bại
- Lưu order trên server nếu thanh toán thành công
- Thêm order vào local data store để hiển thị trên màn hình

```TS
type OrderProducts = (user: User, cart: Cart) => Promise<void>;
```

### Viết Application layer ports
