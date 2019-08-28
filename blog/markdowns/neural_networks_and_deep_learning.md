# Coursera Neural Network And Deep Learning

- Đây là phần tổng hợp những kiến thức chính của khoá học [Neural Network And Deep Learning](https://www.coursera.org/learn/neural-networks-deep-learning) trên trang Coursera
- Ảnh trong bài viết đều lấy từ [nguồn](https://www.coursera.org/learn/neural-networks-deep-learning)

## Week1

Mô hình của 1 neural network cơ bản là như sau:

> Input -> Neural Network -> Output

Neural network sẽ sử dụng 1 hàm gọi là hàm **ReLU** - viết tắt của **Rectified Linear Unit**
Densely connected được hiểu theo nghĩa: tất cả các xi của input feature sẽ là đầu vào của từng neural trong tầng ẩn (hidden layer)

## Week2

### Binary Classification

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

### Logistic Regression

Cho trước X là đầu vào, y^ = P(y = 1 | x)
Parameters: w ∈ Rnx, b ∈ R

> Output: y^ = wTx + b (Linear Regression)

Việc sử dụng **linear regression** ở đây không phải là giải pháp hợp lí vì bản thân **wTx + b** có gía trị lớn hơn **[0, 1]** - đây là khoảng giá trị mà ta muốn y^ đạt được

Do đó, thay vì dùng **linear regression** với **logistic regression** ta sẽ sử dụng hàm **sigmoid** như sau

> y^ = σ(wTx + b)

Dưới đây là đồ thị minh hoạ cho hàm **sigmoid**

<img src="https://user-images.githubusercontent.com/15076665/60768742-9434b700-a102-11e9-9565-56ab91691887.png">

Đây là hàm dạng chuẩn của hàm **sigmoid**

```
σ(z) = 1 / (1 + e^-z)
```

Mục tiêu của chúng ta là học được **b** và **w** để có được **y^** như ý muốn

### Logistic Regression cost function

Lost (error) function: 

> L(y^, y) = 1/z * (y^ - y)^2

Ta luôn muốn **Lost function** có giá trị nhỏ nhất có thể, nên việc sử dụng sigmoid function là hoàn toàn có lí ở đây

> L(y^, y) = -(y * log y^ + (1 - y) * log (1 - y^))

Ta xét 2 TH sau:
- y = 1: **L(y^, y) = -log y^**, ta muốn L nhỏ nên **log y^** sẽ cần phải lớn -> y^ sẽ cần phải lớn, nhưng do y^ là kết quả của hàm sigmoid nên giá trị của nó luôn nhỏ hơn 1, vậy nên ta có thể kết luận như sau: **Nếu y = 1 thì y^ cần tiệm cận đến 1 nhiều nhất có thể**

- y = 0: **L = -log(1 - y^)**, lí luận tương tự trên **L nhỏ** thì **log phải lớn** vậy nên **1 - y^ phải lớn** nên **y^ phải nhỏ** khi đó **y^ sẽ tiệm cận 0**

> Cost function: J(w, b) = -1/m ∑(i = 1 -> m) L(y^(i), y(i))

(Kí hiệu (i) nghĩa là **thứ i**, với m là số lượng dữ liệu huấn luyện)

> Hàm loss là để tính toán sự khác biệt của đầu ra tương ứng với từng điểm dữ liệu, cost function sẽ tính sự khác biệt trung bình trên toàn bộ tập dữ liệu

Cost function là tiêu chí đánh giá mức độ dự đoán tốt của W, b với tập dữ liệu training

### Gradient descent

Với cost function J là hàm lồi, ta sẽ sử dụng **Gradient descent** để tìm điểm tối ưu toàn cục cho J từ 1 điểm dữ liệu khởi tạo. Dưới đây là hình minh hoạ

<img src="https://user-images.githubusercontent.com/15076665/60769323-3b1c5180-a109-11e9-841c-4cab9351a08e.png">

Với hàm J(w), ta sẽ cập nhật w liên tục

> w = w - α * dJ(w) / dw

Trong công thức trên `dJ(w) / dw` gọi là đạo hàm của J theo biến w (công thức trên là dạng đơn giản khi đã lược bỏ đi b) - sau này sẽ được gọi là **derivative** - nó thể hiện độ dốc của hàm J(w)

Cũng ở công thức trên α gọi là **learning rate**: thể hiện độ lớn của mỗi step của từng vòng lặp khi chạy **gradient descent**

Như minh hoạ trong hình dưới đây, đi từ trái sang thì giá trị của **derivative** sẽ giảm dần đến 0, từ phải sang sẽ ngược lại (tăng dần từ âm đến 0)

<img src="https://user-images.githubusercontent.com/15076665/61016656-59b16f80-a3cb-11e9-90eb-89faedc9da8b.png">

Nếu có thêm b thì công thức sẽ như sau

> w = w - α * dJ(w, b) / dw 

> b = b - α * dJ(w, b) / db

Kí hiệu **db, dw** còn có thể viết như sau **∂b, ∂w**

Với trường hợp đạo hàm của một hàm nhiều biến ta sẽ dùng kí hiệu **∂** thay cho **d** và gọi nó là **partial derivation** 

### Derivatives

Diễn giải một chút về nội dung của hình trên, xét hàm **f(a) = 3a**, xét 2 điểm **a = 2** và **a = 2.001** giá trị của hàm f sẽ tăng từ 6 lên 6.003, hình tam giác màu xanh lá cây thể hiện điều đó

Ta thấy slope (derivative) của hàm f là 3, giá trị đó sẽ bằng

> slop = heigt / width (height, width là chiều cao, chiều rộng của tam giác xanh lá trên)

> df(a) / da = 3

> Summary: Trên một đường thẳng, slope không bao giờ thay đổi

Một ví dụ khác với hình minh hoạ như ở dưới đây

<img src="https://user-images.githubusercontent.com/15076665/61019993-1e1ca280-a3d7-11e9-904b-09f1c123b854.png">

Với ví dụ trên, ta xét hàm **f(a) = a^2**, slope của **f(a)** sẽ là khác nhau với từng điểm dữ liệu khác nhau

> Với a = 2 thì slope = 4, a = 5 thì slope = 10

### Computation Graph

Trong một mạng neural, ta phải tính toán **forward propagation** và **backward propagation**, với **backward propagation** ta có thể sử dụng **Computation graph** để tính toán

Xét ví dụ như sau: Ta có hàm **J(a, b, c) = 3(a + bc)**. Để tính toán giá trị của hàm J ta có thể thực hiện như cách minh hoạ trong 2 hình phía dưới

<img src="https://user-images.githubusercontent.com/15076665/61030182-ce020800-a3f7-11e9-9b8c-870c09433d58.png">

<img src="https://user-images.githubusercontent.com/15076665/61030158-bf1b5580-a3f7-11e9-9e0d-b38e11f99cb8.png" width=720>

Do cách tính khá đơn giản nên tôi xin bỏ qua phần giải thích chi tiết cho 2 hình minh hoạ trên.

### Derivatives with a Computation Graph

Cho J là hàm của v, a. Ta có quy tắc **chain rule** như dưới đây

> dJ / da = dJ / dv * dv / da

Sử dụng **chain rule** ta sẽ tính được đạo hàm riêng phần của hàm J đối với từng biến u, v, a, b, c trong ví dụ trên

<img src="https://user-images.githubusercontent.com/15076665/61031467-892ba080-a3fa-11e9-8494-2f12b8e7107f.png" width=720>

Qua đó ta có thể rút ra được cách tính bằng **Compute Graph** như sau, tính từ phải qua trái, tính **derivative** của J đối với từng biến một, từng biến một (theo cùng thứ tự từ phải qua trái), tính **derivative** của biến phía trước dựa theo biến phía sau

### Logistic Regression Gradient Descent

Nội dung chính của Logistic Regression có thể tóm lược như hình bên dưới, với x1, x2 chính là các **input features**, mục tiêu của chúng ta là tìm ra **(w1, w2, ...) = W** và **b** để sao cho giá trị của **L(a, y)** là nhỏ nhất

<img src="https://user-images.githubusercontent.com/15076665/61033218-f42aa680-a3fd-11e9-8131-751ebfb97174.png" width=720>

Khi thực hiện **backward propagation** ta sẽ tính theo thứ tự sau

> dL(a, y) / da => dL(a, y) / dz => ∂L/∂w1

<img src="https://user-images.githubusercontent.com/15076665/61035578-64d3c200-a402-11e9-86e9-98a4db796a97.png" width=720>

Tương tự khi tính **∂L/∂w1**

> ∂L/∂w1 = ∂L/∂z * ∂z/∂w1 = x1 * dz

### Gradient descent on m examples

Xét **Logistic Regression** cho **m ví dụ**

> J(w, b) = 1/m * ∑(i = 1 -> m) L(a(i), y(i))

> a(i) = y^(i) = σ(z(i)) = σ(wTx(i) + b)

Ta có công thức như hình bên dưới

<img src="https://user-images.githubusercontent.com/15076665/61037323-c8132380-a405-11e9-9927-5397fc12cc56.png" width=720>

Đây là thuật toán để tính

<img src="https://user-images.githubusercontent.com/15076665/61037905-f47b6f80-a406-11e9-9e5d-915a2da22de7.png" width=720>

Tuy nhiên cần chú ý, ví dụ trên là cho 2 features nhưng nếu dữ liệu đầu vào có nhiều features thì sẽ cần 2 vòng lặp lồng nhau. Nếu xử lí với lượng dữ liệu lớn thì sẽ gặp vấn đề về hiệu năng. Để tránh điều đó, ta sẽ sử dụng **Vectorization**

### Vectorization

Sử dụng vectorization sẽ nhanh hơn 400 lần so với sử dụng vòng for cho công thức

> z = wT * x + b

GPU và CPU đều có cấu trúc song song (SIMD - Single Instruction Multiple Data)

### Neural network programming guideline

- Cố gắng tránh sử dụng những vòng lặp for nhiều nhất có thể

### Vectorizing Logistic Regression

Trong python có khái niệm **Broadcasting** nghĩa là khi sử dụng phép tính của ma trận với 1 số thực **b** thì số thực **b** này sẽ được tự động mở rộng thành một **row vector** hoặc một **column vector**

Công thức của **Logistic Regression**

> z(i) = wT * x(i) + b, a(i) = σ(z(i)

> Z = [... z(i) ...], A = [... a(i) ...]

> dz(i) = a(i) - y(i)

> dZ = [... dz(i) ...] = A - Y

> dw = 0, dw += x(i) * dz(i), dw /= m

> db = 0, db += dz(i), db /= m

### Broadcasting Example

> A.sum(axis=0 | 1), axis = 0: vertically, axis = 1: horizontally

General Principle
- matrix (m, n) +-*/ (1, n) ~> (m, n) | (1, m) ~> (m, n)

Ví dụ minh hoạ

<img src="https://user-images.githubusercontent.com/15076665/62253815-1c705880-b432-11e9-86a2-fb73a0ab4c95.png" width="720">

### A note on python/ numpy code

> a = np.random.randn(5) -> a.shape = (5,) - rank 1 array

**Do not use rank 1 array with logistic regression implementation**

> should: np.random.rand(5, 1) -> a.shape = (5, 1) - column vector

> should: np.random.rand(1, 5) -> a.shape = (1, 5) - row vector

> assert(a.shape == (5, 1)) -> just like documentation for code

> np.dot(a, b) - matrix mutiplication

> a * b performs an element-wise multiplication

## Week3 

### Neural Networks Overview

<img src="https://user-images.githubusercontent.com/15076665/62420625-77bf7680-b6d0-11e9-9dda-fb79da4604a2.png" width="720">

Minh hoạ cho *logistic regression*

<img src="https://user-images.githubusercontent.com/15076665/62420635-ab020580-b6d0-11e9-8e50-39d56fa77046.png" width="720">

Minh hoạ cho *neural network*

Ta có thể thấy, neural network là mô hình *stack* của *logistic regression*

### Neural Network Representation

> Activation (A - a) là các giá trị truyền từ layer trên xuống layer dưới trong neural network

Activation được biểu diễn dưới dạng *column vector*

Trong *logistic regression* ta thấy

> y^ = a

Nhưng trong neural network

> a[0] = X (input), a[1] <=> hidden layer, a[2] = y^

Trong neural network chúng ta không đếm **input layer**, mà chỉ đếm từ **hidden layer** cho đến hết mạng

<img src="https://user-images.githubusercontent.com/15076665/62500844-31c6f780-b823-11e9-9c83-c990a423c220.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/62500863-42776d80-b823-11e9-9c80-da3b648374e1.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/62500877-515e2000-b823-11e9-93f2-48689c2e71bf.png " width="720">

<img src="https://user-images.githubusercontent.com/15076665/62544573-f9fb9680-b89a-11e9-8eec-36b340634c9f.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/62544613-11d31a80-b89b-11e9-9d56-3a78ae41ddd6.png" width="720">

Cũng cần phải chú ý đến kích cỡ của các ma trận A, Z

<img src="https://user-images.githubusercontent.com/15076665/62544668-35966080-b89b-11e9-8f44-960c399cc224.png" width="720">

## Activation Functions

Chính là các hàm sigmoid dùng trong mạng neural
Tuy nhiên ngoài hàm sigmoid ta cũng có thể sử dụng hàm **tanh**

> tanh(z) = (e^z - e^-z) / (e^z + e^-z)

Hàm **tanh** có đồ thị như sau

<img src="https://user-images.githubusercontent.com/15076665/62544713-47780380-b89b-11e9-8019-af31bcdffd5e.png" width="720">

Trên thực tế, việc sử dụng hàm tanh có rất nhiều lợi thế do giá trị của hàm tanh là khoảng [-1, 1] nên khá phù hợp cho việc tính **giá trị trung bình**, cũng như tìm điểm hội tụ của dữ liệu

Nếu bài toán thuộc về dạng **binary classification** thì ta nên dùng hàm **sigmoid** do giá trị cần đạt được trong khoảng [0, 1] thay vì [-1, 1]

Sẽ có 1 mô hình đó là sử dụng hàm **tanh** cho **hidden layer**, sử dụng hàm **sigmoid** cho **output layer**

Ở đây ta kí hiệu **g** là **activation function**, tuy nhiên nếu các activation functions ở các tầng khác nhau là khác nhau ta sẽ có kí hiệu

> g[1] và g[2], ...

Tuy nhiên nếu có sự phân vân về activation function thì nên dùng hàm **ReLU (Rectified Linear Unit)**

> a = max(0, z)

<img src="https://user-images.githubusercontent.com/15076665/62545381-91adb480-b89c-11e9-91c0-765c387f882c.png" width="720">

Hàm ReLU có đạo hàm = 1 khi z > 0, đạo hàm bằng 0 khi z <= 0. Đây là 1 nhược điểm của ReLU nên người ta đã phát minh ra hàm **leaky ReLU**

Do nhược điểm của sigmoid và tanh function đó là khi z rất nhỏ, hoặc rất lớn thì đạo hàm có giá trị nhỏ nên độ dốc của đồ thị hàm số gần như là 0 nên khó có thể hội tụ

Một trong những điểm mạnh của ReLU đó là đạo hàm của nó khác 0 khá nhiều nên mạng neural sử dụng hàm này sẽ học nhanh hơn khi sử dụng hàm **tanh** hoặc **sigmoid**

Tổng kết

<img src="https://user-images.githubusercontent.com/15076665/62581661-e83ee100-b8e4-11e9-90b5-f2cc57b46ab8.png" width="720">

- Chỉ sử dụng **sigmoid** cho các bài toán **binary classification**
- **leaky ReLU** - a = max(0.01 * z, z)

## Why do you need non-linear activation functions?

Nếu trong hidden layer ta sử dụng **linear activation function** thì đầu ra sẽ như sau

<img src="https://user-images.githubusercontent.com/15076665/62582185-82535900-b8e6-11e9-8c9e-84738af4b4bd.png" width="720">

Khi đó dù có nhiều layers đi chăng nữa thì mạng neural cũng chỉ tính toán **linear activation function** mà thôi cũng không khác gì mạng neural **không có layer** 

Nên nếu có sử dụng **linear activation function** thì cũng chỉ nên sử dụng ở **output layer** mà thôi

## Derivative of activation functions

### Xét sigmoid activation function

> g(z) = 1 / (1 + e^-z)

> d(g(z))/dz = slope của g(x) tại z 

> d(g(z))/dz = g(z) * (1 - g(z))

- Khi z = 10 thì d(g(z))/dz ~= 1 (1 - 1) ~= 0
- Khi z = -10 thì d(g(z))/dz ~= 0 (1 - 0) ~= 0
- Khi z = 0 thì g(z) = 1/2 thì d(g(z))/dz = 1/4

### Xét tanh activation function

> g(z) = tanh(z) = (e^z - e^-z) / (e^z + e^-z)

> d(g(z))/dz = 1 - (tanh(z))^2

- Khi z = 10 thì d(g(z))/dz ~= 0 (g(z) = 1)
- Khi z = -10 thì d(g(z))/dz ~= 0 (g(z) = -1)
- Khi z = 0 thì d(g(z))/dz = 1

### Xét ReLU, Leake ReLU activation function

#### ReLU

> g(z) = max(0, z)

> g'(z) = 0 nếu z < 0, g'(z) = 1 nếu z >= 0

#### Leaky ReLU

> g(z) = max(0.01 * z, z)

> g'(z) = 0.01 nếu z < 0, g'(z) = 1 nếu z >= 0

## Gradient descent for neural networks

Trong ví dụ dưới đây ta có n[0], n[1], n[2] lần lượt là số lượng của: input feature, hidden unit, output unit

w[1] - size: (n[1], n[0])
b[1] - size: (n[1], 1)
w[2] - size: (n[2], n[1])
b[2] - size: (n[2], 1)

<img src="https://user-images.githubusercontent.com/15076665/63633811-f765b300-c688-11e9-84cb-20f8f300297e.png" width="720">

Formula for computing derivatives

<img src="https://user-images.githubusercontent.com/15076665/63633869-19136a00-c68a-11e9-9909-a4092d50765a.png" width="720">

## Backpropagation intuition

<img src="https://user-images.githubusercontent.com/15076665/63634034-fc783180-c68b-11e9-8471-9a023eb95bce.png" width="720">


<img src="https://user-images.githubusercontent.com/15076665/63634178-d6539100-c68d-11e9-9fd7-46bcc2d597a0.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/63634252-b07abc00-c68e-11e9-895d-d79d6adffa63.png" width="720">

## Random Initialization

### What happens if you initialize weights to zero?

Khi đó tất cả các hidden units đều tính toán cùng 1 hàm

<img src="https://user-images.githubusercontent.com/15076665/63634380-89bd8500-c690-11e9-8d06-10cb8415242f.png" width="720">

Vì lí do đó ta cần khởi tạo ngẫu nhiên các weights, khi đó các hidden units sẽ tính toán bằng các hàm khác nhau

<img src="https://user-images.githubusercontent.com/15076665/63634452-968ea880-c691-11e9-9234-6300793c5e7a.png" width="720">

Ta sử dụng giá trị 0.01 là vì nếu sử dụng các giá trị lớn như 100, 1000 thì giá trị của W cũng sẽ rất lớn vì thế nên Z cũng lớn theo, từ đó khiến cho slop hoặc gradient nhỏ, gradient descent sẽ hội tụ chậm

Tuy nhiên nếu train những neural network lớn hơn thì nên chọn các giá trị khác 0.01 (vốn dùng cho neural network với 1 hidden layer)

## Deep L-layer neural network

L (#number of layers)
n[l]: số lượng units tại layer l
a[l]: actiovation function tại layer l
a[l] = g[l](z[l])
w[l]: weights for z[l]
b[l]: bias

X = a[0]
y^ = a[2]

**General rules**
> Z[l] = W[l] * A[l - 1] + b[l]
> A[l] = g[l](Z[l])

X là ma trận của các ví dụ huấn luyện được stacked theo cột

Khi triển khai **forward propagation** thì việc sử dụng **vòng lặp for** cũng không phải là sự lựa chọn quá tồi

<img src="https://user-images.githubusercontent.com/15076665/63645445-6f8bb180-c739-11e9-8c70-6210f3731abc.png" width="720">

## Getting your matrix dimensions right

Parameters W[l], b[l]

Dimension of W[l] = (n[l], n[l - 1]), b[l] = (n[l], 1)
dw[l] có cùng dimension với w[l], db[l] có cùng dimension với b[l]

<img src="https://user-images.githubusercontent.com/15076665/63647271-92c65900-c759-11e9-818f-fd34062c1632.png" width="720">

Do
> z[l] = g[l](a[l])

nên z[l] và a[l] có cùng dimension

Trong hình bên dưới m là kích cỡ tập dữ liệu đầu vào

<img src="https://user-images.githubusercontent.com/15076665/63647347-a32b0380-c75a-11e9-8180-5d8466040041.png" width="720">

## Why deep representations?

Ta xét một mạng neural dùng để nhận diện khuôn mặt, ban đầu đi từ những **edges detector** sau đó là **eye detector**, **nose detector** và cuối cùng là toàn bộ khuộn mặt, chúng ta kết hợp những yếu tố đơn giản này thành những yếu tố phức tạp hơn

Với audo ta còn có các yếu tố khác như: **phonemes**, **word**, **sentence**, **phrase** recognization

<img src="https://user-images.githubusercontent.com/15076665/63647429-43355c80-c75c-11e9-90f4-43036694804f.png" width="720">

Hình dưới đây sẽ minh hoạ cho việc sử dụng **deep network** so với **shallower network**

Khi sử dụng **shallower network** ta cần nhiều hidden units hơn cho 1 hidden layer qua đó dẫn đến chi phí tính toán sẽ **cao hơn** khi sử dụng **deep network**

<img src="https://user-images.githubusercontent.com/15076665/63647608-c8ba0c00-c75e-11e9-9ce5-b6eca5af9a8f.png" width="720">

Trong hình phía dưới, block phía trên là **forward function**, block phía dưới là **backward function**

<img src="https://user-images.githubusercontent.com/15076665/63650531-7391f080-c786-11e9-9377-5f163a0b554d.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/63650676-34649f00-c788-11e9-8e3b-98f22910f4bf.png" width="720">

## Backward propagation for layer l

Bên phải là trường hợp **vectorization**

<img src="https://user-images.githubusercontent.com/15076665/63657375-090b9f80-c7dc-11e9-8cf2-32e589d65624.png" width="720">

Dưới đây là quá trình triển khai back-pro và for-pro với mạng neural thực hiện **binary classification**

<img src="https://user-images.githubusercontent.com/15076665/63657426-d615db80-c7dc-11e9-8f1a-c761d476d2d6.png" width="720">


## Parameters vs Hyper-parameters

### What are hyper-parameters

Trong model **parameters** là W, b

**hyper-parameters** : số vòng lặp, learning rate alpha, hidden layer L, hidden units, ... Các yếu tố này đều điều khiển W, b

Ngoài ra còn có: momentum, mini-batch size, ...
