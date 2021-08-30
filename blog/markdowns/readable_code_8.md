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
