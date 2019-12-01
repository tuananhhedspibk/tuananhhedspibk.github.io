# AWS ML Certificate Note

All contents and images of this post are referenced from [this course](https://learn.acloud.guru/course/aws-certified-machine-learning-specialty/dashboard)

## Data collection

<img width="720" src="https://user-images.githubusercontent.com/15076665/69812223-03868100-1233-11ea-9353-b25859553240.png">

### Data collection concepts

<img width="720" src="https://user-images.githubusercontent.com/15076665/69911141-45454080-145a-11ea-9304-d6f651985023.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69911171-fba92580-145a-11ea-873f-6b9f89eeba0b.png">

You should have at least 10 times as many data points as the total number of features

### General data terminology

- column = attribute = feature
- row = observation = sample = data point

Types of data that we have
1. Structured data (table) --> is stored in database
2. Un-structured data (pdf, image, video)
3. Semi-structured data: unstructed for relation data, but has some orgranizational structure (csv, xml, json)

**Data warehouse**: is a collect data from different sources with many different formats (structured or unstructured), before land them together into warehouse, we need something like pre-processing or cleaning for data so reason is we want the data of the data warehouse can be used for analytic or search engine or visualizing

**Data lakes**: stores unstructed-data, and traditionaly there is no pre-processing before we dump it into the **data lakes**, just a place the we dump out our data

<img width="720" src="https://user-images.githubusercontent.com/15076665/69911494-9146b400-145f-11ea-9382-1d2a8aa4696e.png">