## Coursera Neural Network And Deep Learning

Đây là phần tổng hợp những kiến thức lõi của khoá học [Neural Network And Deep Learning](https://www.coursera.org/learn/neural-networks-deep-learning) trên trang Coursera

### Week1

Mô hình của 1 neural network cơ bản là như sau:

> Input -> Neural Network -> Output

Neural network sẽ sử dụng 1 hàm gọi là hàm **ReLU** - viết tắt của **Rectified Linear Unit**
Densely connected được hiểu theo nghĩa: tất cả các xi của input feature sẽ là đầu vào của từng neural trong tầng ẩn (hidden layer)

### Week2

#### Binary Classification

Một bức ảnh được lưu trữ trong máy tính dưới dạng tổ hợp của 3 ma trận **Red**, **Green**, **Blue**. Ví dụ nếu ta có một bức ảnh có kích cỡ 64x64 
thì bức ảnh đó được lưu trữ dưới dạng 3 ma trận 64x64

Điều chúng ta muốn ở đây là trải toàn bộ 3 cụm gía trị **red**, **green**, **blue** thành **một feature vector x**. Ta có thể làm như sau, đưa từng ma trận **red**, **green**, **blue** thành từng vector 1 chiều rồi nối chúng lại với nhau. Ví dụ:

```
[2 2 2]
[1 2 3]

-> [2 2 2 1 2 3]
```

Nếu mỗi ma trận có kích cỡ 64 thì feature vector x có kích cỡ **64 x 64 x 3 = 12288** (feature vector thường được kí hiệu là **nx**)

Một vài kí hiệu thường đùng trong khoá học (Binary Classification)
- (x, y): x ∈ R(nx), y ∈ {0, 1}
- m ví dụ training: M = {(x(1), y(1)), (x(2), y(2)), ..., (x(m), y(m))}

X = [x(1) x(2) ... x(m)] (theo kiểu cột - hay dùng)
X = [x(1)]
    [x(2)]
    [....]
    [x(m)] (kiểu này ít dùng)

Y = [y(1), y(2), ..., y(m)]

#### Logistic Regression

Cho trước X là đầu vào, y^ = P(y = 1 | x)
Parameters: w ∈ Rnx, b ∈ R

> Output: y^ = wTx + b (Linear Regression)

Việc sử dụng **linear regression** ở đây không phải là giải pháp hợp lí vì bản thân **wTx + b** có gía trị lớn hơn **[0, 1]** - đây là khoảng giá trị mà ta muốn y^ đạt được

Do đó, thay vì dùng **linear regression** với **logistic regression** ta sẽ sử dụng hàm **sigmoid** như sau

> y^ = σ(wTx + b)

Dưới đây là đồ thị minh hoạ cho hàm **sigmoid**

<img src="https://user-images.githubusercontent.com/15076665/60768742-9434b700-a102-11e9-9565-56ab91691887.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Đây là hàm dạng chuẩn của hàm **sigmoid**

```
σ(z) = 1 / (1 + e^-z)
```

Mục tiêu của chúng ta là học được **b** và **w** để có được **y^** như ý muốn

#### Logistic Regression cost function

Lost (error) function: 

> L(y^, y) = 1/z * (y^ - y)^2

Ta luôn muốn **Lost function** có giá trị nhỏ nhất có thể, nên việc sử dụng sigmoid function là hoàn toàn có lí ở đây

> L(y^, y) = -(y * log y^ + (1 - y) * log (1 - y^))

Ta xét 2 TH sau:
- y = 1: **L(y^, y) = -log y^**, ta muốn L nhỏ nên **log y^** sẽ cần phải lớn -> y^ sẽ cần phải lớn, nhưng do y^ là kết quả của hàm sigmoid nên giá trị của nó luôn nhỏ hơn 1, vậy nên ta có thể kết luận như sau: **Nếu y = 1 thì y^ cần tiệm cận đến 1 nhiều nhất có thể**

- y = 0: **L = -log(1 - y^)**, lí luận tương tự trên **L nhỏ** thì **log phải lớn** vậy nên **1 - y^ phải lớn** nên **y^ phải nhỏ** khi đó **y^ sẽ tiệm cận 0**

> Cost function: J(w, b) = -1/mm ∑(i = 1 -> m) L(y^(i), y(i))

(Kí hiệu (i) nghĩa là **thứ i**, với m là số lượng dữ liệu huấn luyện)

> Hàm loss là để tính toán sự khác biệt của đầu ra tương ứng với từng điểm dữ liệu, cost function sẽ tính sự khác biệt trung bình trên toàn bộ tập dữ liệu

Cost function là tiêu chí đánh giá mức độ dự đoán tốt của W, b với tập dữ liệu training

#### Gradient descent

Với cost function J là hàm lồi, ta sẽ sử dụng **Gradient descent** để tìm điểm tối ưu toàn cục cho J từ 1 điểm dữ liệu khởi tạo. Dưới đây là hình minh hoạ

<img src="https://user-images.githubusercontent.com/15076665/60769323-3b1c5180-a109-11e9-841c-4cab9351a08e.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**
