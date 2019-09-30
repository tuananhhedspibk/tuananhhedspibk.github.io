# Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization course on Coursera

- All images, content of this blog are taken, referenced from [course](https://www.coursera.org/learn/deep-neural-network/home/welcome)

## Week 1

### Train, Dev, Test sets

Hold-out cross validation set = Development set = dev set

The purpose of dev set is going to test different algorithms on it, see which algorithm works better (just needs to be big enough for evaluating, quickly decide which one is doing better)

Ratio (Train / Dev / Test) = 60% / 20% / 20%

In Big-data area: we have ratio (98% / 1% / 1%) (< 20%, even < 10% for dev set's size)

<img src="https://user-images.githubusercontent.com/15076665/64074087-d7b23880-cce1-11e9-89fb-2ad309318b96.png" width="720">

**Mismatched train / test distribution**

For example: crawled pictures from web page are high resolution, nice framed but pictures from app are burrier, lower resolution

So these two distributions of data may be different

<img src="https://user-images.githubusercontent.com/15076665/64074168-f1a04b00-cce2-11e9-89ec-1ef554ad585e.png" width="720">

### Bias, Variance

<img src="https://user-images.githubusercontent.com/15076665/64076968-73ee3680-cd06-11e9-9456-1e9296a57d74.png" width="720">

We have an example:

<img src="https://user-images.githubusercontent.com/15076665/64077268-9a61a100-cd09-11e9-85e1-881d8f8c2bcf.png" width="720">

In (1%, 11%) example, you do good on the **Training set**, but relative poorly on the **Dev set**. Maybe we have an overfitting at **Training set**
-> **high variance** (if our algorithm doesn't do good on **Dev set**)

In (15%, 16%) example, we have a bigger error percent for **Training set error**, this is **underfitting** the data
-> **high bias** (if our algorithm doesn't do good on **Training set**)

In (15%, 30%) example, we meet both problems
-> **high bias** and **high variance**

In (0.5%, 1%) example, perfect
-> **low bias**, **low variance**

With Human we have ~=0% error (Optimal error - bayes error ~= 0%)

If we have only Blury images, maybe with human and algorithm the **Bayes error** is 15%  or bigger

(You can reference about Overfitting and Underfitting [here](https://towardsdatascience.com/what-are-overfitting-and-underfitting-in-machine-learning-a96b30864690))

High bias and high variance graph

<img src="https://user-images.githubusercontent.com/15076665/64077343-aef26900-cd0a-11e9-80d6-7fa4a3c0b62f.png" width="720">

## Basic recipe

After training a model, we should ask our self
- High bias ? (training data performance)
  - (Yes) => We can try Bigger network, train it longer, try another NN architect
  - (No) => High variance ? (dev set performance)
    - (Yes) => More data, regularization, try another NN architect
    - (No) => Done

In machine learning problem, we have **bias variance tradeoff** - put simply is:
- If we reduce bias, variance will increase
- If we reduce variance, bias will increase

But with modern deep-learning, we can use **bigger network** to reduce bias without hurting our variance and of course getting more data to reduce variance without hurting bias too

> This has been one of the big reasons that deep learning has been so useful for supervised learning

<img src="https://user-images.githubusercontent.com/15076665/64117304-c9dae100-cdcf-11e9-9d1d-7be480fda825.png" width="720">

## Regularization

By regularization, we can prevent overfitting without adding more training data (sometimes maybe expensive to get more data)

we can omit b because in practice w is a high-dimension parameter while b **is just a number**, so usually don't bother to include it

**L2 regularization** is most commonly regularization

If we use L1 regularization, w will be sparse that means, w vector will have a lot of zeros in it

<img src="https://user-images.githubusercontent.com/15076665/64532760-1cc31400-d34d-11e9-9a32-57257cf4785f.png" width="720">

**Lambda is another hyper-parameter**

<img src="https://user-images.githubusercontent.com/15076665/64119624-40c6a880-cdd5-11e9-8424-774ec4b5cc87.png" width="720">

> the limit of summation of i should have been from 1 to n[l] instead of from 1 to n[l+1] and the limit of summation of j should have been from 1 to n[l -1] instead of 1 to n[l]

## Why regularization reduces overfitting

When lambda value is big, it'll be really incentivized to set w[l] to be reasonably close to 0

Zeroing out of a lot of neurals and if that's the case we have much simplified neural network becomes a much smaller network. So that it will take you from **overfitting case** to closer to the**high bias case**

Hopefully there'll be an intermediate value of lambda that results in a result closer to **just right case** in the middle

<img src="https://user-images.githubusercontent.com/15076665/64174295-f0625000-ce93-11e9-8e43-8d057bb40463.png" width="720">

**How does regularization prevent overfitting?**

With **tanh** function if we consider **z** value in a small range, we're just using the linear regime of the tanh function

If lambda is large and W is small => Z will be small then g(Z) will be roughly linear so every layers will be linear ~ just linear regression

=> Even if we have a deep network, but just a linear network, so it's not able to fit thoase very very complicated decision, so it less able to be overfitting

<img src="https://user-images.githubusercontent.com/15076665/64176590-b5165000-ce98-11e9-8e17-4e659f886154.png" width="720">

## Dropout Regularization

0.5 is a probability when tosing a coin (when applying regularization)

<img src="https://user-images.githubusercontent.com/15076665/64179151-a1b9b380-ce9d-11e9-8e93-06313f829a2b.png" width="720">

**Implementing dropout**

**keep_prob** is the probability that a given hidden unit will be kept

<img src="https://user-images.githubusercontent.com/15076665/64180131-3d97ef00-ce9f-11e9-8785-72cbab41793a.png" width="720">

If implement dropout at the test time, you just add noise to your predictions

In theory, run prediction many times with different hidden units randomly dropped out and have it across them. but it will give you very similar results as well

<img src="https://user-images.githubusercontent.com/15076665/64180165-4be60b00-ce9f-11e9-9e75-0dac99a2f17a.png" width="720">

## Understanding Dropout

Intuition: Can't rely on any one features because with dropout the inputs can get randomly eliminated, any feature can go away random

Dropout has similar effect to L2 regularization

We have the parameter **keep_prob** - which has a change of keeping a unit in each layer.

W[2] is the biggest matrix - to prevent over-fitting, we make **keep_prob** relative low (0.5), with different layers, we have less worry about over-fitting, maybe set **keep_prob** to 0.7, 1.0, ... (1.0 - means that we don't drop any units so we **do not use DropOut** for this layer)

Keep dropout of input layer **close to 1.0**

> Summarize: If you more worried about one layer than other layers, set keep_prob of that layer smaller than others

In computer vision, the input size is so big, inputting all these pixels that you almost never have enough data, so drop out is frequently used by Computer vision

> Dropout is a regularization technique, so it helps prevent over-fitting

Big downside of drop-out is the cost function J is no longer well-defined, hard to calculate so we lose debugging tool (graph of J)

<img src="https://user-images.githubusercontent.com/15076665/64472377-4dae1800-d198-11e9-9178-fa9fa3ab9eac.png" width="720">

## Other regularization method

**Data augmentation** - When we don't have enough data to train, but we want prevent over-fitting, **data augmentation** could be a good choice
- Flipping image
- Cropping image
- Random rotation

<img src="https://user-images.githubusercontent.com/15076665/64482470-80562000-d22d-11e9-88b9-c0182a9693d2.png" width="720">

**Early stopping** - Randomly initialize parameters, its value is small, but after runnning a lot of iterations, w values will be bigger, **early stopping** will stop halfway , you have only mid-size rate w

> Early stopping: early stop training your neural network

With early stopping you no longer can work on these two problems (not overfit and Optimize cost function J) independently because stop gradient descent early, you're sort of breaking whatever you're doing to optimize cost function J

With L2 regularization, you just train your neural network as long as possible => this makes the search space of hyper parameters easier to decompose. But the downside is you must try a lot of values for the regularization parameter **lambda** => expensive for computation

The advantage of early stopping is that **running the gradient descent process just once**, you get to try out values of small w, mid-size w, large w without needing to try a lot of values of the L2 regularization parameter lambda

<img src="https://user-images.githubusercontent.com/15076665/64482650-e1332780-d230-11e9-8add-e8d143e75db2.png" width="720">

## Normalizing input

**Normalizing training sets** - Corresponds to two steps
- Step 1: Substract out (Zero out) mean
- Step 2: Normalize variance

In the below picture, instead of dividing to sigma^2, we just using **sigma**

<img src="https://user-images.githubusercontent.com/15076665/64482899-09248a00-d235-11e9-817a-d96d0d9aab59.png" width="720">

**Why normalize inputs** 

If we normalize inputs, our cost function will look more symmetric

When using unnormalized inputs, our cost function will look like a very squished out bowl, it turns out that parameters w1, w2, ... will end up taking on very different values

Cost function contour is a very elongated function 

With cost function on the left, we must use gradient descent with **small learning rate** (a lot of steps to end up minimum  point) but after normalizing inputs (spherical contour), it makes us easier to find global minimum value (our cost function is more round, easier to optimize when our features are all on similar scales)

> It helps your learning algorithm run faster

<img src="https://user-images.githubusercontent.com/15076665/64483198-222f3a00-d239-11e9-945e-49cc64edbf73.png" width="720">

## Vanishing/ exploding gradients

Activation values will decrease exponentially. So in the very deep network, the activations end up decreasing exponentially

I: identity matrix

<img src="https://user-images.githubusercontent.com/15076665/64483607-227f0380-d240-11e9-9e06-d992c2475784.png" width="720">

## Weight initialization for Deep Networks

With ReLU activation function, Variance (wi) = 2/n

<img src="https://user-images.githubusercontent.com/15076665/64488343-bd4c0200-d281-11e9-9778-72ee444d753f.png" width="720">

## Numerical approximation of gradients

**Checking your derivative computation**

<img src="https://user-images.githubusercontent.com/15076665/64488824-487bc680-d287-11e9-927f-74a05ed9c593.png" width="720">

## Gradient checking

dW[l] has same dimension with W[l]

<img src="https://user-images.githubusercontent.com/15076665/64530101-4d07b400-d347-11e9-959f-3f9c9dc6abd2.png" width="720">

|| ||2 is euclidean lengths, have to take care with checked value (10^-5), and start worrying about value (10^-3) but great with (10^-7)

<img src="https://user-images.githubusercontent.com/15076665/64530532-55142380-d348-11e9-985b-a4c2b7418424.png" width="720">

> Gradient checking helps up finding the bug

## Gradient checking implementation notes

In practice, turn off dropout and double check with gradient checking and after that turn on dropout

<img src="https://user-images.githubusercontent.com/15076665/64531163-c4d6de00-d349-11e9-9976-daee51c5c71e.png" width="720">

## Mini-batch gradient descent

### Batch vs mini-batch gradient descent

If m - the size of the training set is large, our algorithm will be slow

We can handle by split training set to *baby training sets* - *mini-batches* and we split y set accordingly

<img src="https://user-images.githubusercontent.com/15076665/65812419-cd605d00-e201-11e9-8d58-749a83467a30.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/65812530-35637300-e203-11e9-9f58-16fccf7e8422.png" width="720">

## Understanding mini-batch gradient descent

### Training with mini-batch gradient descent

With mini-batch gradient descent if we plot the function J, it will be a litte nosiser. Because with X{1}, Y{1} maybe it just easier so we have a low cost, but with X{2}, Y{2} it become harder (more missing label examples), with X{2} and Y{2} we have a higher cost

<img src="https://user-images.githubusercontent.com/15076665/65812715-4feb1b80-e206-11e9-826b-940f4220f90e.png" width="720">

### Choosing your mini-batch size

In here we have m is the size of training set. Stochastic gradient descent can be extremely noisy, It'll always just kind of oscillate and wonder around the region of the minimum, it won't ever just head to the minimum and stay there

<img src="https://user-images.githubusercontent.com/15076665/65812910-d43e9e00-e208-11e9-8b61-f5bb69465122.png" width="720">

Sometimes your code runs faster if your mini-batch size is a power of 2.
The common mini-batch size: 64, 128, 256, 512

<img src="https://user-images.githubusercontent.com/15076665/65812960-92622780-e209-11e9-9618-29fab510bb56.png" width="720">

## Exponentially weighted averages

<img src="https://user-images.githubusercontent.com/15076665/65813095-647de280-e20b-11e9-854d-61177c824bf0.png" width="720">

In the below image, green line is accordingly with beta = 0.98, with larger window (beta = 0.98 ~ 50 days) the curve will adapt slowly (when beta is so large)

<img src="https://user-images.githubusercontent.com/15076665/65813165-52e90a80-e20c-11e9-8087-bb53f995252f.png" width="720">

In the below image, epsilon is the number of the days temperature

<img src="https://user-images.githubusercontent.com/15076665/65825344-de1bdc00-e2b0-11e9-9e18-247c3d25115b.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/65825402-5d111480-e2b1-11e9-92e7-d9af0d07b5bf.png" width="720">

## Bias correction in exponentially weighted average

The purple curve starts very low, bias correction will help you go from the **purple line** to **green line**, and help you obtain better estimate for temperature

<img src="https://user-images.githubusercontent.com/15076665/65825633-43250100-e2b4-11e9-9ef8-d1afa7086ec7.png" width="720">

## Gradient descent with momentum

Almost works faster than normal gradient descent. The basic idea is to compute an exponentially weighted average of gradients and then use that gradient to update your weights instead.

Purple line is when you use a large learning rate. On the vertical direction, averange will closer to zero and the averange in the horizontal direction will still be pretty big

Gradient descent with momentum take steps that are much smaller oscillation in vertical direction and just moving quickly in the horizontal direction (red direction in the below picture)

<img src="https://user-images.githubusercontent.com/15076665/65826133-c9444600-e2ba-11e9-9ec7-bdc1dc633fdf.png" width="720">

We should use the left version of formula (with (1 - beta))

<img src="https://user-images.githubusercontent.com/15076665/65826189-75862c80-e2bb-11e9-8010-ebb01bfed158.png" width="720">

## RMSprop (Root means square prop)

It damps out the oscillations in gradient descent

<img src="https://user-images.githubusercontent.com/15076665/65827116-dcaadd80-e2c9-11e9-8e44-4c3fb66a49bc.png" width="720">

## Adam optimization algorithm

Basically taking **momentum** and **rms prop** and putting them together

<img src="https://user-images.githubusercontent.com/15076665/65833400-07695600-e30b-11e9-8506-837d6195903b.png" width="720">

Hyper-parameter choice:
- alpha: try a range of values - need to be tunes
- beta1: default (common) choice is 0.9 (dw)
- beta2: default is 0.999 (dw^2)
- epsilon: 10^-8

When implementing Adam, usually use the **default value** for **beta1**, **beta2** and **epsilon**

<img src="https://user-images.githubusercontent.com/15076665/65833455-8a8aac00-e30b-11e9-8cae-4fa158fe215a.png" width="720">

## Learning rate decay

Slowly reduce your learning rate overtime

Blue-line in the below is the noisy case - just some noise in different mini-bathces

Slowly reduce alpha, when alpha gets smaller, your steps you take will be slower and smaller (green-line)

<img src="https://user-images.githubusercontent.com/15076665/65833593-f3beef00-e30c-11e9-9597-b25e1644845e.png" width="720">

Epoch 1: alpha 0.1
Epoch 2: alpha 0.067
Epoch 3: alpha 0.05
Epoch 4: alpha 0.04

<img src="https://user-images.githubusercontent.com/15076665/65882990-1e727b80-e3d1-11e9-8726-9ab4d10412cd.png" width="720">

t is mini-batch number t

<img src="https://user-images.githubusercontent.com/15076665/65884045-19163080-e3d3-11e9-943b-a06b2723d479.png" width="720">

## The problem of local optimal

Most points of zero gradient in a cost function (local optimal points) are saddle points

<img src="https://user-images.githubusercontent.com/15076665/65885617-ecafe380-e3d5-11e9-9fbc-604afc0493c6.png" width="720">

Plateau is a region where the derivative is close to zero for a long time

<img src="https://user-images.githubusercontent.com/15076665/65886022-8c6d7180-e3d6-11e9-9404-743d1d800081.png" width="720">
