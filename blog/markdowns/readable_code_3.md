### Chương 3: Tên gọi tránh sự hiểu nhầm

> Key -  Luôn tự hỏi xem "Liệu cái tên này có gây ra sự hiểu nhầm về ý nghĩa hay không ?"

### 3.1. Ví dụ: filter()

Cùng xem xét đoạn code dưới đây (tương tác với dữ liệu lấy ra từ database)

```java
results = Database.all_objects.filter("year <= 2011");
```

Biến `results` sẽ bao hàm những kết quả nào (trong 2 kết quả dưới đây)?
- [year <= 2011] object
- [year > 2011] object (ngược lại với kết quả bên trên)

Điều dẫn đến sự khó hiểu ở trên là do cái tên **filter** có ý nghĩa mơ hồ. Không rõ ràng giữa việc **chọn lựa (select)** và **loại trừ** nên nó gây ra sự hiểu nhầm về mặt ý nghĩa như trên.

Nếu là **chọn lựa** thì nên là **select** còn nếu là loại trừ thì nên là **exclude**

### 3.2. Ví dụ Clip(text, length)

Cùng xét đoạn code cắt paragraph như sau:

```python
# Cắt đoạn cuối của text và thêm (...) vào đó
def Clip(text, length):
    # body
```

Với cái tên **Clip()**, có thể hiểu theo 2 nghĩa
- Xoá đi **length** kí tự từ phía cuối
- loại bỏ đi tối đa **length** kí tự

Để tránh nghi vấn cho người đọc nên chuyển tên hàm thành **Truncate(text, length)**

Ngoài ra còn tên tham số **length**, nên đặt là **max_length** thì sẽ rõ ràng hơn về ý nghĩa. Trong chương trước, cũng đã có sự đề cập đến đơn vị trong tên biến. Vì trong trường hợp này, **length** biểu thị số lượng chữ cái nên cái tên **max_chars** sẽ thích hợp hơn

### 3.3. Sử dụng min, max khi biến bao hàm giá trị giới hạn

Xét đoạn code kiểm tra điều kiện số lượng đồ trong shopping cart không vượt quá 10

```python
CART_TOO_BIG_LIMIT = 10

if shopping_cart.num_items() >= CART_TOO_BIG_LIMIT:
    Error("かーとにある商品数が多すぎる。)
```

Đoạn code trên mắc 1 lỗi cổ điển đó là lỗi **off-by-one**  (đây là lỗi liên quan tới điều kiện giới hạn). Ta có thể sửa **>=** thành **>**

Nhưng bản chất của vấn đề lại nằm ở cái tên khá mơ hồ / tối nghĩa **CART_TOO_BIG_LIMIT**. Cái tên này không nói rõ là **bao hàm giá trị biên** hay **không bao hàm giá trị biên**

> Advise: Cần làm rõ việc có bao hàm giá trị biên hay không thông qua việc thêm các tiếp đầu ngữ là max_ hoặc min_ vào tên biến

Vì thế nên ta sẽ sửa tên biến từ **CART_TOO_BIG_LIMIT** thành **MAX_ITEMS_IN_CART**

### 3.4. Sử dụng first, last khi chỉ định phạm vi giá trị

Cùng xét một ví dụ khác về **<** và **<=**

```python
print integer_range(start=2, stop=4)
```

**start** là một cái tên ổn, nhưng **stop** thì lại mơ hồ. Liệu **stop=4** có **bao hàm 4** hay **không bao hàm 4** 
Nếu bao hàm giá trị cuối cùng thì nên đặt tên là **first** và **last**

```python
set.PrintKeys(first="Bart", last="Maggie")
```

Ngoài cách gọi tên như trên, chúng ta hoàn toàn có thể sử dụng tên **min** và **max**

### 3.5. Sử dụng begin và end theo ý nghĩa bao hàm / không bao hàm


Trong lập trình **begin** sẽ được hiểu theo nghĩa là bao hàm giá trị, còn **end** sẽ là không bao hàm giá trị

Cách viết

```c++
PrintEventsInRange("OCT 16 12:00am", "OCT 17 12:00am")
```

đơn giản hơn nhiều so với

```c++
PrintEventsInRange("OCT 16 12:00am", "OCT 16 11:59:59.9999am")
```

### 3.6. Tên của biến Bool

Khi đặt tên cho biến bool hoặc hàm trả về giá trị bool thì nên đặt sao cho tên mang ý nghĩa **true**, **false**

Dưới đây là một ví dụ cho việc đặt tên không tốt

```c
bool read_password = true;
```

Bản thân từ **read** cũng mang nghĩa là **đọc**. Nên có thể hiểu theo 2 nghĩa sau đây

- Sẽ đọc password
- Đã đọc password (thể quá khứ của **read** cũng là **read**)

Ở đây, thay vì read có thể sử dụng **need_password**, **user_is_authenticated**

Với các biến bool, thì nên thêm tiếp đầu ngữ **is**, **has**, **can**, **should**
Tránh dùng những tên phủ định như **disable_ssl** mà nên sử dụng **use_ssl**

### 3.7. Phù hợp với kì vọng của người dùng

Kể cả khi dùng với một ý nghĩa khác nhưng do **định kiến** hoặc **thói quen suy nghĩ** của người dùng mà việc đặt tên cũng có thể dẫn đến sự hiểu nhầm. Những tình huống đó, ta nên **chấp nhận định kiến của người dùng** và đặt một cái tên không gây hiểu nhầm

### Ví dụ: get*()

Rất nhiều lập trình viên thường có thói quen đặt tên cho phương thức bắt đầu bằng **get** cho các phương thức **chỉ lấy về giá trị của thuộc tính**

Dưới đây là một ví dụ

```java
public class StatisticsCollector {
    public void addSample(double x) {
        // body
    }

    public double getMean() {
        // body
    }
}
```

`**getMean** ở đây là phương thức duyệt qua toàn bộ dữ liệu đã có, sau đó tính giá trị trung bình của chúng. Với lượng dữ liệu lớn thì việc tính toán như trên là rất tốn kém, những lập trình viên không nghĩ đến hiệu năng và chi phí tính toàn thì sẽ gọi hàm **getMean**

Cân nhắc về chi phí tính toán trước, ta nên đổi tên phương thức trên thành **computeMean** (cũng nên thay đổi code để giảm chi phí tính toán)

### Ví dụ: list::size()

Xét đoạn code C++ dưới đây với 1 bug khá khó để tìm thấy, đó là nguyên nhân khiến cho tốc độ của server giảm đi rõ rệt.

```c++
void ShrinkList(list<Node>& list, int max_size) {
    while (list.size() > max_size) {
        FreeNode(list.back());
        list.pop_back();
    }
}
```

Nguyên nhân gây ra bug là do **list.size()** có thời gian tính toán là **O(n)**, do không tính trước số lượng các nodes của list nên hàm **ShrinkList** trên sẽ có thời gian tính toán là **O(n2)**

Đoạn code này hoàn toàn đúng về mặt logic, chạy pass toàn bộ unit test nhưng nếu truyền vào hàm **ShrinkList** một list gồm **1 triệu nodes** thì thời gian tính toán của hàm sẽ lên đến **1 tiếng**

Vấn đề nằm ở chỗ, **list.size** tốn khá nhiều thời gian để thực thi. C++ hay các ngôn ngữ khác đều có các containers, bản thân mỗi container đều có 1 method là **size()** với thời gian thực thi nhất định

### 3.8. Ví dụ: xem xét giữa nhiều cái tên

Cùng xét ví dụ, thực thi các experiments (thử nghiệm) để test traffic cho một trang web. Dưới đây là file setting cho việc test

```json
experiment_id: 100
description: "change font size to 14pt"
traffic_fraction: 5%
```

Do test nhiều lần nên phải copy/ paste các thuộc tính ở các files setting còn lại
Nhưng để tránh việc nhiều thuộc tính / giá trị ở các file trùng nhau (file quá dài, tốn công copy / paste) chúng ta muốn ở các experiments khác cũng có thể sử dụng được các giá trị của file setting đã tồn tại (gọi là **inherit prototype pattern**). Nếu thế có thể viết như dưới đây

```json
experiment_id: 101
the_other_experiment_id_want_to_reuse: 100
[Chỉ overwrite các thông tin cần thiết]
```

Điều cần xem xét ở đây là tên **the_other_experiment_id_want_to_reuse**. Có thể kể ra 4 cái tên phù hợp
1. template
2. reuse
3. copy
4. inherit

Khi cân nhắc giữa nhiều cái tên, cần suy xét khả năng gây hiểu lầm của từng tên một

Đầu tiên là tên **template**. Đây là một cái tên khá mơ hồ, sẽ có 2 khả năng hiểu ở đây một là **Đây là template** và hai là **Sử dụng template này**. Ngoài ra đây là một từ có tính trừu tượng khá cao, dẫn đến sự hiểu nhầm rằng thử nghiệm với template này không phải là thử nghiệm thật mà là thử nghiệm mang tính trừu tượng.

Thứ hai là từ **reuse**. Đây không hẳn là một cái tên tệ, nhưng vẫn có thể gây ra sự hiểu nhầm ở chỗ **Thử nghiệm này có thể tái sử dụng ~lần**, nên đổi thành **reuse_id**. Thế nhưng có khả năng bị hiểu nhầm là **id tái sử dụng của thử nghiệm này là ~**

Tiếp theo là **copy**. Đây là một cái tên khá tốt, nhưng có thể gây hiểu nhầm ở chỗ
```json
copy: 100
```
Có thể hiểu theo 2 hướng **copy 100 lần** hoặc **đây là lần copy thứ 100**. Để thể hiện đúng mục tiêu là **tham chiếu đến các thử nghiệm khác** ta sẽ đặt tên là **copy_experiment**

Cuối cùng là**inherit**. Đây là cái tên rất quen thuộc với các lập trình viên (nó mang ý nghĩa là kế thừa). Khi chúng ta kế thừa 1 class thì toàn bộ methods, properties của class đó sẽ thuộc về class con. Thế nhưng để có sự rõ ràng thì nên đổi thành **inherit_from** hoặc **inherit_from_experiment_id**

Từ những tìm kiếm và cân nhắc trên chúng ta thấy có 2 cái tên phù hợp nhất đó là **copy_experiment** và **inherit_from_experiment_id** vì hai cái tên này khó gây ra sự hiểu nhầm và cũng rõ ràng nhất

### 3.9. Tổng kết

- Tên phù hợp nhất là cái tên không gây ra sự hiểu nhầm nào. Khi người khác đọc code của mình, họ sẽ hiểu được ngay ý đồ của mình
- Trước khi đặt tên nên có một cái nhìn đa chiều về cái tên đó, tưởng tượng xem liệu nó có gây hiểu nhầm hay không
- Với giá trị cực đại / tiểu thì tên nên có **max_**, **min_**
- Với các khoảng thì có thể là **first**, **last** - bao hàm giá trị cuối, **begin**, **end** - không bao hàm gía trị cuối
- Với giá trị bool thì nên có các tiếp đầu ngữ nhủ **is**, **has**, ...
- Cũng nên chú ý đến kì vọng của người dùng, ví dụ với hàm **get**, **size** thì nên đáp ứng kì vọng của người dùng về thời gian tính toán nhanh nhất có thể
