## Flexbox căn bản

> Banner được lấy từ [nguồn](https://codeburst.io/flexbox-getting-started-part-1-2-2e101815d405)

※ Code và nội dung được tham khảo từ nguồn:
- https://ishadeed.com/article/learn-box-alignment/

### Định nghĩa

Flexbox là một `single layout direction`, mọi items trong nó đều được căn gióng theo `hàng` hoặc `cột` (mặc định được căn theo `hàng`)

Xét ví dụ dưới đây:

```html
<div class="wrapper">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
</div>
```

Vì `div` thuộc lớp `block-item` nên mỗi item sẽ có một dòng riêng, và kết quả sẽ trông như thế này:

<img src="https://user-images.githubusercontent.com/15076665/95434942-de9f8600-098c-11eb-90ed-239235f23b9d.png" width="480">

Nếu sử dụng `flexbox`

```css
.wrapper {
  display: flex;
}
```

Kết quả sẽ trông như thế này:

<img src="https://user-images.githubusercontent.com/15076665/95435059-0d1d6100-098d-11eb-8fe3-6742043c9cde.png" width="480">

Sử dụng flex sẽ dồn các items vào chung một dòng.

### Flexbox Axes
- Trong flexbox ta có 2 axes: `main-axis` và `cross-axis`
- Mặc định thì `main-axis` là trục hoành, `cross-axis` sẽ là trục tung (lúc này giá trị của `flex-direction` mặc định là `row`)

<img src="https://user-images.githubusercontent.com/15076665/95435349-6f766180-098d-11eb-97db-d3fcb8c6d17a.png" width="480">

*Ảnh lấy từ [nguồn](https://ishadeed.com/article/learn-box-alignment/)*

VD: Nếu giá trị của `flex-direction` là `column`, ta sẽ có kết quả như sau:

```css
.wrapper {
  display: flex;
  flex-direction: column;
}
```

<img src="https://user-images.githubusercontent.com/15076665/95456035-ac505180-09a9-11eb-9031-530c4fb8848a.png" width="480">

Lúc này `main-axis` là trục tung, `cross-axis` là trục hoành.

### Flex-Wrap

- Một cách mặc định, flexbox sẽ không đẩy các items của nó xuống dòng mới khi dòng hiện tại đã hết không gian
- Để thay đổi ta có thể sử dụng thuộc tính `flex-wrap` với giá trị `wrap`

VD: Nếu thay đổi chiều rộng của mỗi item lên `50%`

```css
.item {
  width: 50%;
}
```

Và kết quả thu được là:

<img src="https://user-images.githubusercontent.com/15076665/95456433-43b5a480-09aa-11eb-8326-7d4eb26c1310.png" width="480">

Ta thấy rằng mỗi item chỉ chiếm `25%` độ dài, nếu thuộc tính `flex-wrap` được thiết lập giá trị `wrap`, kết quả sẽ thay đổi như sau:

<img src="https://user-images.githubusercontent.com/15076665/95456639-9abb7980-09aa-11eb-89a4-f24d37873fd3.png" width="480">

Các trị khác của `flex-wrap` là:
- `no-wrap`: mặc định - không đẩy phần tử xuống dòng mới
- `wrap-reverse`: đẩy phần tử, nhưng theo thứ tự ngược lại

VD: Với `wrap-reverse`

<img src="https://user-images.githubusercontent.com/15076665/95456718-b58dee00-09aa-11eb-9968-7775bd2623d4.png" width="480">

> Mặc định thì mọi item trong flexbox sẽ được stretch theo cross-axis

※ Nguyên nhân là do mặc định `align-items` có giá trị `stretch` theo `cross-axis`

Nên các items sẽ chiếm toàn bộ chiều dọc của container chứa nó

<img src="https://user-images.githubusercontent.com/15076665/95457413-d60a7800-09ab-11eb-8d48-3e7c7ce0096b.png" width="480">

- Nếu items có chiều rộng cố định (với điều kiện không chiếm hết toàn bộ container) sẽ xảy ra tình trạng xuất hiện các khoảng cách giữa các dòng

<img src="https://user-images.githubusercontent.com/15076665/95458953-e15ea300-09ad-11eb-8525-d3547ff47572.png" width="480">

### Căn lề cho items

- `align-content` và `justify-content` sẽ được sử dụng lần lượt cho trục tung và trục hoành (một cách mặc định) - chỉ phát huy tác dụng khi items không chiếm hết container và `flex-wrap` có giá trị `wrap` hoặc `wrap-reverse` (tức là khi có sự ngắt dòng)

VD:

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
}
```

Ta sẽ có kết quả như sau:

<img src="https://user-images.githubusercontent.com/15076665/95462181-2389e380-09b2-11eb-8f13-9be9cf615692.png" width="480">

※ Các giá trị và minh hoạ có thể tham khảo tại [đây](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Với `justify-content`

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

<img src="https://user-images.githubusercontent.com/15076665/95462437-782d5e80-09b2-11eb-82de-57075d1cff64.png" width="480">

※ Các giá trị và minh hoạ có thể tham khảo tại [đây](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Với `align-items` (phát huy tác dụng cho `cross-axis`)

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
```

Ta có kết quả như sau:

<img src="https://user-images.githubusercontent.com/15076665/95462952-29cc8f80-09b3-11eb-8ca8-6a5835937d7c.png" width="480">

※ Các giá trị và minh hoạ có thể tham khảo tại [đây](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Ta sử dụng `align-self` để căn lề cho từng item một

```css
.item1 {
  align-self: start;
}

.item4 {
  align-self: end;
}
```

Ta có kết quả như sau:

<img src="https://user-images.githubusercontent.com/15076665/95463685-048c5100-09b4-11eb-82d6-a1a807acdbac.png" width="480">

※ Các giá trị và minh hoạ có thể tham khảo tại [đây](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
