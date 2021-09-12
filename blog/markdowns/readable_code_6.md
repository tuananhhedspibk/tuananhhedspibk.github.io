## CHƯƠNG 6: Making Comments Precise and Compact

Chương trước trình bày về việc nên **comment cái gì**, chương này nói về việc nên **comment như thế nào**

Key idea:
> Đảm bảo tỉ lệ thông tin-không gian

Cần đảm bảo tỉ lệ trên là vì đọc comment cũng sẽ tốn thời gian của người đọc, vậy nên comment phải tóm lược, đầy đủ nhất có thể

### Keep Comments Compact

Xét ví dụ code C++ dưới đây:

```C++
// The int is the CategoryType.
// The first float in the inner pair is the 'score',
// the second is the 'weight'.
typedef hash_map<int, pair<float, float> > ScoreMap;
```

Thay vì cần những 3 dòng như trên, ta có thể comment ngắn gọn tron 1 dòng như sau

```C++
// CategoryType -> (score, weight)
typedef hash_map<int, pair<float, float> > ScoreMap;
```

### Avoid Ambiguous Pronouns

Với comment bằng tiếng anh thì các từ như "this", "it" thường có ý nghĩa khá mơ hồ, dễ gây hiểu nhầm cho người đọc. Ví dụ như:

```javascript
// Insert the data into the cache, but check if it's too big first.
```

Từ "it" ở đây có thể ám chỉ hoặc là "data" hoặc là "cache", người đọc chỉ có thể biết được nếu đọc code, vậy thì comment ở đây là hoàn toàn vô nghĩa.

Cách sửa an toàn nhất đó là thay từ "it" bằng 1 từ cụ thể, giả dụ ở đây là "the data", khi đó ta có comment như sau

```javascript
// Insert the data into the cache, but check if the data is too big first.
```

Đây là cách đơn giản nhất, ngoài ra bạn cũng có thể "tái cấu trúc" lại comment để khiến "it" có ý nghĩa hơn

```javascript
// If the data is small enough, insert it into the cache.
```

#### Polish Sloppy Sentences

Viết comment tóm lược luôn đi đôi với việc khiến nó trở nên ngắn gọn hơn. Ví dụ với một web crawler:

```python
 # Depending on whether we've already crawled this URL before, give it a different priority.
```

Nhìn có vẻ ổn nhưng khi so sánh với comment dưới đây:

```python
# Give higher priority to URLs we've never crawled before.
```

Comment sau ngắn gọn, đầy đủ và còn cung cấp thêm thông tin cho trường hợp có mức "priority" cao hơn

#### Describe Function Behavior Precisely

Giả sử bạn đang viết hàm đếm số dòng của 1 file:

```C
// Return the number of lines in this file.
int CountLines(string filename) { ... }
```

Từ "line" ở đây mang ý nghĩa khá mơ hồ, có nhiều cách để định nghĩa một line. Dưới đây là một vài trường hợp đặc biệt
- "" (empty file) -> 0 line hay 1 line
- "hello\n" -> 1 line hay 2 line

Cách đơn giản nhất đó là đếm số kí tự newline '\n' (tương tự như cách câu lệnh `wc` của Unix thực hiện). Đây sẽ là cách comment tốt hơn

```C
// Count how many newline bytes ('\n') are in the file.
int CountLines(string filename) { ... }
```

Comment này ngắn hơn phiên bản cũ nhưng lại đầy đủ thông tin hơn, nó nói với người đọc rằng (hàm có thể trả về 0 cũng như bỏ qua kí tự \r)

#### Use Input/Output Examples That Illustrate Corner Cases

Với comment, việc lựa chọn cẩn thận một ví dụ minh hoạ đôi khi sẽ đem lại hiệu quả hơn cả ngàn từ ngữ. Ví dụ:

```C
// Remove the suffix/prefix of 'chars' from the input 'src'.
String Strip(String src, String chars) { ... }
```

Comment phía trên chưa tóm lược được chức năng của hàm vì nó chưa trả lời được các câu hỏi như:
- Liệu chars là một "cụm cố định" hay chỉ đơn thuần là một tập các chữ cái ?
- Liệu nếu phía cuối của xâu có chứa nhiều cụm chars thì liệu chúng có bị loại bỏ hay không ?

```C
// ...
// Example: Strip("abba/a/ba", "ab") returns "/a/"
String Strip(String src, String chars) { ... }
```

Thay vào đó một ví dụ được lựa chọn cẩn thận như trên có thể giúp cho người đọc nắm bắt ngay được chức năng của hàm. Ngược lại với một ví dụ đơn giản như dưới đây, chức năng chính của hàm vẫn chưa được thể hiện rõ cho người đọc

```C
// Example: Strip("ab", "a") returns "b"
```

Đây là một ví dụ khác mà bạn có thể sử dụng ví dụ minh hoạ cho comment

```C
// Rearrange 'v' so that elements < pivot come before those >= pivot;
// Then return the largest 'i' for which v[i] < pivot (or -1 if none are < pivot)
int Partition(vector<int>* v, int pivot);
```

Comment này khá là ngắn gọn, tuy nhiên lại khó để hình dung, nếu thêm ví dụ minh hoạ thì sẽ tốt hơn nhiều

```C
// ...
// Example: Partition([8 5 9 8 2], 8) might result in [5 2 | 8 9 8] and return 1
int Partition(vector<int>* v, int pivot);
```

Có một vài điểm mà ta cần chú ý ở ví dụ minh hoạ trên
- Tồn tại phần tử của vector có giá trị bằng pivot (test được TH biên)
- Vector không "bị" sắp xếp - tránh cho người dùng hiểu nhầm ý nghĩa của hàm
- Giá trị trả về của hàm là 1, và không tồn tại giá trị 1 trong vector
- Giá trị 8 trong vector được lặp lại -> hàm của chúng ta cho phép các input vector chứa các giá trị lặp

#### State the Intent of Your Code

Trong thực tế chúng ta thường comment theo kiểu "diễn xuôi" lại những gì mà đoạn code phía dưới thực hiện

```C++
void DisplayProducts(list<Product> products) {
  products.sort(CompareProductByPrice);
  // Iterate through the list in reverse order
  for (list<Product>::reverse_iterator it = products.rbegin(); it != products.rend();
    ++it)
   DisplayPrice(it->price);
  ...
}
```

Comment dưới đây có vẻ tốt hơn

```C++
// Display each price, from highest to lowest
for (list<Product>::reverse_iterator it = products.rbegin(); ... )
```

Comment đầu tiên thì đúng hơn về mặt kĩ thuật, comment thứ hai lại thể hiện ý đồ của người viết code - cái mà người đọc mong muốn nắm bắt được

#### “Named Function Parameter” Comments

Giả sử bạn thấy lời gọi hàm như sau

```typescript
Connect(10, false)
```

Lời gọi hàm này khá khó hiểu do sự xuất hiện của hai tham số "10" và "false"

Trong các ngôn ngữ như Python, bạn có thể gán giá trị cho tham số theo tên 

```python
def Connect(time_out, use_encryption):

Connect(time_out = 10, use_encryption = True)
```

#### Use Information-Dense Words

Trong ngành lập trình, có những tác vụ sẽ lặp đi lặp lại. Chúng sẽ được đi kèm với các từ ngữ chuyên dụng cho tác vụ đó

Một vài từ tiêu biểu như:
- heuristic
- brute-forces
- naive solution

Những từ này sẽ giúp rút ngắn đi những comment dài "loằng ngoằng".
