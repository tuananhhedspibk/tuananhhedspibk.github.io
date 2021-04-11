Tóm tắt nội dung chương 1 sách [Form Design Pattern](https://www.amazon.co.jp/Form-Design-Patterns-%E2%80%95%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AB%E3%83%BC%E3%82%B7%E3%83%96%E3%81%AA%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%88%B6%E4%BD%9C%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89-%E4%BB%AE/dp/4862464513)

※ Nội dung và hình ảnh đều được tham khảo từ sách trên

**CHƯƠNG 1: Form đăng kí**

Mọi services đều mong muốn một cam kết lâu dài giữa họ và người dùng. Vậy nên mọi services đều muốn người dùng ĐĂNG KÍ.

Tuy nhiên, trên thực tế người dùng HOÀN TOÀN KHÔNG MUỐN ĐĂNG KÍ. Điều mà người dùng quan tâm là "trải nghiệm dịch vụ" và "thấy được những gì mà họ nhận được từ dịch vụ"

**Hình dáng của form đăng kí**

### Labels

4 yếu tố giúp cải thiện trải nghiệm người dùng:

- Visual: làm cho dễ nhìn hơn
- Auditory (Thính giác): làm cho dễ nghe hơn
- Motor: làm cho dễ tương tác hơn
- Cognitive (Nhận thức): làm cho dễ hiểu hơn

Ta xét một register form như sau:

<img width="502" alt="Screen Shot 2021-04-06 at 18 11 02" src="https://user-images.githubusercontent.com/15076665/113687594-7810e000-9703-11eb-8f38-350fbb1dd907.png">

Với user bình thường, có thể dễ dàng quan sát thấy các `labels` gắn liền với các form element, có thể click vào labels để focus vào form element, ...

Vì vậy các element nhận `input - đầu vào` nên có thêm `<label>` đi kèm (button không nhận đầu vào nên không cần `<label>`)

### Placeholders

Đêm đến những gợi ý cho người dùng khi nhập liệu, đặc biệt là đối với các field như password (có nhiều ràng buộc, điều kiện)

<img width="676" alt="Screen Shot 2021-04-07 at 14 12 06" src="https://user-images.githubusercontent.com/15076665/113813647-418ea000-97ab-11eb-990e-de8fd544d5dc.png">

`placeholder` attribute tồn tại, không có nghĩa là chúng ta phải sử dụng chúng, với các form element có `label` là "First name" việc sử dụng `placeholder` với giá trị "Enter first name" là hoàn toàn thừa thãi.

<img width="680" alt="Screen Shot 2021-04-07 at 14 15 43" src="https://user-images.githubusercontent.com/15076665/113813922-c37ec900-97ab-11eb-91f6-ed079d525bc9.png">

`Placeholder` có tính thẩm mỹ cao vì **nó nằm trong input** và **có kích thước nhỏ** nhưng vấn đề ở đây là nội dung của `Placeholder` cần hữu ích đối với người dùng. Một vài vấn đề thường gặp với `Placeholder` như sau:

- Nó sẽ biến mất khi người dùng nhập liệu (có thể người dùng sẽ nhập liệu sai do không nhớ rõ điều kiện)
- Gray-on-white text có tính tương phản kém, khó để đọc
- Nếu nội dung quá dài, placeholder có thể bị ẩn một phần nội dung

<img width="714" alt="Screen Shot 2021-04-07 at 14 21 55" src="https://user-images.githubusercontent.com/15076665/113814442-9f6fb780-97ac-11eb-87c6-0e6055da2f5d.png">

Không nên xem xét placeholder như một giải pháp hoàn hảo cho việc gợi ý nhập liệu, việc đặt các hint text ở phía trên element cũng sẽ là một giải pháp hợp lí

<img width="728" alt="Screen Shot 2021-04-07 at 16 40 36" src="https://user-images.githubusercontent.com/15076665/113829039-ff238e00-97bf-11eb-8333-bd35f1998a5a.png">

### Float Labels

Sử dụng label như là placeholder

<img width="754" alt="Screen Shot 2021-04-07 at 16 44 35" src="https://user-images.githubusercontent.com/15076665/113829545-94bf1d80-97c0-11eb-95f1-e571654cf79b.png">

Tuy nhiên một vấn đề thấy rõ ở đây đó là `hint` sẽ bị bỏ qua vì lúc này `hint` và `label` là một.

Việc cắt giảm, tối giản hoá form sẽ không giúp người dùng cảm thấy thoải mái hơn, trái lại nó còn khiến vấn đề thêm trầm trọng. Thay vào đó, nên ưu tiên các label cần thiết ngay lập tức.

### The Question Protocol

Một trong những cách tự nhiên và hiệu quả nhất để tối giản hoá form đó là sử dụng `Question Protocol`. Nó giúp bạn chắc chắn về những _câu hỏi_ bạn đang hỏi người dùng ở trong form.

Liệu có cần thiết phải yêu cầu người dùng nhập `first name`, `last name` trong registration form hay không. Ngoài ra nên cắt giảm các thông tin nào để khiến trải nghiệm của người dùng trở nên "mượt" hơn.

Nếu chưa cần thiết, ta có thể cắt giảm `first name` và `last name` field cho registration form. Nếu cần, ta có thể hỏi user vào lúc sau. Nhờ đó form của bạn đã giảm một nửa độ dài rồi.

### NO PASSWORD SIGN-IN

Một giải pháp khác đó là sử dụng `No password sign-in` - thay vì bắt người dùng phải nhập vào password, ta có thể tiến hành login flow thông qua email.

<img width="464" alt="Screen Shot 2021-04-09 at 14 53 01" src="https://user-images.githubusercontent.com/15076665/114134831-556d0a00-9943-11eb-952f-46806f7798ce.png">

Trên thực tế, cách tiếp cận này có thể giảm bớt đi độ dài của form và giúp người dùng không phải nhớ password, nhưng nó cũng có ít nhiều những nhược điểm như:

- Người dùng có thể chưa quen với flow này
- Khiến người dùng nghi ngờ về tính bảo mật
- Ép người dùng phải di chuyển từ app của bạn sang email app ==> Tốn thời gian chuyển app - chưa kể trường hợp người dùng nhớ password và sử dụng phần mềm quản lí password.

Không có một giải pháp nào tốt hoàn toàn cả, đó là lúc chúng ta phải sử dụng `question protocol`.

### PASSPHRASES

Password thường ngắn và dễ bị crack. Vậy nên chúng ta thường "yêu cầu" người dùng nhập những password:

- Độ dài >= 8
- Chứa ít nhất 1 kí tự hoa, thường, số ...

Điều này sẽ khiến người dùng cảm thấy mệt mỏi với khâu thiết lập password.

Thay vào đó ta có thể hỏi người dùng "Passphrase" - về bản chất là tập hợp các từ.

Nó bảo mật hơn so với password về mặt độ dài.

Xong phương pháp này không phổ biến nên khiến người dùng không quen cũng như nghi ngại về tính bảo mật.

### Field Styling

Vị trí của Label cũng như focus style là những thứ cần được xem xét.

### LABEL POSITION

Việc đặt label ngay bên cạnh component sẽ thuận cho việc đánh mắt của user hơn. Tuy nhiên với không gian hẹp hơn thì nên đặt ở phía trên component.

Nếu nội dung của label quá dài thì việc đặt label ngay cạnh component (control) không hẳn là một ý hay. Hãy cô đọng nội dung của label tối đa, nếu vẫn thấy dài thì việc đặt label phía trên control là một giải pháp tốt.

### LOOK, SIZE, AND SPACE

> Form fields should look like form fields

Câu nói phía trên có nghĩa như thế nào ? Một cách đơn giản, text input nên để trống để người dùng biết nó cần được điền vào (giống như những cuốn sách dạy trẻ tập tô màu), vì thể placeholder lúc này không cần thiết.

Điều này đồng nghĩa với việc "không gian trống" cần được bo viền (thêm border) để người dùng nhận biết đây là text input, nếu bỏ đi bo viền hoặc chỉ bo viền ở bottom có thể khiến người dùng hiểu nhầm đây là separator, dữ liệu người dùng nhập vào sẽ đi lên trên hay xuống dưới separator đó ?

> Things that appear close together suggest they belong together

Label nên ở gần form control mà nó kết nối, việc để khoảng cách cân bằng giữa các `form-group` có thể tăng tính thẩm mỹ nhưng lại khiến người dùng bối rối.

Label và text box nên đủ lớn để dễ đọc và dễ dùng. Nên label nên có kích thước nhỏ nhất là 16px, text box nên có kích cỡ nhỏ nhất là 44px (các "tap target" nói chung).

### FOCUS STYLES

Browser cũng mặc định thêm style cho component khi chúng được focus, tuy nhiên những style này quá mờ nhạt, khó thấy.

Không nên vì thế mà loại bỏ đi `focus style`, trái lại việc loại bỏ này có thể khiến trải nghiệm người dùng bị ảnh hưởng nghiêm trọng. Hãy ghi đè `focus style` mặc định của trình duyệt để khiến nó rõ ràng hơn.

