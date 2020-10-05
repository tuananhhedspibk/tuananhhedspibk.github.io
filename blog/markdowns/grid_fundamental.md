## Grid căn bản

> Banner được lấy từ [nguồn](https://xd.adobe.com/ideas/principles/web-design/benefits-css-grid-layout-web-design/)

※ Tham khảo từ các nguồn:
- https://ishadeed.com/article/learn-box-alignment/
- https://ehkoo.com/bai-viet/can-ban-css-grid-phan-1
- https://ehkoo.com/bai-viet/can-ban-css-grid-phan-2

### Sơ lược về grid

- Là một layout ở dạng lưới
- Trong grid ta có hai chiều (axes): `inline` và `block`

<img src="https://user-images.githubusercontent.com/15076665/95078443-1e2d5e80-0750-11eb-8427-fb427a116560.png" width="360">

*Ảnh lấy từ [nguồn](https://ishadeed.com/article/learn-box-alignment/)*

### Grid alignment

- Grid items được căn gióng (align) dựa theo `Grid Container` hoặc `Grid Area`
- Ở ảnh bên dưới `Grid Container` là toàn bộ khung hùng, `Grid Area` là vùng được highlight.

<img src="https://user-images.githubusercontent.com/15076665/95079593-cdb70080-0751-11eb-9e81-a1c4737b2f1f.png" width="360">

*Ảnh lấy từ [nguồn](https://ishadeed.com/article/learn-box-alignment/)*

### Tạo một Grid

```html
  <div class="wrapper">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
  </div>
```

*Code được tham khảo từ [nguồn](https://ehkoo.com/bai-viet/can-ban-css-grid-phan-1)*

Ở đây wrapper sẽ đóng vai trò như `Grid Container`, chỉ cần thay đổi thuộc tính `display` thành `grid` hoặc `inline-grid`, `subgrid` là xong

```css
  .wrapper {
    display: grid;
  }
```

<img width="500" src="https://user-images.githubusercontent.com/15076665/95080606-4b2f4080-0753-11eb-9ede-d8a578b02d2c.png">

*Ảnh lấy từ [nguồn](https://ehkoo.com/bai-viet/can-ban-css-grid-phan-1)*

### Chia cột hàng

Sử dụng thuộc tính `grid-template-columns` và `grid-template-rows` để chia cột và hàng

```CSS
// 3 cột, 2 hàng
// Các giá trị px là tuỳ ý

.wrapper {
  grid-template-columns: 300px 300px 300px; 
  grid-template-rows: 300px 300px
}
```

### Grid gaps

- Khoảng cách giữa các cột gọi là column-gap
- Khoảng cách giữa các hàng gọi là row-gap

Tương ứng là hai thuộc tính `grid-column-gap` và `grid-row-gap` để thay đổi lần lượt các giá trị trên

```CSS
/* 3 cột, 2 hàng */

.wrapper {
  grid-column-gap: 50px; 
  grid-row-gap: 30px;
}


.wrapper {
  grid-gap: 50px 30px; /* <grid-column-gap>, <grid-row-gap> */
}
```