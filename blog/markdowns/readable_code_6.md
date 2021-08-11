### Chương 6: Making control flow easy to read

> Hãy viết các vòng lặp, điều kiện rẽ nhánh "tự nhiên" nhất có thể. Hãy viết code sao cho người đọc không phải dừng lại và đọc lại code của bạn

#### The Order of Arguments in Conditionals

Xem xét 2 điều kiện dưới đây

```typescript
if (length >= 10)
```

```typescript
if (10 <= length)
```

Với đa phần lập trình viên, cách viết thứ nhất "quen" và "dễ đọc hơn". Thông thường ở điều kiện, mọi người sẽ viết `a > b` thay vì `b < a`

Điều này khá trùng khớp với văn nói trong tiếng Anh
- Tự nhiên: "if you are at least 18 years old"
- Không tự nhiên: "if 18 years is less than or equal to your age"

#### The Order of if/else Blocks

```typescript
if (a == b) {
  // Case One ...
} else {
  // Case Two ...
}
```

```typescript
if (a != b) {
  // Case Two ...
} else {
  // Case One ...
}
```

Thông thường với if/else block, chúng ta có thể tự do lựa chọn thứ tự cho từng case ứng với mỗi điều kiện

Tuy nhiên cũng có những trường hợp ta nên có sự cân nhắc về tính thứ tự
- Positive case đưa lên trước (khi debug: `if(debug)`)
- Đưa các trường hợp "đơn giản" lên trước (vì đơn giản nên chúng khá ít code) nên ta có thể thấy rõ được cả 2 block if/else trên màn hình cùng một lúc

Ví dự như trường hợp sau, bạn đang có web server cần trả về `response` dựa theo `URL query parameter` là `expand_all`

```typescript
if (!url.HasQueryParameter("expand_all")) {
  response.Render(items);
} else {
  for (int i = 0; i < items.size(); i++) {
    items[i].Expand();
  }
}
```

Khi người đọc thấy `expand_all` họ sẽ lập tức nghĩ ngay đến trường hợp URL chứa `expand_all` (vì nó gợi nên tính tò mò ở người đọc), hơn nữa trường hợp URL chứa `expand_all` cũng là **positive case**. Chính vì thế, đoạn code trên nên được sửa lại như sau:

```typescript
if (url.HasQueryParameter("expand_all")) {
  for (int i = 0; i < items.size(); i++) {
    items[i].Expand();
  }
} else {
  response.Render(items);  
}
```

Ngược lại, có những trường hợp cần đưa các case lỗi ra trước:

```python
if not file:
  # Log the error ...
else:
  # ...
```

#### The ?: Conditional Expression (a.k.a. "Ternary Operator")

Việc sử dụng toán tử 3 ngôi gây ra nhiều ý kiến trái chiều
- Có người cho rằng: việc viết trên một dòng sẽ dễ dàng hơn khi viết trên nhiều dòng
- Có người cho rằng: việc sử dụng toán tử 3 ngôi khiến người đọc khó đọc và không thuật tiện cho việc debug

```typescript
time_str += (hour >= 12) ? "pm" : "am";
```

```typescript
if (hour >= 12) {
  time_str += "pm";
} else {
  time_str += "am";
}
```

Trong trường hợp này sử dụng toán tử 3 ngôi có vẻ hợp lý hơn

```c++
return exponent >= 0 ? mantissa * (1 << exponent) : mantissa / (1 << -exponent);
```

Trong trường hợp này, toán tử 3 ngôi không chỉ đơn thuần là lựa chọn giữa 2 biểu thức đơn giản nữa mà chủ tâm của người viết chính là "ép" mọi thứ vào trong một dòng.

> Thay vì cố gắng giảm số dòng code, hãy cố gắng giảm thời gian mà người đọc cần bỏ ra để hiểu đoạn code mà bạn viết

```c++
if (exponent >= 0) {
  return mantissa * (1 << exponent);
} else {
  return mantissa / (1 << -exponent);
}
```

> Hãy sử dụng if/else. Toán từ 3 ngôi "?" chỉ nên dùng cho những trường hợp đơn giản nhất

#### Avoid do/while Loops

Các ngôn ngữ như C, Perl, ... đều có vòng lặp dạng `do { // code } while (condition)`
VD:

```C
do {
  node = node.next;
} while (node != NULL)
```

Với do/while thì code bên trong `do {}` sẽ được thực thi ít nhất một lần, việc đoạn code đó có được thực thi lại hay không, sẽ phụ thuộc vào điều kiện **bên dưới**. Điều này khá là kì quặc vì thông thường chúng ta sẽ đọc code theo thứ tự từ **trên xuống dưới**, và hầu như chúng ta không đọc lại code lần thứ 2. Việc sử dụng do/while sẽ làm cho quá trình đọc code trở nên mất tự nhiên, vì nó đi ngược lại với logic đọc thông thường (giống như cách mà `for`, `while`, `if` thực hiện)

Vòng lặp while sẽ dễ đọc hơn vì chúng ta sẽ thấy được điều kiện trước khi đọc đoạn code bên trong. Cũng khá may, trong thực tế hầu hết các vòng lặp do/while đều có thể được viết lại dưới dạng vòng lặp while.

#### Returning Early from a Function

Một vài coders nghĩ rằng, không nên có nhiều `return statement` trong một hàm. Điều này hoàn toàn KHÔNG CHÍNH XÁC

VD:

```typescript
const checkString = (str: string): boolean => {
  if (str === null) return false;
  if (str.length === 0) return true;
}
```

#### The Infamous goto

Các ngôn ngữ lập trình hiện đại có nhiều cách xử lí vấn đề nên goto dường như được sử dụng khá ít. Tuy nhiên một số project viết bằng C nổi tiếng như Linux kernel vẫn sử dụng goto.

Trong trường hợp đơn giản nhất, goto sẽ chuyển hướng thực hiện xuống cuối hàm

```C
if (p == NULL) goto exit; 

//
//

exit:
  fclose(f1);
  fclose(f2);
```

Tuy nhiên nếu sử dụng nhiều goto, trong đó sử dụng goto cho mục đích *đi lên* thì code của bạn lúc nãy sẽ giống như những sợi mỳ spaghetti vậy. Thế nên việc sử dụng goto vô tội vạ là một điều cấm kị nếu muốn follow code rõ ràng.

### Minimize Nesting

Các đoạn code lồng nhau quá sâu sẽ dẫn tới khó hiểu. Mỗi một "tầng code" sẽ là một lần người đọc phải nhớ các điều kiện tương ứng. Khi đọc xong một "tầng code" sẽ khá khó để người đọc có thể nhớ lại được điều kiện tương ứng với "tầng" đó là như thế nào.

Dưới đây là một ví dụ khá đơn giản về việc sử dụng double-check condition.

```typescript
if (user_result === SUCCESS) {
  if (permission_result !== SUCCESS) {
     return "permission_error";
  }
  return "";
} else {
  return "user_error";
}

return "done";
```

Đọc đoạn code trên, người đọc sẽ phải luôn ghi nhớ giá trị của `user_result` và `permission_result`. Hơn nữa đoạn code này còn tệ ở chỗ, nó xen kẽ giữa điều kiện `=== SUCCESS` và `!== SUCCESS`

#### How Nesting Accumulates

Ban đầu đoạn code trên khá đơn giản và dễ hiểu

```typescript
if (user_result === SUCCESS) {
  return "";
} else {
  return "user_error";
}

return "done";
```

Khi sửa lại code, người viết code đã thêm vào phần mà anh ta "cảm thấy" là "dễ nhất" để thêm vào

```typescript
if (user_result === SUCCESS) {
  if (permission_result !== SUCCESS) {
     return "permission_error";
  }
  return "";
}
```

Đối với người viết code, sự thay đổi này là khá rõ ràng và nó "hằn sâu" vào suy nghĩ của anh ta. Tuy nhiên với người đọc code lần đầu tiên, khi không hề có context cảm giác sẽ khá mơ hồ.
 
#### Removing Nesting by Returning Early

Đoạn code trên có thể cải thiện bằng cách xử lí trường hợp failed trước, sau đó sẽ trả về trường hợp success (returning early)

```typescript
if (user_result !== SUCCESS) {
  return "user_error";
}

if (permission_result !== SUCCESS) {
  return "permisson_error";
}

return "done";
```

Ngoài việc giảm số tầng code từ 2 xuống 1, đoạn code này cũng giúp người đọc không phải "nhớ" các giá trị của điều kiện quá lâu.

#### Removing Nesting Inside Loops

Kĩ thuật returning early không phải lúc nào cũng phát huy hiệu quả, ví dụ như với các vòng lặp

```typescript
for (let i = 0; i < results.length; i++) {
  if (results[i] !== null) {
    // ...
    if (result[i].name.length > 0) {
      // ...
    }
  }
}
```

Trong tình huống này, ta có thể sử dụng kĩ thuật tương tự như "returning early" đó là "continue"

```typescript
for (let i = 0; i < results.length; i++) {
  if (results[i] === null) continue;
  // ...

  if (result[i].name.length <= 0) continue;
  // ...
}
```

Tuy vậy việc sử dụng continue cũng dễ gây ra sự hiểu nhầm, nó có thể sẽ giống như goto nhưng nếu sử dụng cho từng vòng lặp (mỗi vòng lặp là một scope riêng) thì vẫn có thể chấp nhận được.

#### Can You Follow the Flow of Execution?

Chương này nói về việc viết các flow control cấp thấp (condition, loop). Tuy nhiên bạn cũng nên chú ý về flow cấp cao hơn, cụ thể là từ khi bắt đầu hàm `main()` cho đến các lời gọi hàm kế tiếp và cuối cùng là kết thúc chương trình

### Tổng kết 

Qua chương này bạn có thể thấy rằng, xử lí những trườngh hợp đơn giản trước là một sự lựa chọn đúng đắn. Hãy viết nhiều "linear code" hơn thay vì viết những "nesting code" khiến người đọc phải ghi nhớ nhiều hơn về giá trị của các biến số

Tránh sử dụng goto, do/while loop. Chú ý đến thứ tự sắp xếp điều kiện trong `if statement`, đặt những giá trị `thay đổi` ở `bên trái`, những giá trị `ổn định` hơn ở `bên phải`. Sử dụng toán từ ba ngôi (? :) một cách thực sự hợp lí.
