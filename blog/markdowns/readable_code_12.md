## Chương 12: Biến ý tưởng thành code

Hãy nghĩ rằng code bạn đang viết sẽ là công cụ để truyền tải ý tưởng của bạn đến người đọc, vậy nên hãy viết nó một cách đơn giản nhất bằng "plain English"

Trong chương này, chúng ta hãy cùng nhau tìm hiểu các bước để giúp code của chúng ta thêm rõ ràng hơn:
1. Mô tả những gì mà code sẽ thực hiện bằng ngôn ngữ đời thường.
2. Chú ý đến các keyword trong phần mô tả
3. Viết code đúng theo như mô tả

### Mô tả logic, rõ ràng

Xét đoạn code dưới đây dùng để xác thực người dùng

```PHP
$is_admin = is_admin_request();
if ($document) {
  if (!$is_admin && ($document['username'] != $_SESSION['username'])) {
    return not_authorized();
  }
} else {
  if (!$is_admin) {
    return not_authorized();
  }
}
// continue rendering the page ...
```

Khá nhiều xử lí logic trong đoạn code trên. Đoạn code này hoàn toàn có thể viết một cách đơn giản hơn. Đầu tiên hãy tiến hành mô tả logic cần thực hiện:

```
Có 2 trường hợp người dùng có thể xem document:
1. Là admin
2. Là chủ của document đang được duyệt
Ngoài ra thì không xem được
```

Đây sẽ là đoạn code sau khi được cải thiện

```PHP
if (is_admin_request()) {
  // authorized
} elseif ($document && ($document['username'] == $_SESSION['username'])) {
  // authorized
} else {
  return not_authorized();
}
// continue rendering the page ...
```

Cách viết code như thế này có thể không quen thuộc lắm vì sử dụng `empty if/else block` nhưng code đã đơn giản hơn rất nhiều.

### Hiểu được các tiện ích của thư viện

Giả sử chúng ta có một website hiển thị các tips cho người dùng. Ban đầu, sẽ hiển thị ngẫu nhiên một tip bất kì, nếu người dùng click vào đường link `Show me another tip` thì sẽ chọn tip liền kề sau tip đang được hiển thị

```HTML
<div id="tip-1" class="tip">Tip: Log in to see your past queries.</div>
<div id="tip-2" class="tip">Tip: Click on a picture to see it close up.</div>
```

Ban đầu sẽ chỉ có 1 tip duy nhất được hiển thị, các tips còn lại sẽ được ẩn đi.
Dưới đây sẽ là đoạn code thực thi chức năng "Show me another tip"

```JS
var show_next_tip = function () {
  var num_tips = $('.tip').size();
  var shown_tip = $('.tip:visible');
  var shown_tip_num = Number(shown_tip.attr('id').slice(4));
  if (shown_tip_num === num_tips) {
    $('#tip-1').show();
  } else {
    $('#tip-' + (shown_tip_num + 1)).show();
  }
  shown_tip.hide();
};
```

Đoạn code này khá ổn nhưng vẫn có thể cải thiện nó được. Chúng ta hãy cùng nhau liệt kê ra các tasks cần thực hiện:
1. Tìm tip đang được hiển thị và ẩn nó đi.
2. Tìm tip tiếp theo ngay sau tip hiện tại và hiển thị nó.
3. Nếu đã duyệt qua toàn bộ tips, quay về tip đầu tiên.

```JS
var show_next_tip = function () {
  var cur_tip = $('.tip:visible').hide();         // find the currently visible tip and hide it
  var next_tip = cur_tip.next('.tip');            // find the next tip after it
  if (next_tip.size() === 0) {                    // if we've run out of tips,
    next_tip = $('.tip:first');                   // cycle back to the first tip
  }
  next_tip.show();                                // show the new tip
}; 
```

Logic rõ ràng hơn rất nhiều hơn nữa ta không cần phải trực tiếp chỉnh sửa index của tip đang được hiển thị, ngoài ra việc sử dụng hàm `next()` của jQuery cũng giúp cho việc code thuận tiện hơn rất nhiều.
