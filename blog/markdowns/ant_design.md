# Ant Design

- Nội dung được dịch từ trang: https://ant.design/
- Nguồn ảnh background: https://uxdesign.cc/chinese-material-design-5d31359df4a6

## Proximity

Khoảng cách có vai trò quan trọng trong tổ chức layout, phân biệt các phần tử với nhau, qua đó tạo nên hệ thống phân cấp thông tin

### Mối liên hệ giữa khoảng cách dọc (vertical spacing)

Ant Design sử dụng 3 kiểu khoảng cách dọc
- small spacing: 8px
- middle spacing: 16px
- large spacing: 24px

<img src="https://user-images.githubusercontent.com/43769314/61839651-5ccb5600-aec9-11e9-8a65-fe6001ee4181.png">

Nguồn: https://ant.design/

> Note: Trong Ant Design, y = 8 + 8 * n (n >= 0), y là vertical spacing, 8 là [basic spacing]

Qua đó ta thấy, để tăng mức độ phân cấp cho thông tin ta có thể **thêm** hoặc **bớt** đi các **basic spacing**.

### Mối liên hệ giữa khoảng cách ngang (horizontal spacing)

Để đảm bảo sự tương thích với các kích cỡ màn hình khác nhau, trong **horizontal direction** ta sử dụng grid layout để sắp xếp các phần tử

Horizontal spacing gồm 2 kiểu
- Outer: Khoảng cách giữa các components với nhau
- Inner: Khoảng cách giữa các thành phần trong 1 component

<img src="https://user-images.githubusercontent.com/43769314/61840300-a3ba4b00-aecb-11e9-9928-7351be0f75b2.png">

Nguồn: https://ant.design/

## Alignment

Con người có xu hướng tiếp nhận, hiểu, đánh giá vấn đề dựa vào cái nhìn đầu tiên.
Trong thiết kế, việc căn gióng có vai trò quan trọng trong truyền tải thông tin tới người dùng

### Text Alignment

Nếu độ dài của các từ cũng như đoạn văn là quá ngắn thì cần có **visual starting point**

- Căn lề cho title và text sang trái, sử dụng 1 **visual starting point**
- Không nên để cho title và text bắt đầu ở những visual points khác nhau (ngoại trừ khi sự khác biệt giữa title và text được nhấn mạnh)

### Form Alignment

Căn lề cho các dấu **:** trong form sẽ giúp tăng tốc độ cho người dùng hoàn thiện form.

<img src="https://user-images.githubusercontent.com/43769314/61841543-19281a80-aed0-11e9-9127-58e61af257ae.png">

Nguồn: https://ant.design/

### Number Alignment

Để so sánh nhanh các số, ta nên căn lề phải, cũng như sử dụng cùng một số lượng chữ số sau dấu phảy.

<img src="https://user-images.githubusercontent.com/43769314/61841636-5e4c4c80-aed0-11e9-9893-3af7a8bc1e7f.png">

Nguồn: https://ant.design/

## Contrast

Tương phản giúp tăng mức độ thú vị cho page cũng như tạo ra hệ thống phân cấp thông tin giúp người dùng tra cứu thông tin nhanh hơn

### The Contrast of major and minor relationship

Để giúp người dùng đưa ra quyết định nhanh hơn, các **hành động quan trọng** hoặc **hành động có tần suất cao** nên được **nhấn mạnh** (trong form, modal)

> Note: Ngoài cách nhấn mạnh item chính, ta còn có thể làm yếu đi các items phụ

<img src="https://user-images.githubusercontent.com/43769314/61841899-45906680-aed1-11e9-8f9e-1b4a6689a45b.png">

Nguồn: https://ant.design/

Khi hệ thống có những thứ cần user quyết định thận trọng thì nên đảm bảo tính công minh (nghĩa là không hướng user theo 1 quyết định cụ thể nào cả)

VD: Accept và Reject nên sử dụng default button để không làm ảnh hưởng đến quyết định của user

### Constract of whole and part

Bằng việc sử dụng những ưu điểm của sự khác nhau giữa kích cỡ chữ, phông chữ, ...
ta có thể tạo ra sự khác biệt giữa các cấp độ thông tin, giữa tổng thể và các phần nhỏ

<img src="https://user-images.githubusercontent.com/43769314/61920137-82bd2d00-af93-11e9-93e9-3ab346629f4a.png">

Nguồn: https://ant.design/

### Contrast of the state relation

Thông qua việc thay đổi màu sắc hoặc sử dụng thêm các hình hỗ trợ, cũng có thể giúp cho hệ thống phân cấp thông tin của chúng ta hoạt động tốt hơn

<img src="https://user-images.githubusercontent.com/43769314/61921160-1e03d180-af97-11e9-9b8d-1280fbcf4f20.png">

Nguồn: https://ant.design/

Có 2 loại contrast ta thường gặp
- static contrast
- dynamic contrast

## Repetition

Sự lặp lại của các elements không những giúp người dùng không mất nhiều thời gian để hiểu về hệ thống mà còn giúp cho người dùng cảm nhận được sự liên quan giữa chúng.

### Repetitive elements

Repetitive element có thể là một rule nào đó trong thiết kế (màu sắc, format cụ thể)

<img src="https://user-images.githubusercontent.com/43769314/61922278-ccf5dc80-af9a-11e9-9cef-40abeaa10ebb.png">

Ví dụ về repetitive wireframe - Nguồn: https://ant.design/

<img src="https://user-images.githubusercontent.com/43769314/61922376-2958fc00-af9b-11e9-82a1-9bb9ad5d4711.png">

Ví dụ về repetitive format - Nguồn: https://ant.design/

## Make it direct

Thay vì chỉnh sửa nội dung ở một trang khác, hãy chỉnh sửa nội dung trực tiếp luôn

### In-Page Editing

Nếu **readability** quan trọng hơn **editability** ta nên sử dụng **click to edit** như bên dưới

<img src="https://user-images.githubusercontent.com/43769314/61922862-da13cb00-af9c-11e9-9f27-eb3c3784d44f.png">

Nguồn: https://ant.design/

Nếu như 2 yếu tố trên là ngang bằng nhau ta có thể sử dụng **text link/ edit icon** như bên dưới

<img src="https://user-images.githubusercontent.com/43769314/61922962-3840ae00-af9d-11e9-962c-05679cfb279c.png">

Nguồn: https://ant.design/

### Multi-Field Inline Edit

Trong trường hợp này cần đảm bảo rằng việc chuyển sang **edit mode** không phá vỡ đi cấu trúc của layout.

### Drag and Drop

Drag and Drop chỉ nên giới hạn theo 1 chiều nhất định.
Drag and Drop có thể áp dụng cho việc upload files, ảnh

## React Immediately

Việc phản hồi tức thì đối với các thao tác nhập liệu, tìm kiếm của người dùng với hệ thống là vô cùng quan trọng.

Ví dụ:
- Khi người dùng ấn vào button thì cần có hiệu ứng button được nhấn xuống
- Khi người dùng nhập sai thì cần hiển thị chỗ sai của người dùng ngay tức thì

### Lookup Patterns

Có thể kể đến chức năng auto-complete khi tìm kiếm, tuỳ vào nội dung nhập cũng như thể loại tìm kiếm có thể chia kết quả thành 2 phần **certain** và **uncertain**

<img src="https://user-images.githubusercontent.com/43769314/61922962-3840ae00-af9d-11e9-962c-05679cfb279c.png">

Nguồn: https://ant.design/

### Live suggest

**Live preview:** có thể kể đến là việc xác định mức độ mạnh/ yếu của password

<img src="https://user-images.githubusercontent.com/43769314/61924368-6674bc80-afa2-11e9-94a7-63f31afea193.png">

Nguồn: https://ant.design/

**Click refresh**: cung cấp nút, tool để người dùng click khi có nội dung mới

<img src="https://user-images.githubusercontent.com/43769314/61927188-ca04e700-afae-11e9-8c27-7aff8a86e908.png">
