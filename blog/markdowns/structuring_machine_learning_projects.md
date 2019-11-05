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
