### Chương 5: Biết được khi nào nên comment code

Chúng ta vẫn thường nghĩ, comment là để giải thích cách vận hành của code. Nhưng đó chỉ là một phần mục đích của việc comment

> Key - Mục tiêu của comment là để truyền tải ý đồ của người viết code tới người đọc code

Khi viết code, trong đầu chúng ta có rất nhiều ý tưởng và thông tin, thế nhưng những gì người đọc code thấy được chỉ là những dòng code trước mắt mà thôi. 

Chương này sẽ đưa ra các ví dụ về việc khi nào nên đưa ra các thông tin, ý tưởng có trong đầu. Thay vì đề cập đến những khái niệm về comment hay được nói tới thì phần này sẽ trình bày về những phần như sau

- Biết được khi nào **không nên** comment code
- Truyền tải được suy nghĩ của mình thông qua code
- Đứng trên phương diện của người đọc để biết được code của mình cần những gì

### 5.1. Không nên comment code

Việc đọc comment đôi khi cũng sẽ ảnh hưởng đến thời gian đọc code. Có những comment vô nghĩa nhưng cũng có những comment có ý nghĩa, vậy sự khác biệt giữa chúng là gì. Ta cùng xem xét ví dụ sau

```c++
// Define class Account
class Account {
  public:
    // constructor
    Account();

    // setting new value for profit
    void SetProfit(double profit);

    // return profit from this Account
    double GetProfit();
};
```

> Key - Không viết comment cho những đoạn code có thể đọc hiểu ngay lập tức

Ta xét ví dụ đoạn code sau

```python
# remove everything after the second '*'
name = '*'.join(line.split('*')[:2])
```

Thực sự comment ở đây là không cần thiết vì nó không hề cung cấp bất kì thông tin mới nào cho người đọc cả. Tuy nhiên trong thực tế đa phần các dev sẽ đọc comment để nắm nội dung đoạn code nhanh hơn mà không cần phải đọc code

#### Don’t Comment Just for the Sake of Commenting

Khi thực hiện các bài tập về lập trình, chúng ta thường được yêu cầu về việc viết comment cho các hàm mình đã viết. Điều này đôi khi khiến chúng ta chỉ comment một cách "chống đối" như ví dụ dưới đây

```C
// Find the Node in the given subtree, with the given name, using the given depth.
Node* FindNodeInSubtree(Node* subtree, string name, int depth);
```

Comment kiểu như trên sẽ bị liệt vào loại "comment vô nghĩa", "vô nghĩa" ở đây nghĩa là comment và code gần như giống nhau, và comment không cung cấp thông tin gì mới hay cụ thể cho người đọc

Nếu muốn comment, hãy cung cấp thêm thông tin chi tiết hơn

```C
// Find a Node with the given 'name' or return NULL.
// If depth <= 0, only 'subtree' is inspected.
// If depth == N, only 'subtree' and N levels below are inspected.
Node* FindNodeInSubtree(Node* subtree, string name, int depth);
```

#### Don’t Comment Bad Names—Fix the Names Instead

Comment không giúp chữa được những cái tên tồi "bad-name", thay vào đó hãy đặt một cái tên "self-documenting" vì cái tên đó sẽ xuất hiện ở nhiều nơi trong project của chúng ta hơn là comment của nó

Ví dụ-1: 

Bad name: "CleanReply", đa phần comment chỉ để giải thích "clean" là như thế nào

```C
// Enforce limits on the Reply as stated in the Request,
// such as the number of items returned, or total byte size, etc.
void CleanReply(Request request, Reply reply);
```

Good name: "EnforceLimitsFromRequest"

```C
// Make sure 'reply' meets the count/byte/etc. limits from the 'request'
void EnforceLimitsFromRequest(Request request, Reply reply);
```

Ví dụ-2:

```C
// Releases the handle for this key. This doesn't modify the actual registry.
void DeleteRegistry(RegistryKey* key);
```

Cái tên **DeleteRegistry** nghe thật là nguy hiểm, thể nhưng comment đã phần nào đó "trấn an" người đọc, vậy tại sao không lựa chọn một cái tên "self-documenting" hơn

```C
void ReleaseRegistryHandle(RegistryKey* key);
```

Tổng quát lên chúng ta sẽ có 1 rule như sau

> good code > bad code + good comments

### Recording Your Thoughts

Vậy chúng ta nên comment như thế nào. Các "comment tốt" sẽ là công cụ để "ghi lại suy nghĩ, ý tưởng của bạn" khi đang tiến hành viết code

#### Include “Director Commentary”

Hãy thêm các comments để ghi lại cách nghĩ (insights) mà bạn đưa vào trong code

Ví dụ-1:
```javascript
// Surprisingly, a binary tree was 40% faster than a hash table for this data.
// The cost of computing a hash was more than the left/right comparisons.
```

Comment này cho người đọc biết rằng, không cần phải lãng phí thời gian cho việc tối ưu hoá hiệu năng của code nữa.

Ví dụ-2:
```javascript
// This heuristic might miss a few words. That's OK; solving this 100% is hard.
```

Nếu không có comment này, dev có thể sẽ tốn thời gian cho việc fix bug nếu test case không pass.

```javascript
// This class is getting messy. Maybe we should create a 'ResourceNode' subclass to
// help organize things.
```

Đoạn comment trên không chỉ cho thấy code hiện tại đang khá "tồi" mà còn chỉ cho người đọc kế tiếp về cách sửa, khiến cho người đọc không bị "hoảng" và không dám "động vào" đoạn code đó.

#### Comment the Flaws in Your Code

Không đoạn code nào là không có lỗ hổng nếu xét về tính dài hạn, vậy nên đừng xấu hổ nếu comment rằng:
- Cần cải thiện đoạn code này trong tương lai
- Giải thuật hiện tại chưa tốt
- ...

Những comments như vậy không những giúp cho code của bạn có thể sẽ được cải thiện trong tương lai mà còn giúp người đọc có một cái nhìn cụ thể hơn về chất lương của code

Sẽ có các quy ước khác nhau giữa dev về việc tạo ra các "markers" kiểu này. Ví dụ như

- TODO: việc cần làm trong tương lai
- FIX-ME: cho biết có lỗi ở đoạn code hiện tại
- XXX: Dầu hiệu cho thấy có thể có lỗi nghiêm trọng
- HACK: Thừa nhận về giải pháp tồi cho vấn đề hiện tại

#### Comment on Your Constants

Sau mỗi constant đều là một "câu chuyện" về mục đích cũng như ý nghĩa của nó. Ví dụ như sau:

```python
NUM_THREADS = 8;
```

Có lẽ người viết code sẽ nghĩ rằng, không cần comment cho constant này làm gì vì bản thân tên gọi của nó đã nói lên tất cả. Thế nhưng những người đọc code lại thích comment hơn:

```python
NUM_THREADS = 8 # as long as it's >= 2 * num_processors, that's good enough.
```

Việc comment sẽ giúp người đọc code có thể biết được cách điều chỉnh giá trị của hằng số sao cho phù hợp. Đôi khi các giá trị hằng số là ước lượng

```C
// Impose a reasonable limit - no human can read that much anyway.
   const int MAX_RSS_SUBSCRIPTIONS = 1000;
```

Hoặc là những giá trị "highly tuned" - các giá trị này không nên bị chỉnh sửa

```C
image_quality = 0.72; // users thought 0.72 gave the best size/quality tradeoff
```

Với hằng số dạng `SECONDS_PER_DAY` thì không cần comment vì bản thân tên của hằng số cũng đã nói lên ý nghĩa của nó.

#### Put Yourself in the Reader’s Shoes

Kĩ thuật sử dụng trong cuốn sách này để cấu thành nên nội dung chính đó là "Đặt mình vào vị trí của người đọc code" để từ đó biết được họ cần những thông tin gì để có thể đưa ra comment phù hợp nhất

Khi một ai đó đọc code của bạn có thể họ sẽ nghĩ "Huh, đây là gì?, đoạn code này có ý nghĩa gì?". Nhiệm vụ của bạn đó là comment những phần đó. Ví dụ với hàm Clear() như sau: 

```C++
struct Recorder {
  vector<float> data;
  ...
  void Clear() {
   vector<float>().swap(data); // Huh? Why not just data.clear()?
  }
};
```
Với các dev C++ họ sẽ đặt ra câu hỏi "Chỉ cần data.clear() là đủ rồi mà ?", nhưng trên thực tế, người viết code muốn vector phải từ bỏ đi bộ nhớ của nó (force-way). Dòng cuối của của hàm nên được comment như thế này:

```C++
// Force vector to relinquish its memory (look up "STL swap trick")
vector<float>().swap(data);
```

#### Advertising Likely Pitfalls

Khi viết doc, bạn nên đặt ra các câu hỏi như:
- Có gì thú vị ở đoạn code này ?
- Nó có thể bị sử dụng sai như thế nào ?

Về cơ bản, bạn muốn "nghĩ xa hơn" và dự đoán vấn đề mà người đọc code sẽ gặp phải trong tương lai

```java
void SendEmail(string to, string subject, string body);
```
Với hàm gửi mail như trên, những người viết web app nếu không biết có thể gọi nó khi xử lí HTTP request, nhưng do hàm này cần kết nối với mail server bên ngoài nên sẽ tốn một khoảng thời gian nhất định, nếu mail server bị sập thì sẽ dẫn đến xử lí HTTP request bị "treo"

Để tránh những sự cố như trên, bạn cần phải comment như sau:

```java
// Calls an external service to deliver email.  (Times out after 1 minute.)
void SendEmail(string to, string subject, string body);
```

Một ví dụ khác, với hàm **FixBrokenHTML** dưới đây, có chức năng thêm các thẻ HTML thiếu cho đầu vào. Hàm sẽ chạy tốt nếu đầu vào không "quá sâu", nhưng với các đầu vào "sâu" và có nhiều lỗi thì thời gian chạy có thể lên đến **hàng phút**. Không nên để người dùng tự "khám phá" ra điều này, thay vào đó hãy comment để người dùng có thể sử dụng một cách hợp lí nhất

```python
// Runtime is O(number_tags * average_tag_depth), so watch out for badly nested inputs.
def FixBrokenHtml(html): ...
```

#### “Big Picture” Comments

Điều khó khăn với thành viên mới của team đó chính là việc hiểu được "bức tranh tổng quan" về hệ thống - cách các class tương tác, data flows, .... Người thiết kế ra hệ thống thường quên việc viết docs về "big picture" này vì họ đã quá quen thuộc với hệ thống.

Giả dụ bạn được giao nhiệm vụ training cho một thành viên mới của dự án, bạn sẽ hướng dẫn anh ta về bussiness logic, các class chính, ... Tưởng chừng điều này không đem lại quá nhiều hiệu quả nhưng nó có ích hơn việc để thành viên mới tự mình "bơi" trong đống source code "khổng lồ" của dự án

**Đây chính là thông tin cần cung cấp trong high-levels comment**

Ví dụ về file-level comment:

```javascript
// This file contains helper functions that provide a more convenient interface to our
// file system. It handles file permissions and other nitty-gritty details.
```

Đừng choáng ngợp về việc lựa chọn, sử dụng các từ ngữ tốt cho comment vì suy cho cùng "có còn hơn không"

#### Summary Comments

Ngay kể cả trong function, ta cũng nên có các comments mang tính chất tổng kết cho từng đoạn code 

```python
# Find all the items that customers purchased for themselves.
    for customer_id in all_customers:
        for sale in all_sales[customer_id].sales:
            if sale.recipient == customer_id:
```

Nếu không có comment, mọi thứ sẽ trở nên khó hiểu với người đọc (tại sao lại cần lặp qua biến all_customers). Điều này đặc biệt tốt với các hàm dài hơn

```python
def GenerateUserReport():
  # Acquire a lock for this user
  ...
  # Read user's info from the database
  ...
  # Write info to a file
  ...
  # Release the lock for this user
```

Những comments này có chức năng như các gạch đầu dòng tổng kết để người đọc dễ theo dõi hơn, cũng như nắm được ý chính trước khi đọc code. Tuy nhiên với các hàm dài như vậy, ta nên tách thành các hàm nhỏ hơn vì:

> Code tốt vẫn hơn comment tốt

#### Final Thoughts—Getting Over Writer’s Block

Đa phần các coder đều ngại viết comment vì họ cho rằng phải "tốn rất nhiều công sức" để viết ra những dòng comments tốt, nhưng trong những tình huống bắt buộc chỉ có một cách duy nhất là **bắt tay vào viết comment**. Vậy các coders nên làm thế nào, rất **đơn giản** chỉ cần

> Viết ra những gì mà bạn đang nghĩ trong đầu

là đủ. Lấy ví dụ, bạn đang viết một hàm và nghĩ trong đầu rằng "Ôi trời, việc này sẽ khá khó viết nếu list bị lặp", thì hãy comment như sau:

```javascript
// Ôi trời, việc này sẽ khá khó viết nếu list bị lặp", thì hãy comment như sau:
```

Có thể câu từ vẫn còn mơ hồ nhưng "có còn hơn không". Tinh chỉnh lại một chút đối với từng cụm, từng từ và thay thế chúng bằng những cụm, từ cụ thể hơn:
- "Ôi trời": "Chú ý: đây là điều cần xem xét"
- "việc này": "đoạn code xử lí đầu vào"

Và comment mới sẽ là:

```javascript
// Chú ý: đây là điều cần xem xét, đoạn code xử lí đầu vào sẽ khá khó viết nếu list bị lặp
```

Về cơ bản chúng ta có thể thấy quá trình viết comment gồm 3 bước sau
1. Viết nháp những gì có trong đầu
2. Xem xét lại comment, tìm những chỗ cần cải thiện
3. Cải thiện, viết lại comment

Càng comment nhiều thì kết quả của bước 1 sẽ tốt lên dần dần. Việc viết comment ngay từ đầu có thể khiến bạn khó chịu nhưng nó sẽ tránh tình trạng chúng ta phải viết cả đống comments vào lúc cuối

#### Tổng kết

Việc viết comment là để giúp người đọc code hiểu được suy nghĩ của người viết code

Không nên comment khi:
- Đó là một sự thật hiển nhiên mà chỉ cần nhìn code ngay lập tức có thể hiểu được
- "Crutch comment" - comment chữa code "thối", thay vì comment ===> hãy sửa code

Nên comment:
- Giải thích tư tưởng của code (tại sao lại giải quyết theo hướng này chứ không phải cách kia)
- Sử dụng các MARKER đánh dấu: **TODO**, **XXX**
- Giải thích tại sao constants lại có giá trị đó

Đặt mình vào vị trí của người đọc code:
- Dự đoán xem phần nào mà người đọc code có thể khó hiểu, tiến hành comment cho phần đó
- Comment những xử lí có thể gây bất ngờ cho người đọc
- Sử dụng "big picture", comment ở level file/class để người đọc hiểu được cách chúng kết hợp với nhau 
- Comment tổng kết block code để người đọc không bỏ lỡ các chi tiết quan trọng
