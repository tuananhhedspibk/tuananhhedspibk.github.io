## You don’t have to fill the whole screen

Hiện nay chúng ta thường sử dụng những công cụ thiết kế có độ phân giải cao, chiều rộng lớn (1200 - 1400px)
Tuy nhiên việc có nhiều không gian không đồng nghĩa với việc chúng ta cần thiết phải sử dụng toàn bộ chúng

<img src="https://user-images.githubusercontent.com/43769314/62588703-acfedb00-b901-11e9-9eee-87ebf001ca42.png" width="720">

Nếu element chỉ cần 600px thì hãy chỉ dùng 600px, chỉ cần một khoảng không gian nhỏ xung quanh element là đủ

<img src="https://user-images.githubusercontent.com/43769314/62588823-1a127080-b902-11e9-8c29-109449f00760.png" width="720">

Navigation full width không có nghĩa là các elements khác cũng vậy

Chỉ cho element những khoảng không gian vừa đủ cần - Đừng khiến mọi thứ tồi tệ hơn khi **bắt 1 element phải giống với element khác**

<img src="https://user-images.githubusercontent.com/43769314/62588924-7a091700-b902-11e9-9c68-d69192bc0feb.png" width="720">

### Shrink the canvas

Sẽ thật khó khi phải thiết kế một màn hình nhỏ trên 1 canvas lớn. **Hãy thu nhỏ canvas lại!**

Nếu bạn đang thiết kế 1 ứng dụng web responsive hãy bắt đầu từ giao diện của mobile (400px). Khi bạn đã hài lòng với ứng dụng mobile hãy tăng kích cỡ của canvas, chỉnh sửa 1 vài yếu tố cho phù hợp với canvas lớn (khả năng cao là bạn không phải chỉnh sửa quá nhiều)

Mobile UI

<img src="https://user-images.githubusercontent.com/43769314/62589508-7080ae80-b904-11e9-9b11-c4dea84d7c46.png" width="720">

Web UI

<img src="https://user-images.githubusercontent.com/43769314/62590319-e259f780-b906-11e9-812c-501b76ec81c8.png" width="720">

### Thinking in columns

Dù thiết kế phù hợp với màn hình nhỏ nhưng lại mất đi sự cân bằng trong một UI rộng hơn hãy nghĩ đến việc chia nó thành các cột (columns) thay vì chỉ khiến nó rộng hơn

Ví dụ như form dùng cho màn hình hẹp dưới đây

<img src="https://user-images.githubusercontent.com/43769314/62591094-6f05b500-b909-11e9-9ab7-055a6aede993.png" width="720">

Nếu ta muốn nó hiển thị tốt hơn trên 1 màn hình rộng hơn nhưng vẫn không khiến cho form khó dùng hơn, hãy chia/ tách các supporting text thành các cột riêng

<img src="https://user-images.githubusercontent.com/43769314/62591107-80e75800-b909-11e9-8ea2-d33bd9ccb91b.png" width="720">

### Don’t force it

Không nên cố nhồi nhét nhiều thứ vào màn hình

Nếu cần nhiều không gian hãy tìm nó thay vì làm nó một cách ép buộc

## Grids are overrated

Trong thực tế **12-column system** là khá phổ biến, nó khiến chúng ta có thể hoàn thiện layout một cách dễ dàng

Tuy nhiên việc lạm dụng grid không phải lúc nào cũng tốt

### Not all elements should be fluid

Về cơ bản, grid là một hệ thống **width base percentage** có nghĩa là các chiều rộng sẽ được chọn ra từ một tập các width hạn chế cho trước

Đơn vị width cơ bản trong grid là 8.33%. Các columns có thể có chiều rộng là bội của **8.33%** (bao gồm cả gutters)

<img src="https://user-images.githubusercontent.com/43769314/62591725-7d54d080-b90b-11e9-9562-32ec6edda102.png" width="720">

Việc sử dụng grid cũng không hoàn toàn thích hợp, ta xét ví dụ với layout gồm
- Sidebar (25%)
- MainContent (75%)

<img src="https://user-images.githubusercontent.com/43769314/62592516-5f3c9f80-b90e-11e9-97b3-c531a55f78f9.png" width="720">

Mọi thứ khá ổn lúc đầu nhưng khi ta resize screen, nếu screen rộng ra thì sidebar cũng sẽ rộng ra, dẫn đến việc chiếm các khoảng không gian mà MainContent cần phải dùng, ngược lại nếu screen hẹp đi thì sidebar cũng sẽ hẹp đi và có thể nhỏ hơn cả **chiều rộng thích hợp nhỏ nhất** của nó khiến cho text bị **vỡ**

Trong tình huống này sẽ thích hợp hơn nếu sidebar có **fixed width**, MainContent sẽ thay đổi width tuỳ theo chiều rộng của screen và sử dụng **internal grid** cho MainContent

<img src="https://user-images.githubusercontent.com/43769314/62593199-d7a46000-b910-11e9-93cf-9735a098e432.png" width="720">

Đừng sử dụng đơn vị % nếu bạn không muốn element scale sau này

### Don’t shrink an element until you need to

Giả sử bạn đang thiết kế một login card. Với full screen bạn chọn **6 column** cho login card và 6 column trống 2 bên (mỗi bên 3 column). Nhưng khi kích cỡ màn hình thu nhỏ lại thì login card cũng sẽ nhỏ lại theo, vậy bạn cần chỉnh lại cho login card lên **8 column**

<img src="https://user-images.githubusercontent.com/43769314/62682025-13fdbc00-b9f6-11e9-9106-ed516b7e01fb.png" width="720">

Vì sẽ có 1 khoảng các **screen-sizes** mà kích cỡ của login card sẽ nhỏ đi khi kích cỡ màn hình rộng ra

Do trong grid-system, chiều rộng có giá trị dynamic. Nên thay vì quá phụ thuộc vào grid, ta se định nghĩa **max-width** mà chỉ **force shrink** khi kích cỡ màn hình nhỏ hơn **max-width** mà thôi

<img src="https://user-images.githubusercontent.com/43769314/62682052-2677f580-b9f6-11e9-8f88-ee393bdd970f.png" width="720">

## Relative sizing doesn’t scale

Giả sử ta đang thiết kế một trang article cho một màn hình cỡ lớn (desktop). Body font size sẽ là 18px, trong khi title font size là 45px. Về cơ bản sự tương quan về kích cỡ này là khá hợp lí cho màn hình desktop.

Vậy công thức rút ra ở đây là 

> Title font size = Body font size * 2.5

Định nghĩa tương quan kích thước kiểu này gọi là **relative relationship**
Nhưng liệu điều này có phù hợp khi kích cỡ màn hình nhỏ đi hay không?

Nếu gấp 2.5 thì ta có thể coi **Title font size** bằng **2.5em**. (Về đơn vị **em** tham khảo [ở đây](https://github.com/learndeeplearningbymyself/TIL/issues/1]))


Với màn hình có kích cỡ nhỏ, để đảm bảo line length ta sẽ cho body font size có kích cỡ 14px, nếu giữ tỉ lệ kích cỡ trên thì kích cỡ của title sẽ là 35px trông sẽ như dưới đây

<img src="https://user-images.githubusercontent.com/43769314/62684281-4e1d8c80-b9fb-11e9-9c24-be924914df0c.png" width="720">

Tuy nhiên thay vì áp dụng cứng nhắc tỉ lệ này, ta sẽ chỉnh cho title có kích cỡ 24px thì sẽ trông như dưới đây

<img src="https://user-images.githubusercontent.com/43769314/62684433-a94f7f00-b9fb-11e9-8197-f75f1abc03c6.png" width="720">

Rõ ràng việc chỉnh font size cho title nhỏ đi trông sẽ phù hợp hơn cho màn hình có kích cỡ nhỏ, và ở đây ta có tỉ lệ là 1.5-1.7

Qua đó ta có thể rút ra kết luận là **relative relationship** không hệ tồn tại và cũng không có lợi ích gì khi thử nó với nhiều kích cỡ màn hình khác nhau

Như một luật tổng quát ta có

> Các phần tử có kích cỡ lớn trên màn hình lớn sẽ bị thu nhỏ nhanh hơn là các phần tử có kích cỡ nhỏ khi kích cỡ màn hình bị thu nhỏ. Không có sự khác biệt quá nhiều giữa phần tử lớn và nhỏ ở màn hình có kích cỡ nhỏ

### Relationships within elements

Tương tự như vậy trong cùng một element cũng không nên dựa theo 1 tỉ lệ cứng nhắc nào đó

Ví dụ như việc scale up, down button. Với màn hình to, button có (font-size: 20px, padding: 15px 20px) - nếu giữ nguyên tỉ lệ padding top-down = font-size thì sẽ trông như sau

<img src="https://user-images.githubusercontent.com/43769314/62686010-ca659f00-b9fe-11e9-8da0-8f24856ce178.png" width="720">

Tuy nhiên nếu thay đổi các kích cỡ này một cách không quá cứng nhắc thì sẽ như sau

<img src="https://user-images.githubusercontent.com/43769314/62686530-e1f15780-b9ff-11e9-8966-44f4fe6915a7.png" width="720">

Rõ ràng ảnh phía dưới cho ta cảm giác nút nhỏ thật sự *nhỏ*, nút lớn thực sự *lớn*

Vậy nên hãy từ bỏ thói quen scale mọi thứ thật *cân xứng*, hãy làm mọi thứ độc lập với nhau, điều đó sẽ khiến bạn cảm thấy tự do hơn khi thay đổi kích thước các elements

## Avoid ambiguous spacing

Khi thiết kế **background color**, **spacing** cũng như các **seperators** là công cụ để phân biệt giữa các *elements groups* với nhau

Thiếu đi chúng các elements trong cùng 1 group sẽ thiếu đi sự liên kết
Như ví dụ dưới đây, margin giữa label với input là như nhau nên không có sự liên kết giữa label và input trong cùng 1 group

<img src="https://user-images.githubusercontent.com/43769314/62750787-5083f300-ba9c-11e9-9663-90f46b2bf698.png" width="720">

Nếu thay đổi khoảng cách giữa input với label phía dưới nó, thì sẽ trông như thế này

<img src="https://user-images.githubusercontent.com/43769314/62750798-5bd71e80-ba9c-11e9-993c-1660df3e01ea.png"" width="720">

Rõ ràng ở hình thứ 2, mọi thứ đã có sự liên kết rõ ràng hơn

Cũng tương tự như khi thiết kế article (**khoảng cách phía trên section heading** là không đủ lớn) hoặc trong **bulleted list**, khi mà khoảng cách giữa các **bulleted** bằng với **line-height** của 1 bullet.

<img src="https://user-images.githubusercontent.com/43769314/62750960-df910b00-ba9c-11e9-9b57-30464b3cc6ae.png" width="720">

<img src="https://user-images.githubusercontent.com/43769314/62750974-eddf2700-ba9c-11e9-8ea7-9975bcd4366d.png" width="720">

Điều tương tự cũng có thể xảy ra với các phần tử nằm ngang

<img src="https://user-images.githubusercontent.com/43769314/62751024-2bdc4b00-ba9d-11e9-96c7-06e67e202770.png" width="720">

Bất cứ khi nào bạn muốn dựa theo khoảng cách để kết nối các phần tử thì hãy ghi nhớ rằng

> Khoảng cách xung quanh group elements luôn phải lớn hơn khoảng cách bên trong group

> Một UI tồi là khi nó quá khó để hiểu

# Designing Text

## Establish a type scale

Trong thực tế, không quá khó để tìm thấy một thiết kế có quá nhiều font-size

<img src="https://user-images.githubusercontent.com/43769314/62755913-c7c38200-bab0-11e9-85c3-ae72c85dd55d.png" width="720">

Chọn lựa font-size mà thiếu đi tính hệ thống có thể là 1 ý tưởng tồi với 2 lí do như sau
1. Khiến cho giao diện trở nên thiếu đi tính thống nhất
2. Làm giảm tiến độ công việc

### Choosing a scale

#### Modular scales

Một cách tiếp cận đó là tính toán dựa theo **tỉ lệ**
- 4:5 - *major third*
- 2:3 - *perfect fifth*
- 1:1.618 - *golden ratio*

Cách tiếp cận này thường gọi là **modular scale**. Có thể chọn **base font size** là 16px vì *đây là kích cỡ font mặc định của mọi trình duyệt*

Cách tiếp cận này trong thực tế lại không hợp lí vì 2 lí do
1. **Chúng ta thường có kết quả dưới dạng phân số**
2. **Thực tế, chúng ta cần nhiều font size hơn**
  - Việc sử dụng cách tính toán trên chỉ thích hợp với **article design** với **interface design** đôi khi chúng ta muốn các cỡ font nằm giữa khoảng **12px- 16px** hoặc **16px - 21px**
  - Để giải quyết vấn đề, có thể nghĩ tới giải pháp với tỉ lệ 8:9. Tuy nhiên đây thực ra lại là **chọn cỡ font mà ta mong muốn một cách tuỳ ý**

#### Hand-crafted scales

Một cách tiếp cận thường dùng trong thực tế đó là **dùng tay**. Thật vậy, việc tự tạo **bằng tay** một hệ thống sẽ giúp bạn chủ động hơn trong việc kiểm soát các kích cỡ hiện có thay vì phó mặc mọi thứ cho một hệ thống tính toán

Dưới đây là một ví dụ về một hệ thống scale được sử dụng rất nhiều trong thực tế

<img src="https://user-images.githubusercontent.com/43769314/62756782-01e25300-bab4-11e9-87e2-74bc70b0e80b.png" width="720">

<img src="https://user-images.githubusercontent.com/43769314/62756835-25a59900-bab4-11e9-9897-3edfd7dd70dc.png" width="720">

#### Avoid em units
