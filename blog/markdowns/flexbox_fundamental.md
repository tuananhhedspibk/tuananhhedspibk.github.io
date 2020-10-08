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
- Mặc định thì `main-axis` là trục hoành, `cross-axis` sẽ là trục tung

<img src="https://user-images.githubusercontent.com/15076665/95435349-6f766180-098d-11eb-97db-d3fcb8c6d17a.png" width="480">

*Ảnh lấy từ [nguồn](https://ishadeed.com/article/learn-box-alignment/)*
