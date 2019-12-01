#### Avoid em units

Không nên sử dụng đơn vị em, vì nó là giá trị mang tính chất tương đối. Giá trị em của **nested elements** phụ thuộc vào giá trị của element cha (relative value), từ đó dẫn đến tình trạng tạo ra các giá trị mà ta không hề mong muốn cho font chữ

<img src="https://user-images.githubusercontent.com/43769314/66882296-d5433e00-f004-11e9-877e-ebfa5f6b8ca4.png" width="720">

Như ví dụ trên, nếu một phần tử có font size là 1.25em (mặc định là 20px) thì phần tử con của nó (nếu có giá trị font size là 1em) thì lúc này giá trị thực (theo đơn vị px) sẽ là 20px thay vì 16px như mong muốn

> Hãy sử dụng px hoặc rem nếu bạn muốn bảo toàn những gì đang xây dựng cho giao diện của mình

### Use good fonts

Dưới đây là một vài tricks để có thể chọn ra fonts (typefaces) phù hợp cho UI của bạn

#### Play it safe

Nếu đang phân vân thì **san-serif** luôn là một lựa chọn an toàn - VD như **Helvetica**

Còn nếu bạn không tin tưởng vào sự cảm nhận của bản thân thì hãy sử dụng **system font stack** như sau:

1. -apple-system
2. Segoe UI
3. Roboto
4. Noto Sans
5. Ubuntu
6. Cantarell
7. Helvetica Neue

Có thể đó không phải là những sự lựa chọn tốt nhất nhưng ít nhất, người dùng cũng có thể đọc nó một cách dễ dàng

#### Ignore typefaces with less than five weights

Điều này có thể không hoàn không đúng nhưng các fonts có số lượng weights nhiều thường được tạo ra với một sự cẩn thận và chi tiết nhiều hơn so với các fonts có ít weights.

Trên Google fonts, filter "number of styles" là sự kết hợp của các weights hiện có cũng như các mẫu italic khác của các weights tương ứng

#### Optimize for legibility

Các Font sử dụng cho headline thương có khoảng cách giữa các chữ hẹp và kí tự lowercase với chiều cao thấp hơn so với fonts cho các sizes chữ nhỏ hơn.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69127093-f3f99080-0aec-11ea-85b9-4ca4af92eeb6.png">

Hãy luôn ghi nhớ điều này để tránh việc sử dụng fonts với x-height bé cho main UI text

#### Trust the wisdom of the crowd

Nếu một font là phổ biến thì chứng tỏ font đó là khá tốt, có nhiều font directories cho phép chúng ta có thể chọn fonts dựa theo mức độ phổ biến (popularity), đây là một điều tuyệt vời khi chúng ta cần chọn các fonts có cá tính (khác hẳn với các font trung tính)

<img width="720" src="https://user-images.githubusercontent.com/43769314/69127501-b0535680-0aed-11ea-9ca8-05bc75aa8f88.png">

#### Steal from people who care

Lựa chọn 1 site mà bạn yêu thích, inspect để biết được site đó sử dụng font nào. Họ thường sẽ chọn được các fonts khá tuyệt mà bằng cách tiếp cận "an toàn" thông thường, bạn có thể sẽ không tìm được.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69127881-7df62900-0aee-11ea-865f-c823f7f2b649.png">

### Keep your line length in check

Khi tiến hành styling cho paragraph, chúng ta thường dễ mắc lỗi thiết kế (fitting the text to the layout) khiến cho đoạn text dài và khó đọc (ảnh hưởng xấu đến trải nghiệm đọc của người dùng)

<img width="720" src="https://user-images.githubusercontent.com/43769314/69203042-b2b5bf00-0b86-11ea-8298-284919f39ec9.png">

Để tạo ra trải nghiệm đọc tốt nhất, hãy đảm bảo các paragraphs của bạn có chiều rộng nằm trong khoảng **45-75 kí tự mỗi dòng**. Cách thiết lập dễ dàng nhất ở đây là sử dụng đơn vị *em* - có tính tương đối với font size hiện tại. Chiều rộng trong khoảng **20-35em** là thích hợp nhất.

#### Dealing with wider content

Nếu bạn đang tiến hành kết hợp giữa paragraph với ảnh hoặc các components lớn khác, bạn vẫn nên chú ý giới hạn chiều rộng của paragraph kể cả khi khu vực nội dung chính cần phải rộng hơn để chứa thêm các elements khác.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69395990-38bb3c80-0d24-11ea-9c91-44a8a5c55003.png">

<img width="720" src="https://user-images.githubusercontent.com/43769314/69396015-47095880-0d24-11ea-932a-980fdb40380a.png">

Thoạt qua ta thấy có vẻ như cách làm thứ hai sẽ phản trực giác khi sử dụng nhiều kích cỡ chiều rộng khác nhau trong cùng một vùng nội dung nhưng kết quả là giao diện của chúng ta sẽ trở nên thoáng hơn rất nhiều.

### Baseline, not center

Sẽ có những trường hợp, bạn phải kết hợp sử dụng nhiều loại font sizes khác nhau trong cùng một dòng (VD: như đối với dòng tiêu đề của 1 card: tên card, các action names - theo thứ tự từ trái sang phải)

Thông thường ở trường hợp này bạn sẽ nghĩ ngay đến giải pháp căn lề dọc các nội dung với font sizes khác nhau. Đó không hẳn là một ý tưởng tồi, tuy nhiên điều đó chỉ thích hợp khi bạn có thể tạo được một khoảng không gian trống giữa các cỡ chữ khác nhau như hình dưới đây:

<img width="720" src="https://user-images.githubusercontent.com/43769314/69507719-cee6a100-0f76-11ea-9b6e-474afdeab8b4.png">

Tuy nhiên khi không có đủ khoảng cách, mọi thứ trông thật là vụng về:

<img width="720" src="https://user-images.githubusercontent.com/43769314/69507770-ff2e3f80-0f76-11ea-8e7d-fa17fa0817ee.png">

Một cách tiếp cận tốt hơn cho việc sử dụng nhiều font sizes trong một dòng đó chính là *baseline* của chúng - đây là đường kẻ ngang tưởng tượng, có vai trò như chân đế của các chữ cái

<img width="720" src="https://user-images.githubusercontent.com/43769314/69508020-e5d9c300-0f77-11ea-812c-ce6d61ecbc7b.png">

Khi sử dụng *baseline* cho nhiều font sizes khác nhau, bạn đang tận dụng khá tốt yếu tố căn gióng mà bản thân đôi mắt của bạn có thể cảm nhận được

<img width="720" src="https://user-images.githubusercontent.com/43769314/69508196-6d273680-0f78-11ea-8372-90be8a761c6a.png">

Trông dễ nhìn và "thoáng hơn" rất nhiều.

### Line-height is proportional

Line-height 1.5 là một điểm khởi đầu tốt cho tính dễ đọc của văn bản, việc chọn line-height phù hợp cho nội dung văn bản thường khá phức tạp hơn so với sử dụng cùng một giá trị cho mọi trường hợp

<img width="720" src="https://user-images.githubusercontent.com/43769314/69509138-3272cd80-0f7b-11ea-9f60-c4ad746aa97f.png">

#### Accounting for line length

Việc thêm khoảng cách giữa các dòng khiến cho người đọc không bị rối mắt, qua đó tránh được trường hợp một dòng vị đọc 2 lần, ... Nguyên nhân là do line-height quá ngắn. Khi line-height ngắn thì người đọc sẽ dễ dàng quay trở lại lề trái của dòng vừa đọc xong do người đọc không chắc chắn được về dòng tiếp theo họ cần phải đọc.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69511391-3dc9f700-0f83-11ea-93db-a7fbf784c206.png">

Vấn đề sẽ trở nên nghiêm trọng hơn khi các dòng text qúa dài, khi mắt người đọc phải đánh ra càng xa (theo chiều ngang) thì họ càng dễ mất định hướng về điểm neo của dòng tiếp theo. Điều đó có nghĩa rằng line-height và chiều rộng của paragraph cần phải tỉ lệ thuận, với nội dung có chiều rộng hẹp nên sử dụng **line-height: 1,5**, với nội dung có chiều rộng lớn nên sử dụng **line-height: 2**

<img width="720" src="https://user-images.githubusercontent.com/43769314/69515372-be8fef80-0f91-11ea-99ef-e9644450c262.png">

#### Accounting for font size

Ngoài chiều rộng của dòng thì font size cũng là yếu tố ảnh hưởng đến việc lựa chọn line-height. Với các font sizes nhỏ ta cần khoảng cách giữa các dòng để người đọc có thể dễ dàng tìm được dòng tiếp theo khi kết thúc dòng đang đọc

<img width="720" src="https://user-images.githubusercontent.com/43769314/69518580-49291c80-0f9b-11ea-907a-769c4725db4b.png">

Tuy nhiên với text cỡ lớn không cần quá nhiều line-spacing, lúc này chỉ cần **line-height = 1** là đủ

<img width="720" src="https://user-images.githubusercontent.com/43769314/69520419-03bb1e00-0fa0-11ea-8717-c90c986fdd42.png">

> Line-height và font size tỉ lệ nghịch với nhau - sử dụng line-height cao hơn cho chữ nhỏ và line-height thấp hơn cho chữ to

### Not every link needs a color

Thông thường với các links có trong 1 đoạn văn, chúng thường được làm nổi để thể hiện rằng "đây là một link".
Tuy nhiên khi xử lí các giao diện chỉ có links thì việc làm nổi này đôi khi lại tạo ra một sự gượng ép không cần thiết, khiến giao diện sẽ trở nên khó nhìn hơn.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69525059-a4aed680-0faa-11ea-8f34-c51ac5153171.png">

Thay vào đó có thể sử dụng cách nhấn mạnh "nhẹ nhàng hơn" thông qua việc, sử dụng font weight đậm hơn cũng như màu chữ tối hơn

<img width="720" src="https://user-images.githubusercontent.com/43769314/69525189-e9d30880-0faa-11ea-9b78-17add451e9f0.png">

Tuy nhiên có những links không cần thiết phải nhấn mạnh vì chúng không phải là phần chính trong giao diện, cũng như được người dùng click vào nhiều, khi đó ta có thể thêm **underline** hoặc **thay đổi màu** *chỉ khi người dùng hover* lên links.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69595410-cb205080-1042-11ea-8520-b045bb435aa5.png">

Nó vẫn đủ để người dùng có thể nhận ra rằng đây là link nhưng lại không tạo ra sự cạnh tranh về tính chú ý đối với các phần quan trọng khác trên trang.

### Align with readability in mind

Căn lề text dựa theo thứ tự viết của ngôn ngữ (thường là từ trái sang)

<img width="720" src="https://user-images.githubusercontent.com/43769314/69607199-1567f880-1068-11ea-9bdf-ba6c26312f80.png">

#### Don’t center long form text

Căn lề giữa trông khá tuyệt với headlines hoặc các đoạn text ngắn, cũng như các text blocks độc lập

<img width="720" src="https://user-images.githubusercontent.com/15076665/69639107-529bad00-109f-11ea-9f44-c3b9b4b43948.png">

Tuy nhiên nếu phần nào đó dài hơn 2 hoặc 3 dòng thì ta nên căn trái

<img width="720" src="https://user-images.githubusercontent.com/15076665/69639202-7828b680-109f-11ea-92f6-04272e53ea19.png">

Nếu bạn có 1 text block có độ dài lớn hơn các text blocks còn lại, cách sửa tốt nhất là làm "ngắn nó" để qua đó tạo ra sự thống nhất cho giao diện.

<img width="720" src="https://user-images.githubusercontent.com/15076665/69639410-cf2e8b80-109f-11ea-9a90-8106505d1697.png">

#### Right-align numbers

Với các bảng có chứa số liệu, ta nên căn phải để có thể so sánh nhanh nhất có thể

<img width="720" src="https://user-images.githubusercontent.com/15076665/69639864-b2468800-10a0-11ea-801f-e785110cd605.png">

#### Hyphenate justified text

Jusitified text trông khá ổn với các trang web tuy nhiên trong một số trường hợp đặc biệt, nó có thể tạo ra những khoảng trông bất thường giữa các từ với nhau

Những trường hợp đó, ta nên sử dụng "-" - dấu gạch nối như một giải pháp

<img width="720" src="https://user-images.githubusercontent.com/15076665/69640216-56303380-10a1-11ea-9f02-022d9b666041.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69640246-634d2280-10a1-11ea-853d-91fa680f8e13.png">

### Use letter-spacing effectively

Thông thường chúng ta sẽ follow theo thiết kế của font chữ chứ không cần phải để ý đến **letter-spacing**

<img width="720" src="https://user-images.githubusercontent.com/43769314/69697126-0c892c80-1125-11ea-97a0-27b354927783.png">

#### Tightening headlines

> Phân biệt nhanh giữa Typeface và Font. Typeface: Arial, Font (Arial: cỡ chữ 14, Arial: cỡ chữ 15, Arial: loại in nghiêng (italic)

Một font family được thiết kế với các letter-spacing phù hợp 

Family như **Open Sans** được thiết kế để tập trung vào tính dễ đọc kể cả khi cỡ chữ nhỏ, nên các letter-spacing của nó thường lớn hơn so với family như **Oswald** vốn được thiết kế cho headlines

<img width="720" src="https://user-images.githubusercontent.com/43769314/69770428-5842e100-11cc-11ea-85f0-7e24f17087ad.png">

Nếu bạn muốn sử dụng family có letter-spacing rộng để làm headlines hoặc titles thì nên thu hẹp letter-spacing của chúng lại

<img width="720" src="https://user-images.githubusercontent.com/43769314/69770515-a657e480-11cc-11ea-950f-c938330bed40.png">

Tuy nhiên cũng có một cách làm khác là tăng letter-spacing cho các headline font

#### Improving all-caps legibility

Letter-spacing trong hầu hết các font families đều được tối ưu hoá cho các *câu thường* - chữ cái đầu là chữ hoa, các chữ sau là chữ thường. Bản thân các chữ thường cũng khá đa dạng về mặt trực quan, ví dụ như
- Chữ n, v, e vừa khít với typeface-x-height
- Chữ y, g, p có đuôi hậu tố khiến nó tràn xuống dưới baseline
- Chữ b, f, t có tiền tố mở rộng lên trên

<img width="720" src="https://user-images.githubusercontent.com/43769314/69774326-ffc61080-11d8-11ea-848d-851b838bdb7d.png">

Với các texts chỉ toàn chữ hoa, do chúng có cùng chiều cao nên việc sử dụng letter-spacing mặc định thường khiến việc đọc khó khăn hơn do khó có sự phân biệt giữa các chữ. Vì lí do đó, ta nên **tăng letter-spacing** với các đoạn texts chỉ toàn chữ hoa, điều đó sẽ khiến việc đọc trở nên dễ dàng hơn.

<img width="720" src="https://user-images.githubusercontent.com/43769314/69774508-72cf8700-11d9-11ea-96ff-13841f130901.png">

## Working with Color

### Ditch hex for HSL

Khi biểu diễn màu ở định dạng Hex và RGB sẽ không đem lại sự trực quan khi xem chúng ở dạng code

<img width="460" src="https://user-images.githubusercontent.com/43769314/69786683-424e1400-11fe-11ea-8d6e-b184deeaebd8.png">

HSL sẽ sửa được lỗi này bằng cách hiển thị mã màu thông qua các thuộc tính phù hợp với thị giác mắt người: hue, saturation, lightness.

**Hue**: là vị trí của màu trên bánh xe màu - nó là thuộc tính của màu cho biết đây là "màu xanh"

<img width="460" src="https://user-images.githubusercontent.com/43769314/69787882-aa9df500-1200-11ea-84d9-1dc3d9609001.png">

Hue được đo bằng đơn vị độ (0 độ - red, 120 độ - green)

<img width="480" src="https://user-images.githubusercontent.com/43769314/69787973-dc16c080-1200-11ea-9086-0e3efbbb4bbc.png">

**Saturation**: chỉ mức độ sống động của màu. 0% là grey (không màu), 100% là sống động.

<img width="600" src="https://user-images.githubusercontent.com/43769314/69788208-5a736280-1201-11ea-9db2-5d58924815dc.png">

Nếu không có saturation, hue sẽ không có ý nghĩa, nếu saturation = 0% thì việc thay đổi giá trị của hue sẽ không thực sự làm thay đổi màu.

<img width="380" alt="Screen Shot 0031-11-28 at 21 39 18" src="https://user-images.githubusercontent.com/15076665/69807026-98837d00-1227-11ea-9ff7-8e2454c0cb29.png">

**Lightness**: chỉ mức độ gần với **màu đen** hoặc **màu trắng** của màu HSL (chỉ mức độ sáng tối)
- 0%: pure black
- 50%: pure hue color
- 100%: pure white

#### HSL vs HSB

B trong HSB là **brightness**

Khi **B = 0%** thì HSB sẽ là **pure black** khi **B = 100%** thì HSB sẽ là **pure white** khi **saturation = 0%** với **saturation = 100%** thì **B = 100%** chỉ tương đương với **L = 50%**

<img width="720" src="https://user-images.githubusercontent.com/15076665/69807308-53ac1600-1228-11ea-8075-fce65c5a1dd8.png">

Về cơ bản HSB phổ biến hơn HSL trong thiết kế phần mềm nhưng **trình duyệt hiểu rõ HSL hơn** nên khi thiết kế web HSL sẽ là một sự lựa chọn tuyệt vời cho bạn.

### You need more colors than you think

Cách làm phổ biến hiện nay là chọn ra 1 màu chủ đạo, sau đó dựa vào pallete generator để tìm ra 4 màu khác để tạo ra một tông màu. Điều này khiến cho tông của bạn khá quyết rũ, nhưng thực tế lại không hữu dụng ví dụ như sau:

Ta có tông màu:

<img width="720" src="https://user-images.githubusercontent.com/15076665/69807529-da60f300-1228-11ea-9d99-00307702c603.png">

Nếu chỉ sử dụng tông màu này cho trang web thì nó sẽ trông như thế này

<img width="720" src="https://user-images.githubusercontent.com/15076665/69809342-e949a480-122c-11ea-85f0-a322c26afa79.png">