# Refactoring UI

Nguồn ảnh background: https://vironit.com/basic-features-of-ux-and-ui-design-and-is-there-any-difference-between-these-definitions/

## Chương 1. Starting from scratch

### Start with a feature, not a layout

Khi bắt tay vào việc thiết kế một ứng dụng chúng ta thường nghĩ

- Ứng dụng của tôi nên trông như thế nào
- Bố cục của nó ra sao
- Nó có nên có top nav hay không?
...

Nhưng thực chất chúng ta đang chỉ nghĩ về phần **vỏ bên ngoài**
Một "ứng dụng" thực chất chỉ là tập hợp của các *features* mà thôi. Trước khi thiết kế một feature, nếu không có bất cứ thông tin nào về cách thức vận hành của feature đó, điều đó sẽ khiến bạn "phát điên"

Thay vì bắt đầu ở phần **vỏ**. Hãy bắt đầu với những phần của một tính năng thực sự

Ví dụ: Với service booking flight. Bạn có thể bắt đầu với feature như là "tìm kiếm chuyến bay"

Giao diện của bạn sẽ cần:
- Fields cho điểm đi, điểm đến
- Fields cho ngày đi, ngày trở về
- Button thực thi chức năng search

### Detail comes later

Ở phần trước chúng ta đã thấy được tầm quan trọng của việc không quá tập trung vào những chi tiết nhỏ nhặt như: **icon**, **shadow**, **typefaces**

Một tip khá hay đó là

> Design trên giấy sử dụng bút Sharpie

<img src="https://user-images.githubusercontent.com/15076665/61635785-48236e00-accf-11e9-9f91-2493f2c4fdac.png">

Việc vẽ những chi tiết nhỏ nhặt bằng but Sharpie là việc không thể. Nên sẽ khá hay nếu ta muốn bỏ thói quen đi quá nhiều vào chi tiết ngay từ đầu thiết kế

### Hold the color

Ban đầu nên thiết kế với 2 màu **đen**, **trắng** (**grayscale**) ta buộc phải chú trọng vào **khoảng cách**, **tương phản**, **size**

Có thể lúc đầu sẽ hơi khó khăn nhưng chúng ta có thể sẽ có được 1 giao diện có tính phân cấp tốt kèm theo màu sắc sau đó.

### Don't over-invest

Một điều khá hay đó là ta nên build 1 thiết kế nhanh nhất có thể.

Việc này giúp chúng ta thể hiện ý tưởng của bản thân. Sau đó loại bỏ bản thiết kế thô ban đầu này khi chúng ta đã đi đến quyết định cuối cùng

## Don't design too much

Chúng ta không nhất thiết phải thiết kế toàn bộ feature trong app trước khi triển khai

Việc **tưởng tượng** xem các tính năng sẽ tương tác như thế nào hay các trường hợp biên ra sao. Ví dụ như:
- Giao diện nên trông như thế nào nếu người dùng có hơn 2000 contacts
- Thông báo lỗi nên hiển thị ở form này như thế nào
- ...

Những điều này thực sự là khó khăn nếu chúng ta chỉ có trí tưởng tượng của bản thân và design tool, đồng thời khiến công việc thiết kế trở nên nhàm chán và cực khổ hơn bao giờ hết.

### Work in cycles

Khi thiết kế một feature mới, ta nên bắt đầu từ bản thiết kế đơn giản nhất. Dù vẫn biết rằng sau này cần sửa lại rất nhiều nhưng việc chỉnh sửa một mẫu thiết kế mà ta thấy trước mắt vẫn dễ dàng hơn công việc chỉnh sửa 1 thiết kế **chỉ có trong tưởng tượng**


### Be a pessimist

Chỉ bắt đầu xây dựng 1 tính năng (feature) khi bạn thực sự sẵn sàng. Ta lấy ví dụ:

Feature comment của 1 project. Khi đang phát triển tính năng comment, bạn thấy rằng sẽ **tốt** hơn nếu người dùng có thể gắn file vào comment của mình. Sau đó bạn tập trung vào việc phát triển tính năng attach file này. Nhưng bạn nhận ra rằng phát triển tính năng này mất nhiều thời gian hơn dự kiến. Bạn dừng việc phát triển tính năng comment.

Việc này thực sự vô nghĩa. Rõ ràng comment mà không có file gắn kèm vẫn tốt hơn là không có chức năng comment.

Từ đó ta có thể rút ra bài học như sau

> Nếu tính năng thuộc dạng có chỉ để cho đẹp thì không nên làm vội, xây dựng một version đơn giản để ta luôn có thể quay lại version đó bất cứ lúc nào

## Choose a personality

Mỗi site nên có những đặc điểm nhận dạng riêng - tính cách của site. Ví dụ nhưng những site liên quan đến ngân hàng đều hướng tới sự **bảo mật**, **tin cậy**, **chuyên nghiệp**, trong khi các start up có thể đem tới hình ảnh **vui nhộn**, **tươi mới**

Việc đem đến cho site một **cá tính** cụ thể nghe chừng có vẻ khá trừu tượng và khó khăn. Thế nhưng điều đó hoàn toàn có thể thực hiện thông qua một vài **nguyên tắc** như sau.

### Font choice

Việc lựa chọn phông chữ có quyết định khá lớn đến design

- Với những thiết kế mang tính sang trọng, cổ điển thì nên sử dụng phông có chân (serif)
- Với những thiết kế mang tính vui nhộn, tươi trẻ thì nên sử dụng phông tròn (rounded sans serif)
- Còn nếu muốn tạo nên sự đơn giản thì sử dụng phông không chân trung tính (neutral sans serif)

### Color

Trên thực tế có khá nhiều học thuyết về màu sắc nhưng những gì ta cần quan tâm ở đây chỉ là ảnh hưởng của màu sắc lên cảm xúc của chúng ta

- Màu xanh nước biển (blue): gợi nên sự **an toàn**, **thân thiện**
- Màu vàng (kim loại - gold): gợi nên sự **đắt đỏ**, **tinh vi**
- Màu hồng (pink): gợi nên sự **vui nhộn,** **không quá căng thẳng**

### Border radius

Là một phần rất nhỏ trong thiết kế nhưng nó lại có ảnh hưởng khá lớn lên cảm giác mà thiết kế mang lại

Nếu border radius có gía trị nhỏ (3, 4px) thì ảnh hưởng của nó lên thiết kế là không nhiều

<img src="https://user-images.githubusercontent.com/43769314/62029311-36851d80-b21d-11e9-885f-3c75d34f4c0d.png" width="720">

Border radius lớn sẽ tạo nên cảm giác năng động

<img src="https://user-images.githubusercontent.com/43769314/62029366-5c122700-b21d-11e9-9939-cb35f110d841.png" width="720">

Và với trường hợp không sử dụng border-radius, sẽ cho ta cảm giác trang trọng, lịch sự

<img src="https://user-images.githubusercontent.com/15076665/62049065-69450b00-b249-11e9-93a5-eeaf4a1743b0.png" width="720">

Tuỳ vào sự lựa chọn của cá nhân với nút bo tròn hoặc nút không bo tròn nhưng điểm mấu chốt ở đây là **chỉ sử dụng một loại nút duy nhất** để từ đó tạo nên **sự thống nhất** cho thiết kế

### Language

Ngôn ngữ tuy không phải là yếu tố trực quan trong thiết kế nhưng lại có ảnh hưởng lớn đến cá tính của thiết kế

- Sử dụng từ ngữ mang ít tính cá nhân sẽ tạo ra sự trang trọng, chuyên nghiệp
- Sử dụng từ ngữ thân thiên sẽ tạo cảm giác gần gũi, trẻ trung

Việc lựa chọn ngôn ngữ là rất quan trọng vì chúng xuất hiện ở mọi nơi trong giao diện của bạn
