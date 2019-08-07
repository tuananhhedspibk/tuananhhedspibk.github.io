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
