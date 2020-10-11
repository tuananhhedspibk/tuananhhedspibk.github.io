## Grid cho layout, Flexbox cho components

> Bài viết được dịch từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)

※ Ảnh banner được lấy từ [nguồn](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)

※ Bài viết chủ động giữ nguyên các thuật ngữ bằng tiếng Anh

※ Code cũng được tham khảo từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)

Em trai tôi mới tốt nghiệp ngành kĩ thuật máy tính, cậu ta hiện tại đang hoàn thành quá trình thực tập của mình với công việc front-end development. Cậu ấy đã học được về CSS grid và flexbox, nhưng tôi nhận thấy một vấn đề mà cậu ấy đang gặp phải (vấn đề này cũng đã được đề cập trên nhiều trang web). Cậu ta không thể quyết định khi nào sử dụng grid, khi nào sử dụng flexbox. Một ví dụ là khi cậu ấy sử dụng CSS grid để layout cho header của trang web và thấy rằng nó trông không "mượt" như khi cậu ấy sử dụng `grid-column` và cố gẳng chỉnh sửa cho đến khi trông giống với thiết kế mẫu.

Thực sự thì tôi không thích điều đó, và tôi cũng cố tìm các tài liệu để cậu ấy có thể thấy được những sự khác biệt giữa grid và flexbox với ví dụ kèm theo, nhưng thật tiếc là tôi không thể. Nên tôi quyết định viết một blog nói về mọi thứ liên quan đến chủ đề đó. Hi vọng các bãn cũng sẽ thấy nó hữu ích!

### Giới thiệu

Trước khi đi sâu vào các khái niệm và các ví dụ, tôi muốn các bạn hiểu được sự khác biệt chính giữa CSS grid và flexbox. CSS Grid là một multi-dimension layout module, nghĩa là nó có cả hàng và cột. Flexbox có thể trải các phần tử con của nó hoặc là theo hàng hoặc là theo cột, nhưng KHÔNG THỂ CẢ HAI.

Nếu bạn chưa biết về CSS grid và flexbox. Tôi khuyên bạn hãy đọc thêm [bài viết này](https://ishadeed.com/article/learn-box-alignment/). Nếu bạn đã biết thì thật tuyệt, hãy cùng bắt đầu xem xét sự khác biệt giữa chúng, cũng như khi nào và tại sao lại sử dụng chúng.

### Sự khác biệt giữa flexbox và grid

Tôi muốn nói rõ điều này, không có cách nào để quyết định việc sử dụng CSS grid hay flexbox. Cũng như, không có một cách `chính xác` cũng như `không chính xác` cho việc sử dụng chúng. Bài viết này sẽ đưa ra những lời khuyên về việc sử dụng từng kĩ thuật cho từng trường hợp cụ thể. Tôi sẽ giải thích các khái niệm tổng quát, sau đó sẽ đi vào các ví dụ và việc của bạn đó là tự tìm tòi và trải nghiệm thêm.

```css
/* Sử dụng flexbox */
.wrapper {
  display: flex;
}

/* Sử dụng CSS grid */
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
}
```

Với trường hợp sử dụng `flex-box` ta có kết quả như sau:

<img width="240" src="https://user-images.githubusercontent.com/15076665/95530055-c9bc0480-0a17-11eb-9dee-e43def0c7ca4.png">

Với trường hợp sử dụng `css-grid` ta có kết quả như sau:

<img width="480" src="https://user-images.githubusercontent.com/15076665/95530184-27e8e780-0a18-11eb-8a5c-49c1d8536cf6.png">

Ta có thể thấy rằng `flex-box` chỉ trải các items của nó trên 1 dòng (inline) còn `grid` có thể trải các items của nó trên một lưới (theo các cột và hàng)

### Làm cách nào để quyết định sử dụng công cụ gì cho phù hợp

Lựa chọn giữa CSS grid và flexbox có thể khó khăn đôi chút, đặc biệt nếu bạn mới biết CSS. Tôi hoàn toàn hiểu được chuyện đó. Đây là một vài câu hỏi tôi luôn tự đặt ra cho bản thân về việc lựa chọn giữa chúng trước khi bắt đầu styling:
- Các component child items sẽ được hiển thị như thế nào ? Inline hay là dưới dạng hàng và cột ?
- Các components sẽ hoạt động như thế nào với các màn hình có kích cỡ khác nhau ?

Nếu component của bạn có các child items được hiển thị `inline` thì `flex-box` là một sự lựa chọn hoàn hảo. Xem xét ví dụ sau

<img src="https://user-images.githubusercontent.com/15076665/95531147-c9713880-0a1a-11eb-8c07-bb6a2054f555.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Nếu bạn thấy sự xuât hiện của hàng và cột thì `CSS-Grid` là giải pháp tối ưu nhất ở đây.

<img src="https://user-images.githubusercontent.com/15076665/95531233-fd4c5e00-0a1a-11eb-96b5-f0a15c3dbf12.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Vậy là tôi đã giới thiệ sự khác biệt chính giữa chúng, bây giờ hãy chuyển qua các ví dụ cụ thể hơn và học cách phân biệt một cách cẩn thận hơn.

### Use-Case và các ví dụ

Trong phần này, tôi sẽ nói chi tiết về các use-cases đối với flexbox và grid.

#### CSS Grid

**1. Main and Sidebar**

Khi bạn có main và sidebar `CSS-grid` là sự lựa chọn hoàn hảo.

<img src="https://user-images.githubusercontent.com/15076665/95536872-09d6b380-0a27-11eb-904b-e8729e97a404.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 16px;
}

aside {
  align-self: start;
}
```

**2. Cards Grid**

Sử dụng `CSS-grid` để layout Cards grid là một sự lựa chọn tuyệt vời

<img src="https://user-images.githubusercontent.com/15076665/95540379-9f744200-0a2b-11eb-9856-cc2ac465a2df.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
}
```

Ta có kết quả như sau:

<img src="https://user-images.githubusercontent.com/15076665/95540819-b6676400-0a2c-11eb-960f-df82d8f56909.png" width="560">

**3. Section layout**

Trong thiết kế bên dưới, chúng ta sử dụng grid ở 2 chỗ.
- `sidebar` và `form`
- Trong nội bộ `form`

<img src="https://user-images.githubusercontent.com/15076665/95558500-46b7a000-0a51-11eb-9838-c891564df917.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 16px;
}

.form-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
}

aside {
  align-self: start;
  border: solid 1px grey;
}
```

#### Flexbox

**1. Website navigation**

Khoảng 90% các website navigation sẽ sử dụng `flexbox`. Template chung sẽ là logo bên trái và navigation bên phải

<img src="https://user-images.githubusercontent.com/15076665/95558999-0e649180-0a52-11eb-8065-732bd116fd92.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

<img src="https://user-images.githubusercontent.com/15076665/95559120-38b64f00-0a52-11eb-848d-ffbcbe3dbb4f.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Chú ý rằng, dù cấu trúc của navigation có thể khác biệt, nhưng khoảng cách giữa các phần tử vẫn được đảm bảo với thuộc tính `justify-content`.

**2. Actions list**

Khi bạn nghe đến list, điều đầu tiên bạn nghĩ tới đó là một danh sách dọc. Thế nhưng, một list có thể hiển thị `inline`, nên ở đây tôi chỉ muốn nhấn mạnh điều này mà thôi.

Các ví dụ về actions list có thế thấy một cách dễ dàng qua Facebook hoặc Twitter. Actions list bao gồm action buttons mà user có thể sử dụng dụng. Hãy xem ví dụ dưới đây:

<img src="https://user-images.githubusercontent.com/15076665/95649871-db3a0500-0b1a-11eb-81e2-36b0ef6af562.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

> Như bạn thấy, các items được hiển thị kế tiếp nhau, và chúng được phân bố theo chiều ngang. Flexbox là một sự lựa chọn hoàn hảo cho nó! Đây là một ví dụ điển hình cho việc sử dụng flexbox.

```css
.wrapper {
  display: flex;
}

.wrapper-item {
  flex: 1; /* Mở rộng items để chúng chiếm các không gian bằng nhau */
}
```

Ta có kết quả như sau:

<img src="https://user-images.githubusercontent.com/15076665/95650019-d6c21c00-0b1b-11eb-94ff-ae2256ffe32f.png" width="560">

Một ví dụ khác đó là modal action button hoặc modal header

<img src="https://user-images.githubusercontent.com/15076665/95650066-138e1300-0b1c-11eb-8140-c15659f76afe.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Với modal-header ta sẽ có như sau:

```css
.modal-header {
  display: flex;
  justify-content: space-between;
}
```

Với footer sẽ có một chút khác biệt. "Cancel" action sử dụng auto margin để đẩy chính nó sang phải. Tôi cũng đã biết một [bài viết chi tiết](https://ishadeed.com/article/auto-css/) về điều này.

```css
.cancel__action {
  margin-left: auto;
}
```

Cái tên `.cancel__action` có thể không được tốt cho lắm, nhưng tôi không muốn đi sâu vào CSS naming conventions trong bài viết này.

**3. Form Elements**

> Sự kết hợp giữa input field với button cạnh nó là một use-case hoàn hảo cho Flexbox.

Cùng xem ví dụ dưới đây:

<img src="https://user-images.githubusercontent.com/15076665/95650455-ca8b8e00-0b1e-11eb-9d7d-aa9d1e9bccc0.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Ở form đầu tiên, input chiếm toàn bộ không gian còn lại, khiến nó có dynamic width. Áp dụng tương tự cho form thứ hai (Facebook messenger), text field sẽ chiếm toàn bộ không gian thừa còn lại. Hãy cùng xem kĩ hơn


```css
.input {
  flex: 1 1 auto; /* flex-grow, flex-shrink, flex-basis (initial length) */
}
```

<img src="https://user-images.githubusercontent.com/15076665/95650867-60c0b380-0b21-11eb-8310-e44d83100620.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Chú ý rằng, nếu không sử dụng `flex: 1 1 auto` ở text field, nó sẽ không tự mở rộng để chiếm phần không gian còn lại.

**4. Thread and comments**

> Một use-case điển hình khác cho flexbox đó là comment threads.

Cùng xem ví dụ sau:

<img src="https://user-images.githubusercontent.com/15076665/95668619-80072180-0bb1-11eb-8a60-b7bbfa673e9d.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Chúng ta có user photo, và comment. Comment sẽ chiếm phần không gian còn lại trong parent element. Đây là điều kiện tốt để ta sử dụng flexbox.

**5. Card components**

Một card component sẽ có rất nhiều kiểu thiết kế, nhưng các thiết kế điển hình nhất sẽ trông như trong mockup dưới đây.

<img src="https://user-images.githubusercontent.com/15076665/95668672-1fc4af80-0bb2-11eb-91a5-8989a2e7649a.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Ở bên trái, card child items được xếp theo chiều dọc do flex wrapper direction là `column`. Trong khi đó ở bên phải thì ngược lại. Sử dụng direction là `row`, và hãy nhớ rằng `row` là chiều (direction) mặc định của `flexbox`.

Một ví dụ khác đó là card có icon và text label ở bên dưới nó. Có thể là button, link hoặc chỉ thuần tuý là trang trí. Hãy tham khảo ở mockup dưới đây:

<img src="https://user-images.githubusercontent.com/15076665/95668763-46cfb100-0bb3-11eb-83cb-20826cfadfaa.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Chú ý cách icon và text label được căn giữa theo chiều dọc và ngang. Ta có thể thực hiện dễ dàng nhờ có flexbox.

```css
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Inline style sẽ là mặc định, chúng ta chỉ cần bỏ đi `flex-direction: column` và để cho nó giá trị mặc định (row).

**6. Tabs / Bottom Menus**

> Với các elements có chiều dài chiếm toàn bộ độ rộng của màn hình và có các items con chiếm toàn bộ không gian bên trong nó, flexbox sẽ là một công cụ hoàn hảo ở đây.

<img src="https://user-images.githubusercontent.com/15076665/95669073-3a4d5780-0bb7-11eb-9f09-7803febdee06.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Ở ví dụ trên, mỗi item sẽ chiếm các không gian nhất định và chúng nên có độ rộng như nhau. Bằng việc thiết lập wrapper display có giá trị `flex`, điều này có thể thực hiện một cách dễ dàng.

```css
.wrapper-item {
  flex-grow: 1;
}
```

That technique is used in React Native framework to build the tab bar for mobile applications. Here is a code example that does the same as above in React Native. The code is borrowed from this resource.

Kĩ thuật này được sử dụng trong React Native framework để xây dựng tab bar cho ứng dụng mobile. Đây là code mẫu triển khai giao diện như trên trong React Native. Code được tham khảo từ [nguồn](https://reactnative.dev/docs/flexbox)

```typescript
import React from 'react';
import { View } from 'react-native';

export default FlexDirectionBasics = () => {
  return (
    <View style=>
      <View style= />
      <View style= />
      <View style= />
    </View>
  );
};
```

**7. Features List**

Điều tôi thích nhất ở flexbox đó là khả năng đảo hướng của các elements. flexbox direction mặc định là row, nhưng chúng ta có thể đảo ngược nó như dưới đây.

```css
.wrapper {
  display: flex;
  flex-direction: row-reverse;
}
```

Ở mockup dưới đây, các phần tử có thứ tự lẻ sẽ bị đảo ngược lại, điều này có được là nhờ kĩ thuật phía trên.

<img src="https://user-images.githubusercontent.com/15076665/95669393-463b1880-0bbb-11eb-954d-7b0c4365836e.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

**8. Centering A Section’s Content**

Giả sử rằng, chúng ta có một hero section, nội dung cần được căn giữa theo cả hai chiều. Chiều ngang có thể dễ dàng thực hiện nhờ text alignment.

<img src="https://user-images.githubusercontent.com/15076665/95669584-5a801500-0bbd-11eb-8738-cf05cdc587cd.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

```css
.hero {
  text-align: center;
}
```

Với flexbox, bằng cách nào ta có thể căn giữa theo chiều dọc ? Đây chính là giải pháp

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontal alignment */
  justify-items: center; /* vertical alignment */
  text-align: center;
}
```

### Combining CSS Grid And Flexbox

Không chỉ mỗi layout module có các use-cases của riêng nó, chúng ta còn có thể kết hợp chúng lại với nhau. Khi tôi nghĩ về vấn đề này, use-case đầu tiên mà tôi nghĩ tới đó là danh sách các cards. Grid được sử dụng cho layout, flexbox được sử dụng cho card.

<img src="https://user-images.githubusercontent.com/15076665/95671978-b8215b00-0bd7-11eb-87b9-a90f7b819af2.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Đây là các yêu cầu cho layout:
- Chiều cao của cards trong mỗi dòng là như nhau.
- Read more link nên được đặt ở dưới cùng của card, bất kể chiều cao của card.
- Grid nên sử dụng `minmax()` function.

```html
<div class="wrapper">
  <aside class="card">
    <img src="./pic.jpg">
    <div class="card__content">
      <h2>Title</h2>
      <p>Description</p>
      <p class="card__link"><a href="#">Read more</a></p>
    </div>
  </aside>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
}

.card {
  display: flex;
  flex-direction: column;
}

.card__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card__link {
  margin-top: auto;
}
```

Hãy cùng phân tích đoạn code CSS phía trên:
- Làm cho card trở thành 1 flexbox wrapper.
- Direction ở đây là column, nghĩa là các cards sẽ xếp chồng lên nhau.
- Để cho card content mở rộng và chiếm phần không gian còn lại.
- Làm cho card content trở thành một flexbox wrapper.
- Cuối cùng, sử dụng `margin-top: auto` để đẩy link xuống. Nó sẽ giữ cho vị trí của link ở dưới cùng bất kể chiều cao của card.

> Như bạn thấy, việc kết hợp CSS grid và flexbox không hề khó. Hai công cụ này đem đến cho chugns ta rất nhiều cách để triển khai layouts trên web. Sử dụng chúng một cách chính xác, và kết hợp chúng chỉ khi nào thực sự cần thiết như ví dụ trên.

### Fallback And Supporting Old Browsers

**1. Using CSS** `@support`

Khoảng hai tháng trước, tôi có nhận được 1 tweet nói rằng website của tôi không hoạt động như ý đối với IE11. Sau khi kiểm tra nó, tôi nhận ra mọi thứ thật kì lạ. Mọi nội dung của website đều bị chồng chéo lên khu vực top left. Website của tôi hoàn toàn không sử dụng được!

<img src="https://user-images.githubusercontent.com/15076665/95672559-bf973300-0bdc-11eb-9b14-19245967e0cc.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Đúng vậy, đây là website của tôi - website của một front-end developer, trên IE11. Đầu tiên, tôi đã khá bối rối, tại sao nó lại xảy ra? Tôi nhớ rằng CSS grid được hỗ trợ trên IE11, nhưng đó là version cũ của IE11 được release bởi Microsoft. Giải pháp khá đơn giản, đó là sử dụng `@supports` để chỉ sử dụng CSS grid cho các trình duyệt thế hệ mới.

```css
@supports (grid-area: auto) {
  body {
    display: grid;
  }
}
```

Ở đây tôi sử dụng `grid-area` là bởi vì nó chỉ được hỗ trợ với CSS grid spec mới, từ tháng 3 năm 2017 cho tới nay. Vì IE không hỗ trợ `@supports` query, mọi rule ở trong đây sẽ bị bỏ qua. Như kết quả, CSS grid chỉ được sử dụng bởi các trình duyệt hỗ trợ grid.

**2. Using Flexbox As A Fallback For CSS Grid**

Nếu flexbox không phù hợp cho việc hiển thị grid layout, không có nghĩa là nó không có ý nghĩa cho việc dự phòng. Bạn có thể sử dụng flexbox như là một phương án dự phòng cho CSS grid đối với các trình duyệt không hỗ trợ grid. Tôi có làm một [tool](https://shadeed.github.io/grid-to-flex/) để giải quyết vấn đề này.

```scss
@mixin grid() {
  display: flex;
  flex-wrap: wrap;

  @supports (grid-area: auto) {
    display: grid;
    grid-gap: 16px 16px;
  }
}

@mixin gridAuto() {
  margin-left: -16px;

  > * {
    margin-bottom: 16px;
    margin-left: 16px;
  }

  @media (min-width: 320px) {
    > * {
      width: calc((99% / #{2}) - 16px);
      flex: 0 0 calc((99% / #{2}) - 16px);
    }
  }

  @media (min-width: 768px) {
    > * {
      width: calc((99% / #{3}) - 16px);
      flex: 0 0 calc((99% / #{3}) - 16px);
    }
  }

  @supports (grid-area: auto) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-left: 0;

    > * {
      width: auto;
      margin-left: 0;
      margin-bottom: 0;
    }
  }
}
```

Fallback code hoạt động như sau:
- Thêm `display: flex` và `flex-wrap: wrap` vào wrapper element.
- Kiểm tra CSS grid có được hỗ trợ hay không, nếu có thì `display: grid` sẽ được dùng thay thế.
- Bằng việc sử dụng selector `> *`, chúng ta có thể chọn các child elements trực tiếp của wrapper. Sau đó thêm width, size cho mỗi phần tử.
- Dĩ nhiên, margin giữa các phần từ là cần thiết và sẽ được thay bằng `grid-gap` nếu CSS grid được hỗ trợ.

Đây là ví dụ cho việc sử dụng Sass mixin

```scss
.wrapper {
  @include grid();
  @include gridAuto();
}
```

[Demo](https://codepen.io/shadeed/pen/XWrLmYe)

### When Things Go Wrong For Both Grid And Flexbox

Khi tôi review code cho em trai mình, tôi nhận thấy một vài lỗi khi sử dụng CSS grid hoặc là flexbox, tôi nghĩ rằng nhắc lại chúng là một việc ít nhiều có ý nghĩa ở đây.

**1. Using CSS Grid For A Website Header**

Một trong những động lực cho bài viết này chính là lỗi sử dụng CSS grid cho header. Tôi thấy rằng em trai mình sử dụng CSS grid cho header.

Cậu ấy than phiền rằng "nó quá phức tạp, css grid thật khó, ...". Với kết quả của việc sử dụng sai layout method, cậu ta thấy rằng CSS grid rất phức tạp. Thực sự thì nó không hề, mọi sự bối rối của cậu ấy đến từ việc sử dụng CSS grid một cách thiếu chính xác.

Cùng xem xét ví dụ đưới đây:

<img src="https://user-images.githubusercontent.com/15076665/95673493-e311ac00-0be3-11eb-8c27-0dfe964819c8.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

```css
.site-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.site-nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

CSS grid was used twice, the first time is for the whole header, and the second one is for the navigation. He used grid-column to fine-tune the spacing between the elements, and other weird things that I can’t remember, but you got the point!

CSS grid được sử dụng 2 lần, lần đầu tiên là cho toàn bộ header, lần thứ hai là cho navigation. Cậu ta sử dụng `grid-column` để chỉnh khoảng cách giữa các elements, và một vài thứ kì lạ khác mà tôi không thể nhớ, bạn cũng nên chú ý về điều này!

**2. Using CSS Grid For Tabs**

Another incorrect usage for CSS grid is applying it on a tabs component. Consider the following mockup.

Một lỗi sai khác khi sử dụng CSS grid đó là áp dụng nó cho tabs component. Xem ví dụ sau:

<img src="https://user-images.githubusercontent.com/15076665/95673802-f96d3700-0be6-11eb-9954-5c7263457cbd.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Code CSS cho phần trên như sau:

```css
.tabs-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Từ đoạn code trên, tôi thấy rằng người code gỉa sử tabs count chỉ có 3, anh ấy đã dùng `1fr 1fr 1fr` cho layout columns. Đoạn code này có thể bị lỗi nếu số lượng cột thay đổi.

**3. Overusing Flexbox Or Grid**

Hãy nhớ rằng, layout kiểu cũ có thể hữu ích cho bạn. Lạm dụng flexbox hoặc grid có thể tăng độ phức tạp cho code CSS của bạn theo thời gian. Tôi không có ý là CSS grid hay flexbox phức tạp, nhưng sử dụng chúng **đúng cách** trong **đúng ngữ cảnh** như đã nói ở trên thì sẽ tốt hơn.

Ví dụ, bạn có hero section như dưới đây với yêu cầu căn giữa theo chiều ngang toàn bộ nội dung của nó.

<img src="https://user-images.githubusercontent.com/15076665/95674115-0ee36080-0be9-11eb-92d0-f1d781318480.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*

Sử dụng `text-align: center` là có thể giải quết được vấn đề. Vậy tại sao sử dụng lại phải sử dụng flexbox ở đây?

### Conclusion

Phù, đó là tất cả những gì về sự khác biệt khi sử dụng CSS grid và flexbox. Chủ đề này tôi đã quan tâm từ rất lâu, và tôi thấy thật vui khi có cơ hội viết về nó. Đừng ngại khi gửi những phản hồi của bạn bằng email hoặc twitter [@shadeed9](https://twitter.com/shadeed9) cho tôi nhé!

Cảm ơn vì đã đọc.
