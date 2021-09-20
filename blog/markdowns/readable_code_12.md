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

### Áp dụng phương thức hiện tại cho vấn đề lớn hơn

Phương thức này sẽ giúp chúng ta chỉ ra các vấn đề hiện có để từ đó có thể chia nhỏ vấn đề to thành các vấn đề nhỏ hơn.

Giả sử chúng ta có hệ thống quản lí các giao dịch cổ phiếu. Mỗi một giao dịch sẽ có 4 trường dữ liệu:
- `time`: thời điểm diễn ra giao dịch
- `ticket_symbol`: VD - GOOG
- `price`: 600$
- `number_of_shares`: 100

Vì một lí do nào đó, dữ liệu nằm rải rác ở 3 bảng khác nhau như hình minh hoạ dưới đây

<img width="720" src="https://user-images.githubusercontent.com/15076665/133950103-c31c4815-4e81-4899-a443-590e9899cd5a.png">

Nhiệm vụ ở đây đó là join các dòng có cùng `time` lại với nhau (tương tự như lệnh `join` trong SQL), tuy nhiên vẫn có những trường hợp bị thiếu dòng (với những trường hợp này ta sẽ tiến hành bỏ qua).

Dưới đây là code viết bằng Python để giải quyết task trên:

```Python
def PrintStockTransactions():
  stock_iter = db_read("SELECT time, ticker_symbol FROM ...")
  price_iter = ...
  num_shares_iter = ...
  # Iterate through all the rows of the 3 tables in parallel. while stock_iter and price_iter and num_shares_iter:
  stock_time = stock_iter.time
  price_time = price_iter.time
  num_shares_time = num_shares_iter.time
  # If all 3 rows don't have the same time, skip over the oldest row
  # Note: the "<=" below can't just be "<" in case there are 2 tied-oldest.
  if stock_time != price_time or stock_time != num_shares_time:
    if stock_time <= price_time and stock_time <= num_shares_time:
      stock_iter.NextRow()
    elif price_time <= stock_time and price_time <= num_shares_time:
      price_iter.NextRow()
    elif num_shares_time <= stock_time and num_shares_time <= price_time:
      num_shares_iter.NextRow()
    else:
      assert False  # impossible
    continue
  assert stock_time == price_time == num_shares_time

  # Print the aligned rows.
  print "@", stock_time,
  print stock_iter.ticker_symbol,
  print price_iter.price,
  print num_shares_iter.number_of_shares

  stock_iter.NextRow()
  price_iter.NextRow()
  num_shares_iter.NextRow()
```

Đoạn code này hoạt động đúng nhưng trong đầu bạn ắt hẳn sẽ có câu hỏi *Liệu có trường hợp nào bị bỏ sót hay không?* - nguyên nhân là do phần xử lí những dòng không match vẫn chưa được rõ ràng.

### Mô tả chi tiết cho giải pháp

Chúng ta hãy cùng mô tả những gì sẽ làm:
1. Đọc song song 3 row iterators.
2. Khi row không match, tiếp tục di chuyển để tìm row match.
3. In ra các rows match, tiếp tục di chuyển.
4. Tiếp tục như vậy cho đến khi không còn row nào nữa.

Phần code phức tạp nhất nằm ở chỗ xử lí "di chuyển để tìm row match", chúng ta sẽ tách phần này ra thành một hàm riêng **AdvanceToMatchingTime()**

Đây là phiên bản "dễ đọc hơn"

```Python
def PrintStockTransactions():
  stock_iter = ...
  price_iter = ...
  num_shares_iter = ...

  while True:
  time = AdvanceToMatchingTime(stock_iter, price_iter, num_shares_iter)
  
  if time is None:
    return

  # Print the aligned rows.
  print "@", time,
  print stock_iter.ticker_symbol,
  print price_iter.price,
  print num_shares_iter.number_of_shares

  stock_iter.NextRow()
  price_iter.NextRow()
  num_shares_iter.NextRow()
```

Việc tách phần xử lí phức tạp ra một hàm khác giúp code "sạch sẽ" và dễ đọc hơn rất nhiều.

### Áp dụng phương thức một cách đệ quy

Để dễ hình dung thì logic của hàm `AdvanceToMatchingTime` giống hệt phần xử lí ban đầu

Tuy nhiên ta hoàn toàn có thể cải thiện nó. Đầu tiên hãy liệt kê những gì hàm cần làm:
- Kiểm tra giá trị `time` của mỗi row, nếu match -> OK
- Ngược lại, bỏ qua các dòng có `time` chậm hơn
- Tiếp tục như vậy cho đến khi match

Phần mô tả không hề nhắc gì tới `stock_iter` vậy nên ta cũng có thể sửa lại tên cho các biến.

```Python
def AdvanceToMatchingTime(row_iter1, row_iter2, row_iter3):
  while row_iter1 and row_iter2 and row_iter3:
    t1 = row_iter1.time
    t2 = row_iter2.time
    t3 = row_iter3.time
    if t1 == t2 == t3:
      return t1

    tmax = max(t1, t2, t3)
    # If any row is "behind," advance it.
    # Eventually, this while loop will align them all.

    if t1 < tmax: row_iter1.NextRow()
    if t2 < tmax: row_iter2.NextRow()
    if t3 < tmax: row_iter3.NextRow()
  return None  # no alignment could be found
```

Code đã đễ đọc hơn rất nhiều, việc sử dụng tên biến ngắn như `t1` giúp cho người đọc không phải nghĩ quá nhiều về columns trong database được sử dụng.

### Tổng kết

Việc diễn giải vấn đề thành ngôn ngữ đời thường sẽ giúp bạn hiểu rõ vấn đề đang gặp phải để từ đó có thể giải quyết từng vấn đề con trong nó.

Điều này tương tự việc giải thích vấn đề của bạn cho một con gấu bông vô tri vô giác, vậy nên phương pháp rất đơn giản nhưng lại vô cùng hiệu quả này còn có tên gọi là "vịt cao su".
