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
