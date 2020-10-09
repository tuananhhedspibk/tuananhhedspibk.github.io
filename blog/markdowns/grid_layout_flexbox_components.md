## Grid cho layout, Flexbox cho components

> Bài viết được dịch từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)

※ Ảnh banner được lấy từ [nguồn](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)

※ Bài viết chủ động giữ nguyên các thuật ngữ bằng tiếng Anh

※ Code cũng được tham khảo từ [nguồn](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)

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

1. Main and Sidebar

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

2. Cards Grid

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

3. Section layout

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

1. Website navigation

Khoảng 90% các website navigation sẽ sử dụng `flexbox`. Template chung sẽ là logo bên trái và navigation bên phải

<img src="https://user-images.githubusercontent.com/15076665/95558999-0e649180-0a52-11eb-8065-732bd116fd92.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*


<img src="https://user-images.githubusercontent.com/15076665/95559120-38b64f00-0a52-11eb-848d-ffbcbe3dbb4f.png" width="560">

*Ảnh được lấy từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)*
