# Structuring Machine Learning Projects course on Coursera

- All images, content of this blog are taken, referenced from [course](https://www.coursera.org/learn/machine-learning-projects/home/welcome)

## Why ML Strategy ?

After training your ML model, you get 90% accuracy but you want more.

<img width="720" src="https://user-images.githubusercontent.com/15076665/68124094-d60b2800-ff51-11e9-876f-780f8c9ea0d5.png">

## Orthogonalization

For example, each knobs will have **only one function** in the TV

<img width="720" src="https://user-images.githubusercontent.com/15076665/68124772-79107180-ff53-11e9-92ec-d3d9109cca3e.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68125203-5a5eaa80-ff54-11e9-9163-fff7b8fd9389.png">

## Single number evaluation metric

In the picture below we see that: A is better on **Recall** but B is better on **Precision**. We should not use a matrix with **Precision** and **Recall** only to pick up a suitable classifier. Instead, should find one more evaluation metric to combine with two metrics above.

> P is Precision
> R is Recall

<img width="720" src="https://user-images.githubusercontent.com/15076665/68212283-90676180-001c-11ea-94d5-af38e16f9463.png">

Sometimes, we should use **Average** number together

<img width="720" src="https://user-images.githubusercontent.com/15076665/68212451-e4724600-001c-11ea-88ad-769ea060a25b.png">

## Satisficing and Optimizing metric

Satisficing: good enough

<img width="720" src="https://user-images.githubusercontent.com/15076665/68213516-1389b700-001f-11ea-8657-7ff394a799cb.png">

## Train/dev/test distributions

Make your dev and test sets come from the same region. In case dev and test set are from different region, we optimize our model on dev set but it doesn't work good on test set.

<img width="720" src="https://user-images.githubusercontent.com/15076665/68302723-e7853900-00e5-11ea-9ba0-48b4e6e0e1c2.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68302916-37fc9680-00e6-11ea-8c99-291dfb1f5bf9.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68303632-95ddae00-00e7-11ea-9212-59a4b3e44fb7.png">

## Size of the dev and test sets

<img width="720" src="https://user-images.githubusercontent.com/15076665/68304028-506db080-00e8-11ea-86a8-94ab248d8022.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68304262-bfe3a000-00e8-11ea-855e-484c619ca46b.png">

## When to change dev/test sets and metrics

<img width="720" src="https://user-images.githubusercontent.com/15076665/68389815-2e873300-01a7-11ea-931c-afe7ccbf893e.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68390063-d1d84800-01a7-11ea-88b1-2badb6e77b07.png">

In practice, algorithm B is better

<img width="720" src="https://user-images.githubusercontent.com/15076665/68390331-62168d00-01a8-11ea-9f8b-8bfeae4519a7.png">

## Why human-level performance?

Progress is ofter quite fast, until you surpass human level performance, sometimes it slows down after surpass human level performance. And the reasons are:
- Human-level performace for many tasks that not far from Bayes's optimal error
- With the tools those could help us improve performace maybe do not work good after surpassing the human-level performance

<img width="720" src="https://user-images.githubusercontent.com/15076665/68391470-10233680-01ab-11ea-8bae-c9c842a41be4.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68392806-f800e680-01ad-11ea-8f60-1c5c66c496db.png">

## Avoidable bias

<img width="720" src="https://user-images.githubusercontent.com/15076665/68393462-7447f980-01af-11ea-87ac-a45b833af485.png">

## Understanding human-level performance

<img width="720" src="https://user-images.githubusercontent.com/15076665/68521253-95f5cd80-02e2-11ea-8b2f-dbccd70502e4.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68521392-f46f7b80-02e3-11ea-9b2f-607dd5da981a.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68521505-06055300-02e5-11ea-8233-5c39e488143a.png">

## Surpassing human-level performance

In the right example, you actually don't know your model maybe overfitting or bayes error is 0.1%, 0.2%, 0.3%, ... --> don't have enough information

<img src="https://user-images.githubusercontent.com/15076665/68521850-824d6580-02e8-11ea-8811-7fbc7e5c2fc1.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/68521963-7c0bb900-02e9-11ea-9215-7d19bc04af3d.png" width="720">

## Improving your model performance

<img src="https://user-images.githubusercontent.com/15076665/68522173-aa8a9380-02eb-11ea-950d-d9bf5d85ebb4.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/68522402-57661000-02ee-11ea-86d0-ea7fe0167026.png" width="720">

## Carrying out error analysis

<img src="https://user-images.githubusercontent.com/15076665/68524169-d23b2500-0306-11ea-8d05-083f35644c16.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/68524250-ecc1ce00-0307-11ea-9e12-0f46abda92cb.png" width="720">

## Cleaning up incorrectly labeled data

DL algorithms are not robust to **systematic errors**, but **random errors** are not too bad for most deep learning algorithm

<img src="https://user-images.githubusercontent.com/15076665/68524403-d6b50d00-0309-11ea-902f-6ba5d891b0dd.png" width="720">

In the right example, Erros due incorrect labels are just having a very large impact to your algorithm

<img src="https://user-images.githubusercontent.com/15076665/68524519-4ed00280-030b-11ea-8159-bccdf6e2165c.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/68524588-285e9700-030c-11ea-804d-e85570f0915a.png" width="720">

## Build your first system quickly, then iterate

<img src="https://user-images.githubusercontent.com/15076665/68524923-c011b480-030f-11ea-937b-abe1db631eef.png" width="720">

## Training and testing on different distributions

The option 2 helps you get a better performance

<img src="https://user-images.githubusercontent.com/15076665/68525162-12ec6b80-0312-11ea-9272-5bfac325d72d.png" width="720">

<img src="https://user-images.githubusercontent.com/15076665/68525211-b8074400-0312-11ea-8d73-cbb99d33ba98.png" width="720">

## Bias and Variance with mismatched data distributions

If training set and dev set have the **same distribution**, we can see that we are meeting **variance problem** now. But if its don't have same distribution --> hard to tell about the reason why, but maybe dev set contains images that are much more difficult to classify accurately

<img width="720" src="https://user-images.githubusercontent.com/15076665/68529781-6e841c80-0345-11ea-9f67-55126afdad78.png">

- training error and training-dev error evaluate on training set distribution
- dev/test error evaluate on dev/test set distribution

<img width="720" src="https://user-images.githubusercontent.com/15076665/68529887-6a0c3380-0346-11ea-9abb-2077b2c1c6a5.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68530094-785b4f00-0348-11ea-8f6b-b9276efdf2a5.png">

## Addressing data mismatch

<img width="720" src="https://user-images.githubusercontent.com/15076665/68544020-f3cd0700-0401-11ea-9e54-6a5d62a33d77.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68544090-bae16200-0402-11ea-84d2-316fc736ed93.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68544168-b9646980-0403-11ea-8dc8-5cb50d60e49c.png">

## Transfer learning

Transfer learning is apply a knowledge to a neural network for changing from one task to another task

Radiology diagnosis: X-ray scan

If we only have a small data set of Radiology diagnosis, we can retrain the last layer, if we have enough data we can retrain all of the layers, all the parameters in neural network

fine-tuning parameters of neural network

wake words/ trigger words are words that can turn on some kind of devices just like: amazon alexa (ALEXA!)

<img width="720" src="https://user-images.githubusercontent.com/15076665/68544784-1400c400-040a-11ea-9e8f-8b9a3d7f99e0.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68544913-292a2280-040b-11ea-8b07-f0551e17abf1.png">
