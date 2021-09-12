### Chương 8: Chia nhỏ các biểu thức cồng kềnh

Loài mực ống là một loài động vật thông minh và khá thú vị, chúng có một cơ thể hoàn chỉnh ngoại trừ một điểm yếu duy nhất: bộ não có hình bánh rán bao quanh thực quản, khiến chúng mỗi khi nuốt thức ăn sẽ làm ảnh hưởng đến bộ não của mình.

Liên hệ với code, một "đoạn" code quá dài sẽ gây ra những hiệu ứng không đáng có. Nghiên cứu chỉ ra rằng bộ não chỉ có thể xử lí 3, 4 yếu tố cùng một lúc. Vậy nên code càng dài sẽ càng khó cho người đọc có thể hiểu được nội dung của đoạn code đó.

> Hãy chia nhỏ đoạn code của bạn thành những đoạn code nhỏ, dễ đọc hơn

#### Explaining variables

Cách đơn giản nhất đó là sử dụng các biến để gán cho các biểu thức con.
Các biến này còn được gọi là "explaining variable" vì chúng giúp giải thích ý nghĩa của biểu thức con.

VD:

```ts
// before

if (line.split(':')[0].strip() === 'root') {}

// after
const userName = line.split(':')[0].strip();

if (userName === 'root') {}
```

#### Summary variables

Ngay cả khi không cần thiết phải giải thích ý nghĩa của biểu thức con (vì bạn có thể hiểu được ngay ý nghĩa của nó) thì việc thay thế biểu thức con bằng các biến số giúp cho việc quản lí code dễ dàng hơn, lúc này các biến thay thế sẽ được gọi là **Summary variable**

VD:

```ts
if (request.user.id === document.owner_id) {
  // user can edit this document...
}

if (request.user.id !== document.owner_id) {
  // document is read-only...
}
```

Biểu thức `request.user.id != document.owner_id` không dài nhưng lại có tới 5 biến số, điều này sẽ làm cho người đọc tốn một chút thời gian để nghĩ về nó.

Mục đích chính của biểu thức này là "kiểm tra xem, liệu user có phải là chủ nhân của document" hay không?

Mục đích trên có thể được thể hiện một cách rõ ràng hơn thông qua một **summary variable** như sau:

```ts
const userOwnsDocument = request.user.id === document.owner_id

if (userOwnsDocument) {
  // user can edit this document...
}

if (!userOwnsDocument) {
  // document is read-only...
}
```

Việc đọc biểu thức điều kiện `if(userOwnsDocument)` như trên sẽ dễ dàng hơn rất nhiều.

#### Sử dụng luật De-Morgan

Với luật này ta có thể biến đổi các biểu thức logic sao cho dễ đọc hơn như sau:

```ts
// before
if (!(file_exists && !is_protected)) Error("Sorry, could not read file.");

// after
if (!file_exists ||!is_protected) Error("Sorry, could not read file.");
```

#### Lạm dụng các biểu thức logic ngắn

Trong các ngôn ngữ lập trình, toán tử logic sẽ thực thi các đáng giá logic ngắn. Ví dụ với biểu thức `if(a | b)` thì giá trị của `b` sẽ không được xem xét nếu giá trị của `a` là `true`. Điều này khá hữu ích tuy nhiên nó cũng hay bị lạm dụng trong các biểu thức phức tạp hơn.

VD:

```c#
assert((!(bucket = FindBucket(key))) || !bucket->IsOccupied());
```

Đoạn code trên có ý nghĩa như sau: tìm `bucket` ứng với `key`, nếu có thì kiểm tra xem nó có bị chiếm giữ (`!bucket->IsOccupied()`) hay không.

Tuy chỉ có một dòng nhưng việc đọc biểu thức này lại khá tốn thời gian. Trái lại, nếu viết như sau:

```c#
bucket = FindBucket(key);
if (bucket != NULL) assert(!bucket->IsOccupied());
```

Với ý nghĩa hoàn toàn tương tự, dù được viết trên 2 dòng thế nhưng đoạn code này lại dễ hiểu hơn rất nhiều.

Vậy tại sao lại có những "đoạn code 1 dòng" như vậy? Viết như vậy trông "ngầu" hơn rất nhiều, đồng thời khiến cho việc đọc code cũng cần "dùng đến não" nhiều hơn. Thế nhưng nó lại khiến cho tốc độ đọc code bị ảnh hưởng đáng kể.

> Cảnh giác với những đoạn code thông minh - Chúng có thể khiến người đọc cảm thấy khó hiểu

Điều này không có nghĩa là chúng ta nên "đoạn tuyệt" với các biểu thức như vậy, trong một số trường hợp chúng vẫn phát huy tác dụng:

```ts
  if (object && object.method()) {}
```

#### Ví dụ: Chiến đấu với các logic phức tạp

Xét ví dụ sau về `Range`

```c#
struct Range {
  int begin;
  int end;
  // For example, [0,5) overlaps with [3,8)
  bool OverlapsWith(Range other);
};
```

Minh hoạ cho khái niệm `overlap`.

<img src="https://user-images.githubusercontent.com/15076665/131236704-cf5f608f-191f-4a08-9fa9-17d0384dbd56.png">

Dưới đây là 1 implement cho hàm `OverlapsWith`

```c#
bool Range::OverlapsWith(Range other) {
  return (begin >= other.begin && begin <= other.end) ||
  (end >= other.begin && end <= other.end);
}
```

Tuy chỉ có 2 dòng code, nhưng lại có khá nhiều trường hợp cần phải xem xét như dưới đây. Từ đó dễ dẫn đến bug và bỏ sót một vài trường hợp. Ví dụ như [0, 2) không hề overlap với [2, 4)

<img src="https://user-images.githubusercontent.com/15076665/131236800-c6886a45-edc5-4eb7-a596-4386eb95f391.png">

Bản fix hoàn chỉnh

```c#
return (begin >= other.begin && begin < other.end)
  || (end > other.begin && end <= other.end)
  || (begin <= other.begin && end >= other.end);
```

Đoạn code này khá phức tạp, vậy làm thế nào để "chia nhỏ" nó đây ?

#### Tìm cách tiếp cận tốt hơn

Có một cách tiếp cận thú vị hơn đó là "đi ngược" lại so với cách tiếp cận cũ. Tuỳ vào tình huống bạn gặp phải, có thể nó sẽ là duyệt mảng theo thứ tự ngược.

Ở đây, ngược lại với `OverlapsWith` đó là `un-overlap`. Việc chỉ ra 2 range không overlap sẽ đơn giản hơn nhiều vì chỉ có 2 khả năng:
1. End của range 1 < Begin của range 2
2. Có một range bắt đầu sau khi một range kết thúc

```c#
bool Range::OverlapsWith(Range other) {
  if (other.end <= begin) return false;  // They end before we begin
  if (other.begin >= end) return false;  // They begin after we end
  return true;  // Only possibility left: they overlap
}
```

Mỗi dòng code ở đây đều đơn giản hơn rất nhiều, giúp người đọc dễ dàng hơn trong quá trình đọc hiểu của mình.

#### Chia nhỏ các statements lớn

```js
var update_highlight = function (message_num) {
  if ($("#vote_value" + message_num).html() === "Up") {
    $("#thumbs_up" + message_num).addClass("highlighted");
    $("#thumbs_down" + message_num).removeClass("highlighted");
  } else if ($("#vote_value" + message_num).html() === "Down") {
    $("#thumbs_up" + message_num).removeClass("highlighted");
    $("#thumbs_down" + message_num).addClass("highlighted");
  } else {
    $("#thumbs_up" + message_num).removeClass("highighted");
    $("#thumbs_down" + message_num).removeClass("highlighted");
  }
};
```

Các biểu thức ở đoạn code trên, tuy không dài nhưng số lượng lại nhiều nên vô tình chúng sẽ tạo nên "một biểu thức" lớn.

```js
var update_highlight = function (message_num) {
  var thumbs_up = $("#thumbs_up" + message_num);
  var thumbs_down = $("#thumbs_down" + message_num);
  var vote_value = $("#vote_value" + message_num).html();
  var hi = "highlighted";

  if (vote_value === "Up") {
    thumbs_up.addClass(hi);
    thumbs_down.removeClass(hi);
  } else if (vote_value === "Down") {
    thumbs_up.removeClass(hi);
    thumbs_down.addClass(hi);
  } else {
    thumbs_up.removeClass(hi);
    thumbs_down.removeClass(hi);
  }
};
```

Sử dụng các summary variables sẽ giúp các biểu thức bớt cồng kềnh hơn, ngoài ra các biểu thức này có chung một cấu trúc, việc sử dụng summary variable sẽ giúp code của bạn tuân thủ nguyên tắc DRY (Don't repeate yourself).

Ngoài ra còn một số lợi ích như:
- Tránh lỗi khi gõ.
- Thu nhỏ độ dài của dòng code, code sẽ dễ đọc hơn.
- Nếu cần thay đổi giá trị thì chỉ cần sửa ở một chỗ là xong.

#### Một cách thức sáng tạo khác cho việc đơn giản hoá các biểu thức

```c++
void AddStats(const Stats& add_from, Stats* add_to) {
  add_to->set_total_memory(add_from.total_memory() + add_to->total_memory());
  add_to->set_free_memory(add_from.free_memory() + add_to->free_memory());
  add_to->set_swap_memory(add_from.swap_memory() + add_to->swap_memory());
  add_to->set_status_string(add_from.status_string() + add_to->status_string());
  add_to->set_num_processes(add_from.num_processes() + add_to->num_processes());
}
```

Mỗi một dòng là một cụm xử lí khá phức tạp. Sau khi quan sát tầm 10s, ta sẽ thấy các dòng code có cấu trúc tương tự nhau, chỉ khác nhau ở đối tượng tác động. Các dòng code đều có format như sau

```c++
  add_to->set_XXX(add_from.XXX() + add_to->XXX());
```

Trong C++, ta có thể định nghĩa các macro để rút gọn code

```c++
void AddStats(const Stats& add_from, Stats* add_to) {
  #define ADD_FIELD(field) add_to->set_##field(add_from.field() + add_to->field())
  ADD_FIELD(total_memory);
  ADD_FIELD(free_memory);
  ADD_FIELD(swap_memory);
  ADD_FIELD(status_string);
  ADD_FIELD(num_processes);

  #undef ADD_FIELD
}
```

#### Tổng kết

Kĩ thuật sử dụng *explaining variable* có 3 lợi điểm sau:
- Rút gọn các biểu thức cồng kềnh.
- Như một cách giải thích code (tên biến sẽ nêu ý nghĩa của biểu thức con).
- Giúp người đọc dễ dàng nhận ra concept chính của code.
