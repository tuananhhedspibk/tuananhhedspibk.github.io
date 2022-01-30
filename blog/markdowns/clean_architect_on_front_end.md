# Clean Architect Với FrontEnd

※ Bài viết được dịch tóm lược từ nguồn: https://dev.to/bespoyasov/clean-architecture-on-frontend-4311

## Mục tiêu

Đầu tiên chúng ta cùng nhau bàn về clean architect (kiến trúc sạch) với các khái niệm cơ bản như `domain`, `usecase`, `application layers`. Sau đó sẽ là cách chúng ta áp dụng nó cho front end.

Tiếp theo chúng ta sẽ cùng nhau thiết kế một cookie store frontend-app theo quy tắc của clean architect. Cuối cùng sẽ là triển khai một usecase trong số đó.

Store sẽ sử dụng `React` với vai trò UI framework. Ngoài ra cũng sẽ sử dụng `Typescript` cho mục đích sử dụng type và interface để mô tả các entities.

## Clean Architecture

Là cách chia nhiệm vụ và chức năng theo nội dung của nghiệp vụ

`Domain`: là phần mà chúng ta sẽ mô hình hoá dựa theo thế giới thực.
Clean Architecture thường được biết đến như một kiến trúc 3-tầng, việc chia tầng này hoàn toàn dựa theo chức năng của chúng.

<img width="720" src="https://user-images.githubusercontent.com/15076665/151689365-dbddf775-9e7b-41f2-a2d3-42c2d341dcbd.jpeg">

### Domain Layer

Tầng này nằm ở trung tâm. Đó là các entites và dữ liệu mô tả các nghiệp vụ chính của ứng dụng. Đây chính là phần lõi giúp phân biệt các ứng dụng với nhau.

### Application layer

Tầng này sẽ bao quanh tầng domain, với nhiệm vụ là chứa các use-case (nghiệp vụ) của hệ thống.

### Adapter Layer

Tầng này sẽ nằm ngoài cùng, có nhiệm vụ tương tác với các hệ thống bên ngoài hoặc API bên ngoài (external API)

Adapter được chia làm 2 loại:
- **Driving**: loại này sẽ *gửi tín hiệu đến hệ thống của chúng ta*
- **Driven**: loại này sẽ *nhận tín hiệu từ hệ thống của chúng ta*

Người dùng sẽ tương tác với tầng này (cụ thể là **driving adapter**). UI framework xử lí hành động click vào button chính là công việc của **driving adapter**.

**Driven Adapter** sẽ tương tác với **infrastructure**. Với frontend, hầu như infrastructure đều là backend server hoặc một external service nào đó.

> Càng xa tầng trung tâm là domain layer, code của chúng ta sẽ càng "hướng dịch vụ" hơn, cụ thể là nó sẽ càng xa hơn so với domain knowledge được phản ánh ở tầng domain

### Dependency Rule

Kiến trúc 3 tầng có một quy luật (Dependency Rule) đó là
> Chỉ có các tầng bên ngoài mới phụ thuộc vào các tầng bên trong

- Tầng domain phải luôn độc lập
- Tầng application chỉ phụ thuộc vào tầng domain
- Tầng ngoài cùng có thể phụ thuộc vào bất kì thứ gì

<img width="720" src="https://user-images.githubusercontent.com/15076665/151689825-d5f3d43e-5ca5-4033-a05a-adb07925f077.png">

Khi phá vỡ **dependency rule** sẽ dẫn đến những vấn đề như sau:
- Quan hệ phụ thuộc vòng: module C phụ thuộc module B, module B phụ thuộc module A, module A lại phụ thuộc module C
- Sẽ khó test hệ thống hơn vì khi đó ta sẽ phải mô phỏng lại toàn bộ hệ thống chỉ đế test một phần rất nhỏ
- Các module phụ thuộc vào nhau quá nhiều dẫn đến việc khi một module thay đổi thì có thể có nhiều hơn một modules sẽ phải thay đổi theo - **High coupling**

## Thiết kế ứng dụng

Ứng dụng sẽ có những chức năng cơ bản như sau:
1. Authentication
2. Sau khi authen, người dùng có thể đưa cookie vào giỏ hàng
3. Order các cookies đã đưa vào giỏ hàng
4. Sau khi thanh toán chúng ta sẽ có order mới trong lịch sử các orders cũng như làm mới lại giỏ hàng của người dùng

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

### Tham chiếu sang MVC

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

```ts
type OrderProducts = (user: User, cart: Cart) => Promise<void>;
```

### Viết Application layer ports

Khi use-case cần có sự tương tác với bên ngoài, ta sẽ cần một giao diện để thực hiện việc đó - Port.

Port sẽ có chức năng như một cánh cổng giúp use-case tương tác với external API. Tuy nhiên vẫn cần đảm bảo rằng **use-case phải ít phụ thuộc vào external API** nhất có thể.

Với hệ thống hiện tại chúng ta sẽ cần những external services như sau:
- Payment system
- Storage service để lưu dữ liệu vào local storage
- Notify service để thông báo cho users về các events và lỗi

<img width="720" src="https://user-images.githubusercontent.com/15076665/151692252-a5c12525-b1c7-4e3b-965e-4361464ad9fc.jpeg">

Chúng ta sẽ chia các interfaces theo tính năng:
- Payment thành 1 module
- Storage thành 1 module

#### Payment System Interface

```TS
export interface PaymentService {
  tyypay(amount: PriceCents): Promise<boolean>;
}
```

Khá đơn giản khi chỉ cần số tiền thanh toán và trả về kết quả OK/ Failed.

#### Notification Service Interface

```TS
export interface NotificationService {
  notify(message: string): void;
}
```

#### Local Storage Interface

Đây là nơi lưu các order mới. Bạn có thể sử dụng Redux, MobX tuỳ thích.
Repository dùng cho việc lưu trữ này có thể:
- Chia nhỏ theo từng entity
- Là một big repo lưu mọi dữ liệu của ứng dụng

Ở đây tôi chọn cách chia nhỏ theo entity.

```TS

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}
```

#### Use case function

Với usecase tạo order, ta sẽ cần những bước sau:
1. Verify data
2. Tạo order
3. Thanh toán order
4. Thông báo nếu có sự cố
5. Lưu kết quả

<img src="https://user-images.githubusercontent.com/15076665/151692720-6e8667cf-0b93-4dc7-ac74-2a154b5f5ac3.png" width="720">

Xem phần triển khai cụ thể ở [source code](https://github.com/tuananhhedspibk/ca-front-end/blob/master/src/application/orderProducts.ts)

### Đi vào chi tiết phần Adapter

#### Binding UI và Usecase

Adapter đầu tiên là UI framework, nó giúp kết nối browser API với ứng dụng. Với trường hợp của usecase tạo order nó chính là nút Checkout và phần xử lí sự kiện click (sẽ gọi tới usecase function)

```TS
export function Buy() {
  // Get access to the use case in the component:
  const { orderProducts } = useOrderProducts();

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    // Call the use case function:
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </section>
  );
}
```

#### Triển khai Payment Service

Xem phần triển khai cụ thể ở [source code](https://github.com/tuananhhedspibk/ca-front-end/blob/master/src/application/orderProducts.ts)

#### Triển khai Notification Service

Xem phần triển khai cụ thể ở [source code](https://github.com/tuananhhedspibk/ca-front-end/blob/master/src/application/orderProducts.ts)

#### Triển khai Local Storage

Xem phần triển khai cụ thể ở [source code](https://github.com/tuananhhedspibk/ca-front-end/blob/master/src/application/orderProducts.ts)

### Validate data flow

<img src="https://user-images.githubusercontent.com/15076665/151694590-410e3987-280f-4a33-96bb-84acc0fb425a.png" width="720">

Driving Adapter chính là UI (gửi tín hiệu đến Application)
Driven Adapter chính là phần infrastructure (nhận tín hiệu từ phía Application)

Nếu ta cần thay đổi các external services thì phần code duy nhất ta cần thay đổi đó chính là các adapter.

## Ta có thể cải thiện điều gì

### Sử dụng Object thay vì Number cho Price

Việc chỉ sử dụng number cho price là một thiếu sót, nguyên nhân là vì: nếu không có đơn vị tiền tệ thì price hoàn toàn không có ý nghĩa. Ta có thể cải thiện điều đó như sau:

```TS
type Currency = "RUB" | "USD" | "EUR" | "SEK";
type AmountCents = number;

type Price = {
  value: AmountCents;
  currency: Currency;
};
```

### Tránh tính trạng phụ thuộc cho Domain

```TS
export function createOrder(user: User, cart: Cart): Order {
  return {
    user: user.id,
    cart,
    created: new Date().toISOString(),
    status: "new",
    total: totalPrice(products),
  };
}
```

Với hàm `createOrder` như trên ta thấy phần xử lí `new Date().toISOString()` thường bị gọi nhiều lần. Theo thói quen ta có thể tách nó ra thành một hàm helper như sau:

```TS
export function currentDatetime(): DateTimeString {
  return new Date().toISOString();
}
```

Domain lúc này sẽ như sau:

```TS

export function createOrder(user: User, cart: Cart): Order {
  return {
    user: user.id,
    cart,
    created: currentDatetime(),
    status: "new",
    total: totalPrice(products),
  };
}
```

Nhưng domain **KHÔNG NÊN** phụ thuộc vào bất cứ điều gì, do đó trong constructor của domain entity ta sẽ truyền vào đó một form dữ liệu hoàn chỉnh.


```TS
export function createOrder(
  user: User,
  cart: Cart,
  created: DateTimeString
): Order {
  return {
    user: user.id,
    products,
    created,
    status: "new",
    total: totalPrice(products),
  };
}
```

### Làm cho các use-case dễ test hơn

Usecase hiện tại cho phép access thông qua UI, đây là một điều rất tệ vì sẽ rất khó để test usecase này.

Ta có thể truyền các service như param hoặc `Dependency Injection` cho usecase như sau

```TS
type Dependencies = {
  notifier?: NotificationService;
  payment?: PaymentService;
  orderStorage?: OrderStorageService;
};

async function orderProducts(
  user: User,
  cart: Cart,
  dependencies: Dependencies = defaultDependencies
) {
  const { notifier, payment, orderStorage } = dependencies;

  // ...
}
```

Hook sẽ như sau:

```TS
function useOrderProducts() {
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrdersStorage();

  return (user: User, cart: Cart) =>
    orderProducts(user, cart, {
      notifier,
      payment,
      orderStorage,
    });
}
```