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