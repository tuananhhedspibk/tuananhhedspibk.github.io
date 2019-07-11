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

Với hàm J(w), ta sẽ cập nhật w liên tục

> w = w - α * dJ(w) / dw

Trong công thức trên `dJ(w) / dw` gọi là đạo hàm của J theo biến w (công thức trên là dạng đơn giản khi đã lược bỏ đi b) - sau này sẽ được gọi là **derivative** - nó thể hiện độ dốc của hàm J(w)

Cũng ở công thức trên α gọi là **learning rate**: thể hiện độ lớn của mỗi step của từng vòng lặp khi chạy **gradient descent**

Như minh hoạ trong hình dưới đây, đi từ trái sang thì giá trị của **derivative** sẽ giảm dần đến 0, từ phải sang sẽ ngược lại (tăng dần từ âm đến 0)

<img src="https://user-images.githubusercontent.com/15076665/61016656-59b16f80-a3cb-11e9-90eb-89faedc9da8b.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Nếu có thêm b thì công thức sẽ như sau

> w = w - α * dJ(w, b) / dw 

> b = b - α * dJ(w, b) / db

Kí hiệu **db, dw** còn có thể viết như sau **∂b, ∂w**

Với trường hợp đạo hàm của một hàm nhiều biến ta sẽ dùng kí hiệu **∂** thay cho **d** và gọi nó là **partial derivation** 

#### Derivatives

Diễn giải một chút về nội dung của hình trên, xét hàm **f(a) = 3a**, xét 2 điểm **a = 2** và **a = 2.001** giá trị của hàm f sẽ tăng từ 6 lên 6.003, hình tam giác màu xanh lá cây thể hiện điều đó

Ta thấy slope (derivative) của hàm f là 3, giá trị đó sẽ bằng

> slop = heigt / width (height, width là chiều cao, chiều rộng của tam giác xanh lá trên)

> df(a) / da = 3

> Summary: Trên một đường thẳng, slope không bao giờ thay đổi

Một ví dụ khác với hình minh hoạ như ở dưới đây

<img src="https://user-images.githubusercontent.com/15076665/61019993-1e1ca280-a3d7-11e9-904b-09f1c123b854.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Với ví dụ trên, ta xét hàm **f(a) = a^2**, slope của **f(a)** sẽ là khác nhau với từng điểm dữ liệu khác nhau

> Với a = 2 thì slope = 4, a = 5 thì slope = 10

#### Computation Graph

Trong một mạng neural, ta phải tính toán **forward propagation** và **backward propagation**, với **backward propagation** ta có thể sử dụng **Computation graph** để tính toán

Xét ví dụ như sau: Ta có hàm **J(a, b, c) = 3(a + bc)**. Để tính toán giá trị của hàm J ta có thể thực hiện như cách minh hoạ trong 2 hình phía dưới

<img src="https://user-images.githubusercontent.com/15076665/61030182-ce020800-a3f7-11e9-9b8c-870c09433d58.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

<img src="https://user-images.githubusercontent.com/15076665/61030158-bf1b5580-a3f7-11e9-9e0d-b38e11f99cb8.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Do cách tính khá đơn giản nên tôi xin bỏ qua phần giải thích chi tiết cho 2 hình minh hoạ trên.

#### Derivatives with a Computation Graph

Cho J là hàm của v, a. Ta có quy tắc **chain rule** như dưới đây

> dJ / da = dJ / dv * dv / da

Sử dụng **chain rule** ta sẽ tính được đạo hàm riêng phần của hàm J đối với từng biến u, v, a, b, c trong ví dụ trên

<img src="https://user-images.githubusercontent.com/15076665/61031467-892ba080-a3fa-11e9-8494-2f12b8e7107f.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Qua đó ta có thể rút ra được cách tính bằng **Compute Graph** như sau, tính từ phải qua trái, tính **derivative** của J đối với từng biến một, từng biến một (theo cùng thứ tự từ phải qua trái), tính **derivative** của biến phía trước dựa theo biến phía sau

#### Logistic Regression Gradient Descent

Nội dung chính của Logistic Regression có thể tóm lược như hình bên dưới, với x1, x2 chính là các **input features**, mục tiêu của chúng ta là tìm ra **(w1, w2, ...) = W** và **b** để sao cho giá trị của **L(a, y)** là nhỏ nhất

<img src="https://user-images.githubusercontent.com/15076665/61033218-f42aa680-a3fd-11e9-8131-751ebfb97174.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Khi thực hiện **backward propagation** ta sẽ tính theo thứ tự sau

> dL(a, y) / da => dL(a, y) / dz => ∂L/∂w1

<img src="https://user-images.githubusercontent.com/15076665/61035578-64d3c200-a402-11e9-86e9-98a4db796a97.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Tương tự khi tính **∂L/∂w1**

> ∂L/∂w1 = ∂L/∂z * ∂z/∂w1 = x1 * dz

#### Gradient descent on m examples

Xét **Logistic Regression** cho **m ví dụ**

> J(w, b) = 1/m * ∑(i = 1 -> m) L(a(i), y(i))

> a(i) = y^(i) = σ(z(i)) = σ(wTx(i) + b)

Ta có công thức như hình bên dưới

<img src="https://user-images.githubusercontent.com/15076665/61037323-c8132380-a405-11e9-9927-5397fc12cc56.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Đây là thuật toán để tính

<img src="https://user-images.githubusercontent.com/15076665/61037905-f47b6f80-a406-11e9-9e5d-915a2da22de7.png">

**Nguồn: https://www.coursera.org/learn/neural-networks-deep-learning**

Tuy nhiên cần chú ý, ví dụ trên là cho 2 features nhưng nếu dữ liệu đầu vào có nhiều features thì sẽ cần 2 vòng lặp lồng nhau. Nếu xử lí với lượng dữ liệu lớn thì sẽ gặp vấn đề về hiệu năng. Để tránh điều đó, ta sẽ sử dụng **Vectorization**
