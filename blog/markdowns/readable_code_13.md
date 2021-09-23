## Chương 13: Viết ít code hơn

Mỗi một dòng code viết ra là một dòng code cần test và maintain. Hãy cố gắng viết ít code nhất có thể và loại bỏ đi các tính năng thừa nhiều nhất có thể.

> Code dễ đọc nhất là code ngắn nhất

### Đừng cố gắng triển khai feature đó - Bạn sẽ không cần đến nó

Khi bắt đầu một project các lập trình viên đều có dự định phát triển những tính năng hay ho cho project của mình. Nhưng liệu chúng có thực sự cần thiết? Hay lại dẫn đến tình trạng các tính năng này hoặc là "không được hoàn thành" hoặc là "khiến project trở nên phức tạp hơn".

Các lập trình viên thường không tính toán đến những khó khăn gặp phải khi triển khai một tính năng. Họ thường chỉ quan tâm đến việc mất bao lâu để hoàn thiện sơ bộ tính năng đó mà không tính đến:
- Thời gian cần để maintain trong tương lai
- "Sức nặng" mà tính năng đó đem đến cho project

### Hãy tự hỏi và chia nhỏ các yêu cầu

Nếu chúng ta xem xét kĩ lưỡng yêu cầu, đôi khi có thể giảm đi số lượng dòng code. Cùng xem xét một vài ví dụ sau.

#### Ví dụ: Tính năng định vị cửa hàng

Giả sử bạn đang xây dựng tính năng "định vị cửa hàng" cho hệ thống. Bạn nghĩ rằng yêu cầu sẽ là:

> Với bất kì kinh độ/vĩ độ của người dùng, hệ thống sẽ đưa ra cửa hàng gần người dùng nhất

Để triển khai tính năng này "chuẩn" 100%, bạn cần xử lí những yêu cầu sau:
- Khi vị trí nằm ở các vùng khác nhau đối với "Đường chuyển ngày quốc tế"
- Khi vị trí nằm ở gần cực Bắc/Nam
- Chỉnh sửa tuỳ theo độ cong của bề mặt Trái Đất

Để xử lí toàn bộ yêu cầu trên, có lẽ sẽ cần rất nhiều code. Với ứng dụng của bạn, bạn chỉ cần tìm một cửa hàng gần người dùng trong phạm vi bang Texas là đủ. Trong phạm vi nhỏ như vậy ta chỉ cần:

> Tính khoảng cách của các cửa hàng tới người dùng bằng khoảng cách euclidean và sau đó đưa ra cửa hàng gần nhất

#### Ví dụ: Thêm cache

Giả sử chúng ta có một ứng dụng Java, thường xuyên đọc dữ liêu từ đĩa. Việc đọc này ảnh hưởng đến tốc độ của ứng dụng nên bạn quyết định triển khai cache cho nó.
Các lệnh đọc sẽ như sau:

```sh
read ObjectA
read ObjectA
read ObjectB
read ObjectB
read ObjectC
read ObjectC
```

Như bạn có thể thấy các Object đều bị đọc đi đọc lại ít nhất một lần. Khi gặp vấn đề này, suy nghĩ đầu tiên của chúng ta đó là tìm cách loại bỏ đi phần tử được đọc cuối cùng. Thông thường chúng ta sẽ phải tự triển khai code cho việc này, điều này không khó (khi chúng ta đã có sẵn một data structure phía trước - có hash table và một linked list - khoảng 100 dòng code).

Để ý thấy các lần truy cập lặp lại này đều nằm trong một dòng nên thay vì triển khai LRU cache, ta chỉ cần triển khai one-item cache:

```Java
DiskObject lastUsed;  // class member

DiskObject lookUp(String key) {
  if (lastUsed == null || !lastUsed.key().equals(key)) {
    lastUsed = loadDiskObject(key);
  }

  return lastUsed;
}
```

Đoạn code này giải quyết được 90% vấn đề ta đang gặp phải, đồng thời nó cung tốn khá ít bộ nhớ. Việc giải quyết "một nửa vấn đề" hoặc một vấn đề "đơn giản hơn" sẽ giúp bạn không phải tốn quá nhiều công sức cho việc triển khai code.
