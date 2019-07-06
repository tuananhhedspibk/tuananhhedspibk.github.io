## Readable Code

Dịch tóm tắt từ sách [Readable code - bản tiếng Nhật](https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-%E2%80%95%E3%82%88%E3%82%8A%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E5%AE%9F%E8%B7%B5%E7%9A%84%E3%81%AA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-Theory-practice-Boswell/dp/4873115655/ref=sr_1_1?adgrpid=52747835709&gclid=CjwKCAjwr8zoBRA0EiwANmvpYCH2NZYfDkMnd-j8zdh50wzDEnLTtAavPnsRYb6wsturOpgWvw0EwxoCN0EQAvD_BwE&hvadid=338541255723&hvdev=c&hvlocphy=1009309&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=6448826365599410260&hvtargid=aud-762433167318%3Akwd-334307148361&hydadcr=16038_11170847&jp-ad-ap=0&keywords=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89&qid=1561602682&s=gateway&sr=8-1)

### Chương 1: Code dễ hiểu

> Key: Viết code phải sao cho dễ hiểu

### 1.1. Thế nào là **code tốt**

Ta xét 2 ví dụ sau:

VD1:
```C++
return exponent >= 0 ? mantissa * (1 << exponent) : mantissa / (1 << -exponent)
```

VD2:
```C++
if (exponent >= 0) {
    return mantissa * (1 << exponent);
} else {
    return mantissa / (1 << -exponent);
}
```

Code ở ví dụ 1 khá là đơn giản, nhưng code ở ví dụ 2 lại đem đến cảm giác **yên tâm** (có thể hiểu theo nghĩa là **dễ đọc, dễ hiểu**) hơn cho người đọc. Giữa **đơn giản** và **yên tâm** yếu tố nào là quan trọng hơn?

### 1.2. Định lí cơ bản về việc code dễ đọc

> Key: Code sao cho người khác chỉ mất một khoảng thời gian ngắn cũng có thể đọc hiểu

Cần tính toán khoảng thời gian mà người khác sẽ mất khi đọc code của mình, chúng ta cần cố gắng giảm thiểu tối đa khoảng thời gian này

**Hiểu code** ở đây được hiểu theo nghĩa là **có khả năng** thay đổi được code, tìm được bug.

`Để người khác đọc hiểu code` - cụm từ **người khác** ở đây có thể hiểu theo nghĩa là **chính bản thân mình** sau 6 tháng không đọc code. Có thể sẽ có những **modules** sẽ được sử dụng cho các project khác, nên việc viết code để **người khác** hiểu là vô cùng quan trọng.

### 1.3. Liệu ngắn có hẳn là tốt ?

Có thể thấy rõ ràng thời gian để đọc một class có 2000 dòng code là ngắn hơn so với thời gian đọc một class có 5000 dòng code.

Nhưng như ở [ví dụ ở phần 1.1](#11thế-nào-là-code-tốt) code ngắn đôi khi tốn thời gian để hiểu hơn là code dài.

Việc thêm comment có thể khiến code dài hơn, nhưng lại dễ hiểu hơn nhiều

Ví dụ:
```C++
//"hash = (65599 * hash) + c" - high speed version
hash = (hash << 6) + (hash << 16) - hash + c;
```

Việc viết code để tiết kiệm thời gian đọc hiểu quan trọng hơn việc viết code ngắn.

### 1.4. [Thời gian đọc hiểu code] là một sự mâu thuẫn?

[Chúng ta có thể thấy còn có những yếu tố khác cũng quan trọng như: code có hiệu năng cao hay không ?, test có dễ hay không ?]

Thực tế thì việc viết code dễ hiểu không hề cạnh tranh với các yếu tố trên. Việc viết code dễ hiểu cũng luôn gắn liền với thiết kế tốt và test dễ dàng.

> Khi đọc code lần đầu tiên, thay vì nghĩ ngay đến việc refactor code hãy tự hỏi rằng liệu code này có dễ hiểu hay không.

### 1.5. Phần khó khăn

Phần khó khăn nhất có lẽ là tưởng tượng khi người khác đọc code của mình, họ sẽ nghĩ như thế nào.

Thế nhưng nếu làm được điều này, chúng ta hoàn toàn có thể trở thành những lập trình viên **trình cao** hơn.