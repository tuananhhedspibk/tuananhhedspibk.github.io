# Refactoring UI

- Nguồn ảnh background: https://vironit.com/basic-features-of-ux-and-ui-design-and-is-there-any-difference-between-these-definitions/
- Tất cả các ảnh, nội dung sử dụng trong bài viết đều được dẫn từ sách: https://refactoringui.com/book/

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

### Deciding what you actually want

Đôi khi việc tham khảo từ những sites tương tự sẽ có ích khá nhiều. Nếu những trang tương tự như ý tưởng của bạn hướng đến **business** hay **sự thân thiện** thì bạn cũng nên làm tương tự.

Tuy nhiên việc vay mượn ý tưởng thiết kế quá nhiều sẽ khiến cho thiết kế của bạn trở thành **sản phẩm hạng hai**.

## Limit your choices

Khi có quá nhiều lựa chọn cho fonts chữ cũng như màu sắc sẽ khiến việc quyết định thiết kế trở nên khó khăn. Ví dụ như:

- Nên để opacity là 10% hay 15% ?
- margin-bottom của button nên là 18px hay 20px ?
- Chiều cao của avatar nên là 24px hay 25px
- ...

Vậy chúng ta có thể đưa ra quyết định như thế nào về thiết kế cuối cùng khi không có gì trong số chúng là quá tồi ?

### Define systems in advance

Thay vì chọn các giá trị như kích cỡ font, màu sắc từ một thư viện vô tận các yếu tố đó, chúng ta nên *xây dựng một hệ thống cơ bản cho thiết kế của mình* và bắt đầu thiết kế từ đó

- Đừng tìm kiếm những màu mới khi thiết kế UI mới, thay vào đó hãy lựa chọn một hệ thống màu cơ bản cho thiết kế của mình ngay từ đầu (8 - 10 màu)

<img src="https://user-images.githubusercontent.com/43769314/62095587-d8f3de00-b2bb-11e9-9cd6-f45626cac2fb.png" width="720">

- Đừng chỉnh từng pixel một cho đến khi font chữ trở nên hoàn hảo mà hãy tự thiết kế cho mình một hệ thống font size cụ thể ngay từ đầu

<img src="https://user-images.githubusercontent.com/43769314/62095614-e9a45400-b2bb-11e9-8780-a4cdd54215b0.png" width="720">

Làm những việc như thế này có thể khiến bạn khá vất vả ngay từ đầu nhưng mỗi khi thêm một UI mới thì việc lựa chọn màu sắc, font chữ, ... lại không quá khó khăn và sẽ giúp bạn tiết kiệm rất nhiều thời gian cho việc thiết kế.

### Designing by process of elimination

Khi tiến hành thiết kế dựa theo một tập các giá trị ràng buộc giới hạn sẽ dễ dàng hơn việc thiết kế với nhiều *sự lựa chọn đúng đắn*

Lấy ví dụ khi thiết kế icon cho app. Ta lựa chọn tập giá trị kích cỡ icon là: 12px, 16px, 24px, 32px. Chọn một kích cỡ cho ta *cảm giác* là tốt nhất (ví dụ 16px), so sánh kích cỡ này với 2 kích cỡ khác là 24px, 12px.

Nếu giá trị 16px này ổn thì mọi việc đã OK. Nếu ngược lại ta sẽ lấy giá trị mới này làm "trung tâm" rồi đem đi so sánh với các giá trị khác đến khi nào *thấy ổn* thì thôi.

Cách tiếp cận này có thể áp dụng cho bất kì yếu tố nào trong thiết kế miễn sao bạn định nghĩa sẵn một hệ thống các giá tri cho chúng.

### Systematize everything

Càng định nghĩa trước nhiều hệ thống thì việc thiết kế sẽ trở nên dễ dàng hơn rất nhiều. Dưới đây là danh sách một vài hệ thống mà chúng ta nên thiết kế trước

- Font size
- Font weight
- Color
- Border radius
- Margin
- Padding

Chúng ta không nhất thiết phải thiết lập toàn bộ các hệ thống ngay từ đầu nhưng việc giữ mindset theo cách tiếp cận này là vô cùng quan trọng. Luôn tìm kiếm cơ hội đưa ra các hệ thống mới mỗi khi đưa ra các quyết định thiết kế mới

# Hierarchy is Everything

## Not all elements are equal

Nếu bạn vẫn nghĩ thiết kế là tạo ra một thứ gì đó *nhìn được* thì bạn đã lầm. Việc thiết kế không chỉ đơn thuần là làm **style một cách hời hợt** như vậy

Ta có một khái niệm đó là *Visual Hierarchy* để chỉ việc các thành phần trong UI cũng cần có liên hệ với nhau.

Nếu các thành phần trong thiết kế không có liên hệ gì với nhau, có thể chúng sẽ *cạnh tranh* nhau khiến cho thiết kế trông khá *hài hước* và đặc biệt là **không tạo ra được sự thống nhất** trong thiết kế, nó giống như một bức tường lớn với các nội dung đối lập và cuối cùng chẳng truyền đạt được bất cứ một thông điệp gì cả

Ảnh phía dưới là một hệ thống không có sự phân cấp, kế thừa, nhấn mạnh tính chính phụ của thông tin

<img src="https://user-images.githubusercontent.com/43769314/62106177-862c1d80-b2df-11e9-9ee3-62b3d5fc0875.png" width="720">

Ảnh phía dưới là hệ thống đã có sự phân cấp thông tin chính, phụ, qua đó khiến việc nắm bắt thông tin dễ dàng hơn rất nhiều (dù font chữ, tông màu không thay đổi gì cả)

<img src="https://user-images.githubusercontent.com/43769314/62106272-cf7c6d00-b2df-11e9-9794-da144d8edb41.png" width="720">

## Size isn’t everything

Không nên chỉ dựa hoàn toàn vào font size. Trong khi có nhiều yếu tố khác như:
- Màu sắc
- Font weight

Cũng ảnh hưởng không kém đến hệ thống phân cấp kế thừa trong thiết kế, thay vì giữ nguyên quan điểm

> primary content sẽ có font size lớn, secondary content sẽ có font size nhỏ

Ví dụ: Nếu có 4, 5 cấp trong hệ thống phân cấp thông tin thì ta sẽ phải sử dụng 4, 5 font size -> điều này là khá bất hợp lí vì trong 1 site chỉ nên sử dụng **tối đa 3 font sizes** mà thôi

Với các text hỗ trợ, cấp thấp ta có thể sử dụng những **màu nhạt hơn** hoặc với những nội dung quan trọng như tiêu đề bài viết thì ta sẽ **làm đậm** nó lên. Ngoài ra việc sử dụng quá nhiều cỡ chữ có thể ảnh hưởng đến tính dễ đọc (readability) của thiết kế

Trong 1 site chỉ nên:

- Sử dụng 2 hoặc 3 màu
  - Dark color cho primary content (tiêu đề article)
  - Grey color cho secondary content (như ngày mà article được đăng)
  - Lighter grey cho nội dung cấp 3 (copyright notice trong footer)

- Tương tự chỉ cần 2 font weights là đủ
  - 400, 500 (normal font weight) cho các text thông thường
  - 600, 700 (heavier font weight) cho các nội dung muốn nhấn mạnh

<img src="https://user-images.githubusercontent.com/43769314/62119405-7110b800-b2fa-11e9-8314-baa62ee86753.png" width="720">

Hạn chế tối đa việc sử dụng font weight có giá trị dưới 400, có thể với những title lớn sẽ không vấn đề gì, nhưng với những đoạn text có kích cỡ nhỏ hơn thì sẽ khó đọc

Nên kết hợp với việc sử dụng màu sác cũng như kích cỡ chữ nhỏ hơn.

### Don’t use grey text on colored backgrounds

Sử dụng **light grey text** trên background trắng là một sự lựa chọn hoàn hảo. Ta gọi đó là hiệu ứng **reduce constrast** - dịch nôm na là giảm tương phản

Tuy nhiên điều này lại không đúng với các background màu

<img src="https://user-images.githubusercontent.com/15076665/62131911-13d72f80-b317-11e9-9626-2927a427fc2d.png" width="720">

Sử dụng màu cho text gần với màu của background là một cách tăng cường tính phân cấp cho hệ thống

<img src="https://user-images.githubusercontent.com/15076665/62132108-63b5f680-b317-11e9-96d5-4b66e1db4282.png" width="720">

Có một cách tiếp cận khác là đưa text về màu trắng rồi làm mờ đi (giảm opacity). Cách này có thể giảm tương phản xong với những background có chứa ảnh thì ảnh này sẽ xuyên qua text

Một cách tiếp cận tốt hơn là lựa chọn màu dựa theo background color sau đó chỉnh độ sáng sao cho phù hợp (cùng tông với background)

<img src="https://user-images.githubusercontent.com/15076665/62134048-d1175680-b31a-11e9-8612-363eb6336da4.png" width="720">
