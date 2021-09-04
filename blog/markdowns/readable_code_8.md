## Chương 9: Biến và tính dễ đọc

Có 3 vấn đề chính sẽ được đề cập đến trong chương này:

1. Càng nhiều biến thì càng khó theo dõi code.
2. Biến với scope càng lớn thì càng khó theo dõi biến.
3. Biến thay đổi càng nhiều thì càng khó theo dõi giá trị của biến.

### Loại bỏ các biến

Việc loại bỏ các biến "không cần thiết" sẽ giúp code ngắn gọn và dễ đọc hơn.

#### Các biến temp không cần thiết

Xem xét đoạn code dưới đây

```python
now = datetime.datetime.now()
root_message.last_view_time = now
```

Liệu có cần phải giữ lại biến `now` ? Câu trả lời là không, lí do là:

- Nó không chia nhỏ các biểu thức phức tạp.
- Bản thân `datetime.datetime.now()` đã có ý nghĩa rõ ràng.
- Nó chỉ được sử dụng duy nhất một lần, vì vậy nó không làm giảm đi bất kì đoạn code thừa nào.

Nếu bỏ biến `now` thì code sẽ dễ hiểu hơn nhiều:

```python
root_message.last_view_time = datetime.datetime.now()
```

Các biến như biến `now` thường được gọi là "leftover" vì có thể ban đầu chủ ý của người viết đó là sử dụng lại nhiều lần nhưng thực sự nó lại không cần thiết.

#### Loại bỏ các kết quả trung gian

```js
var remove_one = function (array, value_to_remove) {
  var index_to_remove = null;
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value_to_remove) {
      index_to_remove = i;
      break;
    }
  }
  if (index_to_remove !== null) {
    array.splice(index_to_remove, 1);
  }
};
```

Trên đây là ví dụ về một hàm JS loại bỏ đi một giá trị có trong mảng. Biến `index_to_remove` dùng để lưu `index` của phần từ sẽ bị loại bỏ - nó được coi là một kết quả trung gian. Thông thường biến này sẽ bị loại bỏ vì ta có thể trả về kết quả ngay khi có được.

```js
var remove_one = function (array, value_to_remove) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value_to_remove) {
      array.splice(i, 1);
      return;
    }
  }
};
```

Việc trả về kết quả ngay khi có được sẽ cải thiện ít nhiều hiệu năng của code khiến task của chúng ta được thực hiện nhanh nhất có thể.

#### Loại bỏ các biến điều khiển luồng

```js
boolean done = false;

while (/* condition */ && !done) {
  //...
  if (...) {
    done = true;
    continue;
  }
}
```

Đôi khi bạn sẽ thấy những đoạn code kiểu như trên. Biến `done` được gọi là biến điều khiển luồng. Mục đích duy nhất của chúng là chỉ đạo việc thực thi của chương trình, chúng hoàn toàn không hề chứa bất kì dữ liệu thực tế nào. Những biến thế này có thể loại bỏ được nếu chúng ta áp dụng tốt lập trình cấu trúc

```js
while (/* condition */) {
  //...
  if (...) {
    break;
  }
}
```

Với những trường hợp phức tạp hơn khi có các vòng lặp lồng nhau, giải pháp là tách hàm.

### Thu nhỏ scope của biến

Chúng ta thường được khuyên rằng: "Tránh sử dụng các biến global" vì phạm vi của chúng rất rộng và rất khó để kiểm soát giá trị. Đồng thời cũng sẽ dễ dàng gây ra sự xung đột về không gian tên giữa biến local và biến global dẫn đến việc chỉnh sửa nhầm giá trị của biến.

Trên thực tế, điều nên làm đó là "thu nhỏ phạm vi của mọi biến" chứ không riêng gì biến global.

> Hãy làm cho biến của bạn được sử dụng bởi số dòng code ít nhất có thể

Có rất nhiều ngôn ngữ lập trình quy định về phạm vi truy cập của các biến

- Module
- Class
- Block

Điều này là rất tốt vì nó sẽ hạn chế tối đa số lượng các dòng code có thể "nhìn thấy" biến. Tại sao phải làm như vậy? Vì nó giúp người đọc không phải ghi nhớ quá nhiều biến trong đầu.

Nếu bạn giảm được scope cho biến theo bội số của 2 thì số lượng biến trong scope sẽ giảm nửa

Xét ví dụ sau với một class rất dài:

```ts
class LargeClass {
  string str_;

  void Method1() {
    str_ = ...;
    Method2();
  }

  void Method2() {
    // Uses str_
  }
    // Lots of other methods that don't use str_ ...
};
```

Ở một góc độ nào đó các biến như `str_` sẽ được coi là các biến `mini-global`. Với các class lớn thì sẽ khá khó để có thể theo dõi các biến thường xuyên, vậy nên nếu có ít biến `mini-global` thì sẽ tốt hơn:

```ts
class LargeClass {
  void Method1() {
    string str = ...;
    Method2(str);
  }

  void Method2(string str) {
    // Uses str
  }
  // Now other methods can't see str.
};
```

Lúc này `str_` sẽ trở thành biến local.

Một cách khác để hạn chế truy cập đến các thuộc tính của class đó là **triển khai nhiều static methods nhất có thể**. Các static methods là một cách khá ổn để cho người đọc có thể thấy rằng các methods này hoàn toàn tách biệt so với các thuộc tính của class.

Hoặc một cách tiếp cận khác đó là **chia nhỏ các class lớn**. Cách tiếp cận này chỉ có hiệu quả nếu các class con độc lập với nhau, nếu bạn tạo ra các class con gọi đến nhau thì đó là một việc làm vô ích.

Cách tiếp cận tương tự cũng được áp dụng cho các file lớn hoặc các hàm dài. Tuy nhiên nguyên tắc ở đây là các thành phần con phải độc lập với nhau về mặt dữ liệu (biến số).

Tuy nhiên các ngôn ngữ khác nhau lại có các quy định khác nhau về việc hình thành scope

#### If statement Scope trong C++

Xét chương trình C++ sau:

```C++
PaymentInfo* info = database.ReadPaymentInfo();
if (info) {
  cout << "User paid: " << info->amount() << endl;
}
// Many more lines of code below ...
```

Người đọc code sẽ ghi nhớ rằng biến **info** sẽ được tiếp tục sử dụng. Nhưng trong C++ ta có thể tạo ra biến ngay trong biểu thức điều kiện vì biến **info** này chỉ được dùng trong **if statement**

```C++
if (PaymentInfo* info = database.ReadPaymentInfo()) {
  cout << "User paid: " << info->amount() << endl;
}
```

Giờ thì người đọc code hoàn toàn có thể quên đi biến **info** sau khi đọc xong **if scope**

#### Tạo biến private trong Javascript

Giả sử bạn có một biến persistent chỉ được sử dụng bởi một function

```JS
submitted = false; // Note: global variable
var submit_form = function (form_name) {
  if (submitted) {
    return;  // don't double-submit the form
  }
  // ...
  submitted = true;
};
```

Các biến global như biến `submitted` thường sẽ khiến người đọc "sợ" khi đọc phải chúng dù trên thực tế biến này chỉ được sử dụng bởi một function duy nhất nhưng người đọc lại không thể chắc chắn điều đó. Vì trên thực tế các file JS khác có thể sử dụng biến này cho các mục đích khác.

Bạn có thể tránh điều này bằng cách đưa biến `submitted` vào trong một `closure`

```JS
var submit_form = (function () {
  var submitted = false; // Note: can only be accessed by the function below

  return function (form_name) {
    if (submitted) {
      return;  // don't double-submit the form
    }
    // ...
    submitted = true;
  };
}());
```

Cụm ngoặc `()` ở dòng cuối cùng cho thấy hàm sẽ được thực thi ngay tức thì và trả về hàm ở bên trong.

#### Javascript Global Scope

Trong JS nếu bạn không sử dụng từ khoá `var` khi định nghĩa biến, thì biến đó mặc định sẽ là `global variable`.

```HTML
<script>
  var f = function () {
    // DANGER: 'i' is not declared with 'var'!
    for (i = 0; i < 10; i += 1)
      // ...
    };
  f();
</script>

<script>
  alert(i); // Alerts '10'. 'i' is a global variable!
</script>
```

Rất nhiều lập trình viên không để ý tới điều này, từ đó dẫn đến những bugs không đáng có. Ví dụ hai functions định nghĩa local variable nhưng không dùng `var`, khi thực thi thì vô tình hai functions này sẽ "nói chuyện với nhau". Các lập trình viên thiếu kinh nghiệm sẽ nghĩ rằng vấn đề nằm ở máy tính hoặc RAM.

Vậy nên một "best practice" trong JS đó là **luôn sử dụng từ khoá var khi định nghĩa biến**. Việc làm này sẽ giới hạn scope của biến nằm trong hàm xâu nhất (nơi mà biến được định nghĩa).

#### Không hề có scope lồng nhau trong Javascript và Python