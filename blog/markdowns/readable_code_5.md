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
