## Chương 11: Một tác vụ tại một thời điểm

Những đoạn code làm nhiều việc cùng một lúc thường khá khó để đọc hiểu, ví dụ như thực hiện
- Parse input
- Convert object
- Trả ra output

cùng một lúc sẽ khó theo dõi hơn nhiều so với việc thực hiện từng task riêng.

> Code nên được tổ chức để chúng chỉ thực hiện một tác vụ tại một thời điểm. Hình vẽ dưới đây sẽ minh hoạ cho quá trình "defragment" code của bạn

![スクリーンショット 2021-09-10 19 02 51](https://user-images.githubusercontent.com/15076665/132837206-4b7dcd37-ef50-489b-a1e3-3d652d22a22f.png)

Bạn thường nhận được lời khuyên đó là "một hàm chỉ làm một nhiệm vụ duy nhất". Ở đây cũng vậy, việc chia nhỏ một hàm là rất tốt tuy nhiên nếu trong một hàm lớn mà ta biết cách tổ chức, phân tách code thì việc giữ nguyên một hàm lớn cũng không phải là một điều gì đó quá tệ.

Dưới đây là cách chúng tôi thường làm để phân tách code trong một hàm:

1. Liệt kê các tasks mà hàm thực hiện. Sử dụng từ task ở đây cũng không hẳn đã đúng vì nó có thể nhỏ tới mức "validate object" hoặc lớn đến mức "duyệt toàn bộ node của một cây".
2. Chia các tasks này ra nhiều nhất có thể thành các hàm riêng hoặc thành các sections code khác nhau.

### Các task có thể nhỏ

Giả sử ta có một hệ thống vote các comment với "Up Vote" tương đương với +1 điểm, "Down Vote" tương đương với -1 điểm.

![Screen Shot 2021-09-12 at 15 41 19](https://user-images.githubusercontent.com/15076665/132976548-a5a3dfed-9cea-409f-b6d7-477ec9bcf9d5.png)

Khi user click vào một trong số các button thì hàm sau sẽ được gọi

```JS
vote_changed(old_vote, new_vote);  // each vote is "Up", "Down", or ""
```

Hàm này sẽ update score và làm việc với mọi trường hợp của `old_vote/new_vote`

```JS
var vote_changed = function (old_vote, new_vote) {
  var score = get_score();
  if (new_vote !== old_vote) {
    if (new_vote === 'Up') {
      score += (old_vote === 'Down' ? 2 : 1);
    } else if (new_vote === 'Down') {
      score -= (old_vote === 'Up' ? 2 : 1);
    } else if (new_vote === '') {
      score += (old_vote === 'Up' ? -1 : 1);
    }
  }
  set_score(score);
};
```

Hàm này khá là gọn nhưng nó lại thực hiện quá nhiều tasks một lúc. Sẽ rất khó để phát hiện bug, lỗi typo khi chỉ nhìn lướt qua.

Code tưởng chừng như chỉ làm một việc đó là cập nhật score nhưng trên thực tế nó thực hiện 2 công việc như sau:
- Parse giá trị của `old_value` & `new_value` thành các giá trị số
- Cập nhật score

Chúng ta có thể giúp cho đoạn code trở nên dễ hiểu hơn bằng việc viết solution cho từng task một cách riêng rẽ. Ví dụ với task đầu tiên "Parse giá trị của `new_value` & `old_value`".

```JS
var vote_value = function (vote) {
  if (vote === 'Up') {
    return +1;
  }
  if (vote === 'Down') {
    return -1;
  }
  return 0;
};
```

Và phần còn lại của code sẽ giải quyết task thứ 2:

```JS
var vote_changed = function (old_vote, new_vote) {
  var score = get_score();
  score -= vote_value(old_vote);  // remove the old vote
  score += vote_value(new_vote);  // add the new vote
  set_score(score);
};
```

### Bóc tách các giá trị từ Object
