# Phần 3: Tái cấu trúc code

Trong phần này chúng ta sẽ cùng nhau bàn về việc thay đổi code ở function level.
Cụ thể là chúng ta sẽ cùng nhau bàn về 3 cách chính để tái cấu trúc code:
- Bóc tách ra được "các vấn đề con không liên quan" đến chương trình chính.
- Sắp xếp lại code để chúng chỉ thực hiện 1 task ở 1 thời điểm nhất định.
- Mô tả code bằng từ ngữ trước, sau đó dùng mô tả này để đưa ra những giải pháp tốt hơn.

## Chương 10: Bóc tách các vấn đề không liên quan

Công việc của các kĩ sư đó là chia nhỏ vấn đề to thành các vấn đề nhỏ hơn để từ đó đi tìm cách giải quyết cho các vấn đề nhỏ đó.

Lời khuyên ở đây đó là **hãy tích cực tìm và bóc tách các vấn đề con không liên quan**. Ý chúng tôi ở đây là:
1. Xem xét một đoạn code hoặc một chương trình và tự đặt ra cho mình một câu hỏi "Mục đích của đoạn code, chương trình này là gì?"
2. Vỡi mỗi dòng code hãy hỏi "Nó có *phục vụ* cho mục đích chính của chương trình hay không? Hoặc nó có đang giải quyết các vấn đề con?"
3. Nếu thấy một số lượng các dòng codes nhất định đang giải quyết **các vấn đề con không liên quan** thì hãy tách chúng thành một hàm riêng.

### Ví dụ mở đầu: findClosetLocation()
