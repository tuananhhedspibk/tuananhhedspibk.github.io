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

### Giữ cho codebase nhỏ

<img src="https://user-images.githubusercontent.com/15076665/134477692-d1804db1-2813-46a2-8319-75651d669759.png" width="720">

Khi bắt đầu một project, số lượng files và code thường ít. Việc compile, chạy dự án rất dễ dàng. Nhưng khi project bắt đầu "phình" ra theo bất kì chiều nào thì số lượng code, files, folders đều tăng lên, khiến cho việc kiểm soát code, biết hàm nào gọi đến hàm nào là rất khó khăn. Vậy nên lời khuyên ở đây đó là:

> Giữ cho codebase "nhỏ" và "nhẹ" nhất có thể

Các phương pháp cơ bản để giữ cho codebase được gọn:
- Viết các hàm utils để tránh lặp code
- Loại bỏ các đoạn code thừa
- Loại bỏ các subproject không liên quan

### Tận dụng các thư viện sẵn có

Một gợi ý đó là **Dành khoảng 15 phút để đọc toàn bộ tên của hàm/modules/types của thư viện chuẩn**. Không nhất thiết phải nhớ tên, hay cấu trúc của thư viện nhưng khi bạn định code thì có thể bạn sẽ chợt nhớ ra rằng chức năng này đã được triển khai ở một thư viện hoặc API nào đó rồi.

#### Ví dụ với Lists và Sets trong Python

Giả sự bạn cần loại bỏ các phần từ trùng lặp trong list ([2, 1, 2] -> [2, 1]). Bạn có thể viết hàm triển khai như sau:

```Python
def unique(elements):
  temp = {}
  for element in elements:
    temp[element] = None  # The value doesn't matter.
  return temp.keys()

unique_elements = unique([2,1,2])
```

Rất dễ dàng, nhưng có một cách còn dễ hơn:

```Python
set([2, 1, 2]) # remove duplicate
```

#### Tại sao việc tái sử dụng thư viện lại là một chiến thắng

Trên thực tế các lập trình viên chỉ viết "10 dòng code" có ý nghĩa một ngày.

Nguyên nhân là do chúng ta sử dụng các thư viện, debug, ... khá nhiều. Nên việc sử dụng các thư viện có sẵn sẽ giúp giảm thời gian code và số lượng code đi một cách đáng kể.

### Ví dụ: Sử dụng Unix tool thay vì viết mới

Khi web server trả về các lỗi 4xx, 5xx thì ta có thể thấy rằng server có khả năng đang gặp các lỗi tiềm tàng (4xx: lỗi phía client, 5xx: lỗi phía server). Vậy nên ta cần xây dựng một công cụ để parse server error log để từ đó biết được URL nào hay bị lỗi nhất.

```
1.2.3.4 example.com [24/Aug/2010:01:08:34] "GET /index.html HTTP/1.1" 200 ...
2.3.4.5 example.com [24/Aug/2010:01:14:27] "GET /help?topic=8 HTTP/1.1" 500 ...
3.4.5.6 example.com [24/Aug/2010:01:15:54] "GET /favicon.ico HTTP/1.1" 404 ...
```

Log sẽ trông như phía trên. Việc viết một tool bằng Java hay C là rất dễ dàng thế nhưng với Unix ta chỉ cần dùng câu lệnh như sau:

```sh
cat access.log | awk '{ print $5 " " $7 }' | egrep "[45]..$" \
  | sort | uniq -c | sort -nr
```

thì sẽ cho ra kết quả:

```sh
95 /favicon.ico 404
13 /help?topic=8 500
11 /login 403
```
