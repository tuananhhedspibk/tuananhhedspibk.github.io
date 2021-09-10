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
