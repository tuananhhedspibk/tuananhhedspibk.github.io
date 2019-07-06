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
