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

<img src="https://user-images.githubusercontent.com/15076665/64119107-04df1380-cdd4-11e9-9c5c-713006716731.png" width="720">

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
