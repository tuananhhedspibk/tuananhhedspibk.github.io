### Chương 2: Đặt tên biến bao hàm thông tin

Khi đặt tên cho hàm, biến, class chúng ta sẽ áp dụng cùng một nguyên tắc đó là:

> Tên cũng là một cách comment ngắn gọn

Đặt tên biến cần ngắn nhưng vẫn phải đảm bảo truyền đạt nhiều thông tin nhất có thể

> Key: Tên nên bao hàm thông tin trong đó

### 2.1. Sử dụng từ ngữ tường minh khi đặt tên

Tránh sử dụng những từ ngữ trống rỗng khi đặt tên. Ví dụ như [get] là 1 từ hoàn toàn tối nghĩa

```ruby
def GetPage(url):
    ...
```
Bản thân từ **get** cũng không truyền tải bất kì ý nghĩa gì. Phương thức này sẽ lấy page từ đâu về ? (local cache, database, internet?). Nếu lấy từ internet thì nên là **FetchPage()** hoặc **DownloadPage()** thì sẽ rõ nghĩa hơn.

Tiếp theo là ví dụ của class **BinaryTree**

```java
class BinaryTree {
    int Size();
};
```
Phương thức **Size()** này sẽ trả về kết quả gì ? Chiều cao của cây ? Số lượng node ? Lượng bộ nhớ mà cây sử dụng ?. Nếu đặt tên theo đúng như những mục đích trên thì tên phương thức sẽ lần lượt là **Height()**, **NumNodes()**, **MemoryBytes()**

Một ví dụ khác đó là class **Thread**

```java
class Thread {
    void Stop();
};
```
Cái tên **Stop()** không hẳn đã là tồi nhưng nếu để phù hợp hơn với hành động - mục đích của phương thức thì những trường hợp sau đây nên được cân nhắc. Ví dụ: nếu là task nặng thì đặt là **Kill()**, nếu dừng nhưng sau đó có thể khởi chạy **(Resume)** trở lại thì nên đặt là **Pause()**

Tìm kiếm những từ ngữ **đa dạng** hơn
```
send = deliver, dispatch
find = search, extract
start = launch, begin
make = create, build
```
**Chú ý** tới việc trùng tên với từ khoá của ngô ngữ lập trình đang sử dụng

> Key: Không sử dụng cách nói vòng vo khi đặt tên mà nên đặt tên một cách tường minh, rõ ràng

### 2.2. Tránh sử dụng những tên chung chung như tmp, retval

Tránh chọn những tên trống rỗng như **tmp**, **retval**, **foo**, mà thay vào đó hãy chọn những tên biểu thị đúng mục đích và đặc tính của giá trị mà biến đó sẽ nhận.

Ví dụ:
```javascript
var euclidean_norm = function(v) {
    var retval = 0.0;
    for (var i = 0; i < v.length; i += 1) {
        retval += v[i] * v[i];
    }
    return Math.sqrt(retval);
}
```
Một cái tên tốt có nghĩa là biến hoặc hàm phải biểu thị rõ mục tiêu và giá trị của nó.　Trong ví dụ trên biến **retval** có thể thay bằng **sum_squares**. Điều này giúp cho việc thể hiện mục tiêu dễ dàng hơn cũng như hữu ích khi tìm bug.

Tuy nhiên cũng có những trường hợp những tên tưởng chừng như sáo rỗng này lại có ý nghĩa. Chúng ta cùng xem ví dụ sau

```java
if (right < left) {
    tmp = right;
    right = left;
    left = tmp;
}
```

Đây là ví dụ kinh điển về đoạn code đảo giá trị của 2 số. Đặt tên biến là **tmp** sẽ cho thấy rằng đây là biến chỉ mang ý nghĩa là lưu trữ thông tin tạm thời, có khoảng thời gian tồn tại khá ngắn, ngoài ra nó không có ý nghĩa nào khác, đồng nghĩa với việc nó sẽ không được truyền vào hàm khác hay được ghi đè gía trị ở một vị trí nào khác trong chương trình.

Dưới đây cũng là một ví dụ khá hay về việc sử dụng biến **tmp**

```java
tmp_file = tempFile.NamedTemporaryFile()
SaveData(tmp_file)
```

Nếu thay vì là **tmp_file** mà là **tmp** thì sẽ không có sự rõ ràng khi người đọc sẽ không biết **tmp** là gì (file hay tên file, ...)

> Advise: Nên sử dụng biến tmp một cách thận trọng cho mục đích lưu trữ ngắn hạn và tồn tại trong khoảng thời gian ngắn

**Loop iterator**

- Những tên biến như **i, j, k, iter** tuy là những tên tối nghĩa nhưng thường được sử dụng để làm **index** hoặc **loop iterator**, nếu sử dụng với mục đích khác có thể gây hiểu nhầm.

- Tuy nhiên có những cái tên có ý nghĩa hơn là **i, j, k, iter**
Ta xét ví dụ sau
```c++
for (int i = 0; i < clubs.size(); i++) {
    for (int j = 0; j < clubs[i].members.size(); j++) {
        for (int k = 0; k < users.size(); k++) {
            if (clubs[i].members[k] == users[j]) {
                cout << "user[" << j << "] is in club[" << i << "]  << endl;
            }
        }
    }
}
```

Thoạt nhìn, đoạn code trên không hề có lỗi nhưng nếu để ý kĩ thì index của **members** và **users** là ngược nhau, đúng ra phải là

```c++
if (clubs[i].members[j] == users[k])
```

Trong trường hợp có nhiều iterators, ta có thể thêm tiếp đầu ngữ cho các biến, như ở ví dụ trên thay vì là **i**, **j**, **k** ta sẽ đặt tên như sau **ci**, **mi**, **ui**. Khi đó việc phát hiện lỗi cũng sẽ dễ hơn rất nhiều

```c++
if (clubs[ci].members[ui] == users[mi]) # Bug, tiếp đầu ngữ của iterator sai
```

> Advise: Khi sử dụng những tên biến tối nghĩa như tmp, it, retval cần cân nhắc lí do sử dụng thật kĩ lưỡng

Hãy từ bỏ thói quen **sử dụng những tên vô nghĩa như foo khi không nghĩ ra tên thích hợp để đặt cho biến, hàm, class**. Thay vào đó, sử dụng 1 chút thời gian để nghĩ tên thích hợp, nếu biến điều đó thành thói quen thì khả năng đặt tên sẽ tăng lên đáng kể.

### 2.3. Sử dụng những tên mang tính cụ thể thay vì mang tính trừu tượng

Ta xét ví dụ với phương thức **ServerCanStart()**, phương thức này có nhiệm vụ xác nhận xem liệu server có thể lắng nghe ở 1 cổng TCP/IP hay không, nếu nhiệm vụ của phương thức là như vậy thì cái tên **ServerCanStart** là khá trừu tượng, thiếu tính cụ thể, thay vào đó ta có thể đặt tên là **CanListenOnPort**

### 2.4. Thêm thông tin vào tên

Như đã nói ở phần trước, đặt tên tốt cũng là một cách comment ngắn gọn. Vì thế, nếu có thông tin nào buộc phải thông báo cho người đọc code thì phải dùng từ ngữ để truyền đạt thông tin đó thông qua tên biến, hàm, ...

Xét ví dụ:
```java
String id; // VD: aft3h454hj54
```

Nếu ID format là quan trọng thì nên đặt tên là **hex_id**

**Đơn vị của giá trị**

Với các biến liên quan đến **thời gian**, **bộ nhớ** thì nên thêm đơn vị cho tên biến (**_ms**, **_byte**)

Xét ví dụ

```javascript
var start = (new Date()).getTime();

var elapsed = (new Date()).getTime() - start;

document.writeln("Read time: " + elapsed + " sec");
```

Đoạn code trên nhìn qua có vẻ không vấn đề gì nhưng thực chất hàm **getTime** sẽ trả về đơn vị là **ms**. Nên để dễ hiểu và rõ ràng hơn, đoạn code trên nên sửa như sau

```javascript
var start_ms = (new Date()).getTime();

var elapsed_ms = (new Date()).getTime() - start_s;

document.writeln("Read time: " + elapsed_ms * 1000 + " sec");
```

**Thêm những thuộc tính quan trọng khác**

Ngoài việc thêm thông tin về đơn vị vào tên biến, còn có các thông tin quan trọng khác như là **chú ý**, **nguy hiểm**, ...

Ví dụ về vấn đề an toàn thông tin. Đa phần nguyên nhân là do chương trình nhận các dữ liệu thiếu đi tính an toàn. Vì thế với các dữ liệu kiểu này, các tên biến như **untrustedUrl**, **unsafeMessageBody** sẽ là thích hợp. Nếu như sau khi xử lí bằng các hàm tăng tính an toàn cho dữ liệu thì các tên như **trustedUrl** hoặc **safeMessageBody** là khá phù hợp

Bảng dưới đây sẽ biểu thị việc thêm thông tin vào tên biến là quan trọng như thế nào

| Trạng thái | Tên biến thông thường | Tên biến phù hợp |
| ---------- | --------------------- | ---------------- |
| password đang ở dạng plain text, nên trước khi xử lí phải tiến hành mã hoá | password | plaintext_password |
| Trước khi hiển thị comment của người dùng càn tiến hành escaped | comment | unescaped_comment |
| Chuyển mã kí tự của html thành mà UTF-8 | html | html_utf8 |
| URL Encode dữ liệu nhập vào | data | data_urlenc |

Tóm lại hãy thêm các thuộc tính vào những chỗ thể hiện ý nghĩa quan trọng của biến

### 2.5. Quyết định độ dài của tên

Một trong những quy ước ngầm đó chính là tên của biến không nên quá dài. Việc quyết định độ dài của tên hoàn toàn phụ thuộc vào mục đích sử dụng của biến

Dưới đây là một vài quy tắc đơn giản sẽ hỗ trợ chúng ta trong việc quyết định độ dài của tên biến

### Các tên ngắn sẽ thích hợp hơn với scope ngắn

```java
if (debug) {
    map<string,int> m;
    LookUpNamesNumbers(&m);
    Print(m);
}
```

Ở ví dụ trên, tên biến m có thể không mang quá nhiều ý nghĩa nhưng với một scope nhỏ như trên (trong phạm vi 1 câu lệnh **if**) thì việc đặt tên như vậy cũng không hẳn đã gây khó khăn cho người đọc.

Nhưng với scope lớn hơn, hoặc là **global variable** thì đặt tên như vậy sẽ không bao hàm đủ thông tin cần thiết.

### Sử dụng một cái tên dài hơn - Không còn bất kì vấn đề nào nữa

Có rất nhiều lí do để tránh đặt một cái tên dài, một trong số đó là **khó để iết**, nhưng các **text editor** hiện đại đều có chức năng **word completion** để có thể hoàn thiện từ một cách tự động

### Các từ viết tắt

Thông thường các từ viết tắt sẽ được sử dụng trong các project (VD: thay vì **BackEndManager** thì sẽ là **BEManager**). Việc này thường có hại hơn là có lợi, đặc biệt với những người mới tham gia vào project (khó hiểu, mang tính chất mã hoá quá mạnh)

Tuy nhiên với các từ viết tắt phổ biến như **str - string** **eval - evaluation**, thì việc đọc hiểu cũng sẽ không quá khó khăn

### Loại bỏ các từ thừa

Có những trường hợp loại bỏ đi những từ thừa trong tên biến mà vẫn không làm mất mát đi thông tin trong đó. Ta có thể lấy ví dụ như sau

**ConvertToString** -> **ToString**
**DoServeLoop** -> **ServeLoop**

### 2.6. Truyền tải thông tin thông qua format tên

Chúng ta có thể sử dụng các kí hiệu như _, /, chữ in hoa để truyền tải thông tin cho tên biến. VD như ở open source project (C++) của google sẽ có 1 vài quy ước đặt tên biến, class, hàm như sau.

Ví dụ ở đoạn code
```c++
static const int kMaxOpenFiles = 100;

class LogReader {
    public:
        void OpenFile(string local_file);

    private:
        int offset_;
        DISALLOW_COPY_AND_ASSIGN(LogReader);
}
```

Ta có thể rút ra được một vài quy tắc như sau
- Tên class - **CamelCase**
- Tên thuộc tính class - **lower_separated**
- Tên hằng số không phải là **CONSTANT_NAME** mà là **kConstantName**, tên viết hoa hoàn toàn sẽ được dùng cho **MACRO_NAME**
- Tên biến của class sẽ là **lower_** để phân biệt với **local variables**

### Các quy ước khác về format tên

- Với **jQuery**
  - Các biến là jquery object sẽ có **$** trong chữ cái đầu tiên của tên

- Với **javascript** thông thường (quy tắc được đề cập ở cuốn [JavaScript: The Good Parts](https://www.amazon.co.jp/JavaScript-Parts-%E2%80%95%E3%80%8C%E8%89%AF%E3%81%84%E3%83%91%E3%83%BC%E3%83%84%E3%80%8D%E3%81%AB%E3%82%88%E3%82%8B%E3%83%99%E3%82%B9%E3%83%88%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9-Douglas-Crockford/dp/4873113911/ref=sr_1_1?adgrpid=54840574273&gclid=Cj0KCQjwu-HoBRD5ARIsAPIPenflLpz28vyfIEH_lGKkiuodgmbR4eAhvjoRIYezeeegZSIAndkjABQaAvIgEALw_wcB&hvadid=338525771739&hvdev=c&hvlocphy=1009309&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=17154409248115044252&hvtargid=aud-762433167318%3Akwd-298464948360&hydadcr=27521_11564932&jp-ad-ap=0&keywords=javascript+the+good+parts&qid=1561958770&s=gateway&sr=8-1))
  - Với **constuctor** thì tên hàm sẽ viết hoa **toàn bộ** chứ cái đầu tiên
  - Với **hàm thông thường** thì sẽ là **viết thường chữ cái thứ nhất**

- Với HTML, CSS: tên của id, class sẽ như sau
  - **id** sẽ sử dụng **lower_separate**
  - **class** sẽ sử dụng **hyphen-separate**

```html
<div class="main-content" id="middle_column"></div>
```

Điều quan trọng hơn cả là đảm bảo **tính nhất quán** trong project

### 2.7. Tổng kết

Dưới đây sẽ là các gợi ý khi lựa chọn tên cho biến, hàm

- **Chọn những từ rõ nghĩa** - Thay vì **Get** thì tuỳ vào trường hợp có thể sử dụng **Fetch** hoặc **Download** để thay thế

- **Tránh những tên vô nghĩa như tmp, retval** - Nhưng việc lựa chọn những tên như trên lại hoàn toàn có thể nếu có lí do hợp lí

- **Sử dụng những tên có tính cụ thể cao, qua đó có thể truyền tải được thông tin chi tiết nhất có thể** - **CanListenOnPort** sẽ có tính cụ thể cao hơn **ServerCanStart**

- **Thêm những thông tin quan trọng vào tên biến** - Với biến có đơn vị là **ms** thì thêm **_ms** ở **hậu tố**, với các biến sau này cần escape thì thêm **raw_** vào tiền tố

- **Với các biến có scope lớn thì dùng những tên dài** - Với những biến được gọi ở nhiều scope thì nên sử dụng thêm **1-2 kí tự** để đánh dấu. Với những scopes **chỉ có vài dòng** thì nên dùng tên ngắn

- Chữ in hoa, _ cũng bao hàm ý nghĩa - Thêm dấu **_** vào **thuộc tính của class** để phân biệt với **biến local**
