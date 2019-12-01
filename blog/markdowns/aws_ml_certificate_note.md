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

### Machine Learning Data Terminology

#### Labeled data and Un-labeled data:
- Labeled data: dataset with "spam" and "no-spam" email labeled
- Un-labeled data: log data, audio data

<img width="720" src="https://user-images.githubusercontent.com/15076665/69914828-fca67b00-148b-11ea-92aa-2182fa612434.png">

- Catergorical feature example: feature is used to make groups from the source data

<img width="720" src="https://user-images.githubusercontent.com/15076665/69914874-6f175b00-148c-11ea-8e62-44ef0965222e.png">

If the attribute **falls into a group or category**, the attribute is **categorical**.

- Continous feature example:

<img width="720" src="https://user-images.githubusercontent.com/15076665/69914916-c4536c80-148c-11ea-8d9a-adcb9720c1a7.png">

If you can place the attribute value on a **number line**, the attribute is **continous**.

#### Text data (Corpus data)

#### Ground Truth data

<img width="720" src="https://user-images.githubusercontent.com/15076665/69915063-2eb8dc80-148e-11ea-9d44-a55776702cce.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69915090-632c9880-148e-11ea-94e3-707bf461c6ef.png">

#### Image data

<img width="720" src="https://user-images.githubusercontent.com/15076665/69915117-c3bbd580-148e-11ea-8f9c-bddd6590bc00.png">

#### Time series data

Dataset that capture changes on the time

- Stock prizes
- Log data

<img width="720" src="https://user-images.githubusercontent.com/15076665/69915190-b7844800-148f-11ea-981f-94d95a9302a4.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69915207-e7335000-148f-11ea-9e08-729cc05b706f.png">
