### Chương 4: Vẻ đẹp

Một cuốn tạp chí bao hàm khá nhiều thông tin trong đó. Vậy nên việc thiết kế layout cho nó là vô cùng quan trọng. Layout ở đây có thể kể đến như: độ dài văn bản, chiều rộng, thứ tự, ...

Chương này sẽ trình bày về cách viết code sao cho dễ đọc. Bao gồm những chú ý về: khoảng trắng, cách bố trí các đoạn code, thứ tự của chúng

Cụ thể là:
- Sử dụng layout một cách nhất quán, cũng như sử dụng các patterns đã quen thuộc theo cách đọc của người dùng
- Khiến cho các đoạn code giống nhau về ý nghĩa nhìn giống nhau
- Tập hợp các đoạn code liên quan lại thành một khối

### 4.1. Tại sao code đẹp lại quan trọng

Cùng xem xét đoạn code sau

```c++
class StatsKeeper {
public:
    void Add(double d);
  private: int count;
   public:
        double Averange();
private: double minimum;
list<double>
    past_items
        ;double maximum;
};
```
Rõ ràng để hiểu được đoạn code trên sẽ mất khá nhiều thời gian, còn đoạn code đẹp hơn dưới đây thì như thế nào

```c++
class StatsKeeper {
    public:
        void Add(double d);
        double Averange();

    private:
        list<double> past_items;
        int count;

        double minimum;
        double maximum;
};
```

Rõ ràng là dễ đọc hơn rất nhiều. Phần lớn thời gian lập trình là để đọc code, nếu như có thể đọc code một cách trôi chảy thì ta cũng có thể nói đó là **code đẹp**

### 4.2. Tính nhất quán trong việc bố trí vị trí các dòng code

Ta xét class **TcpConnectionSimulator** viết bằng Java, dùng để đánh giá mức độ hoạt động của chương trình khi kết nối vào mạng tốc độ cao. Constructor của **TcpConnectionSimulator** class có 4 tham số
1. Tốc độ kết nối (Kbps)
2. Thời gian trễ trung bình (ms)
3. Thời gian trễ (ms)
4. Tỉ lệ mất gói tin (%)

Xét đoạn code dưới đây
```java
public class PerformanceTester {
    public static final TcpConnectionSimulator wifi = new TcpConnectionSimulator(
        500, /* Kbps */
        80, /* ms */
        200, /* jitter */
        1 /* packet loss % */);

    public static final TcpConnectionSimulator t3_fiber =
        new TcpConnectionSimulator(
            45000, /* Kbps */
            10, /* ms */
            0, /* jitter */
            0 /* packet loss % */);

    public static final TcpConnectionSimulator cell = new TcpConnectionSimulator(
        100, /* Kbps */
        400, /* ms */
        250, /* jitter */
        5 /* packet loss % */);
}
```

Do convention code (80 kí tự tối đa 1 dòng) nên ở biến **t3_fiber** có sự khác biệt so với các biến còn lại (điều này vi phạm quy tắc - **các phần có ý nghĩa giống nhau phải tương tự nhau**). Ta sẽ sửa lại như sau

```java
public class PerformanceTester {
    public static final TcpConnectionSimulator wifi =
        new TcpConnectionSimulator(
            500, /* Kbps */
            80, /* ms */
            200, /* jitter */
            1 /* packet loss % */);

    public static final TcpConnectionSimulator t3_fiber =
        new TcpConnectionSimulator(
            45000, /* Kbps */
            10, /* ms */
            0, /* jitter */
            0 /* packet loss % */);

    public static final TcpConnectionSimulator cell =
        new TcpConnectionSimulator(
            100, /* Kbps */
            400, /* ms */
            250, /* jitter */
            5 /* packet loss % */);
```

Đoạn code trên có tính thống nhất và khá dễ nhìn nhưng lại quá dài và comments lặp lại 3 lần. Nên có thể viết ngắn hơn như sau

```java
public class PerformanceTester {
    // TcpConnectionSimulator(throughput, latency, jitter, packet_loss)
    //                           [Kbps]     [ms]    [ms]    [percent]

    public static final TcpConnectionSimulator wifi =
        new TcpConnectionSimulator(500, 80, 200, 1);

    
    public static final TcpConnectionSimulator t3_fiber =
        new TcpConnectionSimulator(45000, 10, 0, 0);

    
    public static final TcpConnectionSimulator cell =
        new TcpConnectionSimulator(100, 400, 250, 5);
}
```

Ở đoạn code trên, ta đã di chuyển comment lên đầu, đồng thời toàn bộ các tham số đều được xếp theo thứ tự thành một hàng duy nhất. Dễ nhìn hơn rất nhiều

### 4.3. Sử dụng căn lề cho method

Xét đoạn code dưới đây kiểm tra chức năng của hàm **ExpandFullName** như sau

```c++
// [Doug Adams] - là 1 dạng partial_name, hàm sẽ có chức năng biến đổi nó thành [Mr. Douglas Adams]
// Nếu không thực hiện được thì đưa ra error

string ExpandFullName(DatabaseConnection dc, string partial_name, string* error);

DatabaseConnection database_connection;
string error;

assert(ExpandFullName(database_connection, "Doug Adams", &error) == "Mr. Douglas Adams");
assert(error == "");

assert(ExpandFullName(database_connection, "Jake Brown", &error) == "Mr. Jacob Brown III");
assert(error == "");

assert(ExpandFullName(database_connection, "No Such Guy", &error) == "");
assert(error == "no match found");

assert(ExpandFullName(database_connection, "John", &error) == "");
assert(error == "more than one result");
```

Thoạt nhìn qua đoạn code phía trên khá khó coi, chưa kể còn dài và có nhiều chỗ lặp lại, thiếu đi 1 pattern nhất quán. Để cải thiện đoạn code trên mà vẫn giữ nguyên ý nghĩa của nó, ta cần sử dụng **helper parameter**

```c++
CheckFullName("Doug Adams", "Mr. Douglas Adams", "");
CheckFullName(" Jake Brown ", "Mr. Jake Brown III", "");
CheckFullName("No Such Guy", "", "no match found");
CheckFullName("John", "", "more than one result");
```

Ta có thể thấy 4 test case với các tham số khác nhau. Mọi công việc xử lí đều được đưa vào hàm **CheckFullName**


```c++
void CheckFullName(string partial_name,
                   string expected,
                   string expected_error) {
    // database_connection giờ là thuộc tính của class
    string error;
    string full_name = ExpandFullName(database_connection, partial_name, &error);
    assert(error == expected_error);
    assert(full_name == expected_full_name);
}
```

Nhờ việc thay đổi code như trên, ngoài việc giải quyết được vấn đề về code đẹp, ta còn giải quyết được một vài vấn đề như sau
- Code đã ngắn đi, đơn giản hơn do ta đã xoá đi 1 lượng đáng kể code thừa
- Những phần quan trọng của test case là **tên** và **error** đã dễ nhìn hơn, trước đây chúng được bao bởi **database_connection** và **error** nên khá khó **nuốt trôi**
- Việc thêm test cũng đơn giản hơn nhiều

Qua đây ta rút ra được bài học

> Cải thiện "bề ngoài code" không chỉ giúp code dễ đọc hơn mà còn cải thiện được cấu trúc của code

### 4.4. Căn lề dọc

Việc căn lề dọc cũng khiến code trở nên dễ đọc hơn. Trong phần trước, ta có thể căn dọc các tham số của các **test cases** bằng những khoảng trắng như sau

```c++
CheckFullName("Doug Adams"  , "Mr. Douglas Adams" , "");
CheckFullName(" Jake Brown ", "Mr. Jake Brown III", "");
CheckFullName("No Such Guy" , ""                  , "no match found");
CheckFullName("John"        , ""                  , "more than one result");
```

Ví dụ dưới đây sẽ định nghĩa nhiều biến

```javascript
details  = request.POST.get('details');
location = request.POST.get('location');
phone    = equest.POST.get('phone');
email    = request.POST.get('email');
url      = request.POST.get('url');
```

Có thể nhận ra dễ dàng ở dòng thứ 3 **request** bị viết nhầm thành **equest**, nhờ có việc căn lề mà ta có thể dễ dàng tìm ra lỗi.

#### Liệu có nên căn lề ?

Ta có thể thấy việc căn lề giúp đảm bảo tính thị giác qua đó giúp **những đoạn code có vai trò giống nhau sẽ giống nhau**

Nhưng có những lập trình viên không thích việc căn lề. Họ có lí do như sau

> Chỉ thay đổi 1 dòng mà các dòng khác cũng phải thay đổi theo để đảm bảo quy tắc thì rất phí thời gian

### 4.5. Sắp xếp một cách nhất quán và có nghĩa

Việc sắp xếp thứ tự code thực ra không ảnh hưởng quá nhiều đến độ chính xác của code. Ở ví dụ dưới đây, khi thay đổi thứ tự 5 dòng định nghĩa thì cũng không sao cả

```javascript
details  = request.POST.get('details');
location = request.POST.get('location');
phone    = request.POST.get('phone');
email    = request.POST.get('email');
url      = request.POST.get('url');
```

Tuy nhiên không nên sắp xếp ngẫu nhiên mà nên sắp xếp theo một ý nghĩa nào đó. Ví dụ như
- Sắp xếp theo đúng thứ tự các trường **input** của form HTML
- Sắp xếp theo mức độ quan trọng giảm dần
- Sắp xếp theo thứ tự alphabet

Dù chọn thứ tự nào đi nữa thì trong 1 series code thì thứ tự này nên được bảo toàn, nếu thay đổi thì sẽ gây ra sự khó hiểu

```ruby
if details:  rec.details  = details
if phone:    rec.phone    = phone   # tại sao phone lại ở đây thay vì location
if email:    rec.email    = email
if url:      rec.url      = url
if location: rec.location = location # tại sao location lại bị cho xuống đây
```

### 4.6. Viết các định nghĩa thành block

Não người là một khối thống nhất. Nên để nắm bắt được cấu trúc của code nhanh hơn ta nên tổ chức code theo **đơn vị** như thế này

Xét đoạn code C++ viết cho front end phía server như sau

```c++
class FrontEndServer {
    public:
        FrontEndServer();
        void ViewProfile(HttpRequest* request);
        void OpenDatabase(string location, string user);
        void SaveProfile(HttpRequest* request);
        string ExtractQueryParam(HttpRequest* request, string param);
        void ReplyOk(HttpRequest* request, string html);
        void FindFriends(HttpRequest* request);
        void ReplyNotFound(HttpRequest* request, string error);
        void CloseDatabase(string location);
        ~FrontEndServer();
}
```

Đoạn code trên không hẳn là tồi nhưng việc viết tất cả methods vào một block duy nhất như vậy sẽ khiến người đọc khó nắm bắt cấu trúc các methods hơn. Thay vào đó ta sẽ chia các methods theo các nhóm dựa theo logic của methods. Ví dụ như sau

```c++
class FrontEndServer {
    public:
        FrontEndServer();
        ~FrontEndServer();

        // Handler
        void ViewProfile(HttpRequest* request);
        void SaveProfile(HttpRequest* request);
        void FindFriends(HttpRequest* request);
        
        // Request and Reply Utility
        string ExtractQueryParam(HttpRequest* request, string param);
        void ReplyOk(HttpRequest* request, string html);
        void ReplyNotFound(HttpRequest* request, string error);
        
        // Database helper
        void OpenDatabase(string location, string user);
        void CloseDatabase(string location);
}
```

Code đã trở nên dễ đọc hơn rất nhiều. Thoạt qua ta có thể nắm rõ cấu trúc chung của code. Sau đó muốn biết chi tiết hơn thì cũng có thể đọc với một thời gian ngắn

### 4.7. Chia code thành các đoạn

Liên tưởng một chút đến chuyện viết văn. Việc chia đoạn văn có thể tóm gọn như sau

- Những phần có tư tưởng giống nhau sẽ được nhóm lại với nhau
- Chia đoạn để cải thiện tính thị giác, giúp người đọc không bị loạn và đọc dễ hơn
- Có thể di chuyển, chuyển đổi các đoạn văn cho nhau để phù hợp với nội dung

Viết code cũng vậy, cũng cần chia đoạn. Ví dụ như đoạn code dưới đây, sẽ chẳng có ai muốn đọc nó cả

```python
# import user email and after that collation to system 's user
# Finally, display users whose are not friends
def suggest_new_friends(user, email_password):
    friends = user.friends()
    friend_emails = set(f.email for f in friends)
    contacts = import_contacts(user.email, email_password)
    contact_emails = set(c.email for c in contacts)
    non_friend_emails = contact_emails - friend_emails
    suggested_friends = User.objects.select(email__in=non_friend_emails)
    display['user'] = user
    display['friends'] = friends
    display['suggested_friends'] = suggested_friends
    return render("suggested_friends", display)
```

Nhìn qua sẽ thấy rất khó hiểu, nhưng nếu chia đoạn cho code thì sẽ tốt hơn

```python
def suggest_new_friends(user, email_password):
    # get mail of user's friends
    friends = user.friends()
    friend_emails = set(f.email for f in friends)
    
    # import all email addresses from user's mail account
    contacts = import_contacts(user.email, email_password)
    contact_emails = set(c.email for c in contacts)

    # find users whose not friend
    non_friend_emails = contact_emails - friend_emails
    suggested_friends = User.objects.select(email__in=non_friend_emails)
    
    # display it on page
    display['user'] = user
    display['friends'] = friends
    display['suggested_friends'] = suggested_friends
    
    return render("suggested_friends", display)
```

Việc chia đoạn và thêm comment cho từng đoạn giúp code dễ nhìn hơn rất nhiều. Tương tự như viết văn, ta cũng có khá nhiều cách để chia đoạn code

### 4.8. Tính nhất quán và sở thích cá nhân

Cuối cùng chúng ta sẽ đề cập đến những trường hợp viết code theo sở thích cá nhân. Ví dụ như việc đặt dấu { ở đâu khi định nghĩa class

```java
class Logger {
    // body
}

class Logger
{
    // body
}
```

Việc lựa chọn style code nào là tuỳ vào lập trình viên, nhưng điều quan trọng ở đây là tính nhất quán trong style code, tránh tình trạng mỗi chỗ một kiểu.

> Key - Style thống nhất quan trọng hơn style chính xác

### 4.9. Tổng kết

Ai cũng thích nhìn code đẹp cả. Việc viết code có cấu trúc, ý nghĩa, thống nhất sẽ giúp việc đọc code dễ và nhanh hơn. Dưới đây là một vài tổng kết

- Với các blocks thực hiện cùng một nhiệm vụ thì nên viết chúng sao cho chúng có sự tương đồng
- Việc căn lề code cũng sẽ giúp nắm bắt cấu trúc code dễ dàng hơn
- Nếu đã sắp xếp theo thứ tự A - B - C thì nên giữ thứ tự này ở những chỗ khác. Nên chọn những thứ tự có ý nghĩa và tuân thủ theo thứ tự đó ở mọi chỗ
- Sử dụng những dòng trống để phân chia đoạn code lớn thành các đoạn code nhỏ theo ý nghĩa logic
