# CNN basics

- Referenced from [course](https://www.udemy.com/deeplearning)
- Banner image source: https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53

Depending on the features that you saw, you categorize things in certain ways

CNN can classify images

input images -> CNN -> labeled images

**B / W images** can be treated in 2d array with every single one of those pixels having a value between 0, 255

<img src="https://user-images.githubusercontent.com/15076665/63224843-fbb34b80-c204-11e9-8924-6a92fe209e94.png" width="720">

**Colored Image**, we have 3d arrays and 3 layers **blue**, **red**, **green**, each one of those colors has it onwed intensity

<img src="https://user-images.githubusercontent.com/15076665/63224846-066de080-c205-11e9-8cdd-7721d3d4b1ef.png" width="720">

There are four steps to construct one CNN
- Step 1: Convolution

We have: **an input image** and **feature detector - (three by three matrix)**.

Feature detector can be different: **3x3**, **5x5**, **7x7**. It's also called **Kernel** or **Filter**

And convolutional step is:

<img src="https://user-images.githubusercontent.com/15076665/63348129-a0639380-c393-11e9-96d6-722c92c4a35c.png" width="720">

We multiple top-left corner sub-matrix with **Kernel**, each value by each value, after that add all results

The step we move **Kernel** is called **Stride**. Here we have **1px** Stride. Conventionly it works good with **Stride = 2**

Finally we have **Feature map**

We have done:
- Reduce the image size to process image more easier
- Some information we are losing but we can dectect **certain features** and in this example we have **4** in feature map, that mean our **feature detector** works **very well** in that feature

We don't look at all features (look at only important features). But we created **multiple of feature maps** (because we use different **filters**)

- Step 1(B) - ReLU layer

Apply **rRectifier function**

<img src="https://user-images.githubusercontent.com/15076665/63349897-57add980-c397-11e9-8627-050d5db70cee.png" width="720">

We use **Rectifier function** to increase non-linearity in our image or in our CNN. Image has a lot of non-linear elements or objects inside it, but after run **feature detector** step, we risk that we might **create something linear** - break up non-linear of image

This is an image after run **feature detector step** (black = negative, white = positive values)

<img src="https://user-images.githubusercontent.com/15076665/63350258-09e5a100-c398-11e9-90d4-7fc404df9fb4.png" width="720">

After run with **Rectifier function** we have only non-negative values

<img src="https://user-images.githubusercontent.com/15076665/63350339-34375e80-c398-11e9-80c3-d0cc371a17b3.png" width="720">

When you see **white -> grey -> black** that is linearity
But after run with **Rectifier function** we only have **black** so it breaks up linearity

- Step 2: Max Pooling (Downsampling)

We have to make sure that our Neural Network has a property called **spatial invariance**, it doesn't care where the feature are located or our features are litte tilted, a bit in texture

Our neural network has to have some level of flexibility to be able to find that feature - Pooling

With max-pooling we take a box of **2x2 pixels**, put that in top-left corner and find **maximum value in that region**, after move the box by **stride pixel**, in this example we use **stride = 2**

<img src="https://user-images.githubusercontent.com/15076665/63352155-87f77700-c39b-11e9-9ffe-133163ccaf4e.png" width="720">

With Pooling we can reduce the size of image and parameters number

The most important benefit of Pooling is **prevent overfitting** by disregarding the non-important information

We have a lot of types of pooling: max, sum, min pooling

Sum up:

<img src="https://user-images.githubusercontent.com/15076665/63391217-a9cd1a00-c3ec-11e9-9856-20f806125a85.png" width="720">

- Step 3: Flattening

<img src="https://user-images.githubusercontent.com/15076665/63391461-7dfe6400-c3ed-11e9-9bb0-c1e6ec19738d.png" width="720">

Flat the **pooled feature map** to **column vector**, after flattening we will feed it as input to ANN

<img src="https://user-images.githubusercontent.com/15076665/63391568-de8da100-c3ed-11e9-87e4-61761e349565.png" width="720">

Sum up:

<img src="https://user-images.githubusercontent.com/15076665/63391598-f6fdbb80-c3ed-11e9-871e-1546a2e8efc6.png" width="720">

- Step 4: Full Connection

In CNN we use fully connected ANN (Neural network with **fully connected hidden layer**)

ANN will combine our features into more attributes that predict class even better

We calculate MSE (Mean square error) after that we perform **backward propagate** to adjust weights of ANN and feature detector (maybe in the previous time detector found **bad features** instead **good features**)

<img src="https://user-images.githubusercontent.com/15076665/63437108-e5a3c600-c464-11e9-8171-7d31619f4964.png" width="720">

**1** means that neural very confidents that it found a certain feature, **0** means that neural didn't find the feature are looking for

<img src="https://user-images.githubusercontent.com/15076665/63439322-c4dd6f80-c468-11e9-8fad-3bfe954fe9fc.png" width="720">

**0.9, 1** are the neurals those important for both Dog and Cat (ex: nose, eyebrow, ...). 1 and 0.9 neurals will tell to **Cat neural** this picture is not about cat and **Cat neural** will ignore it. And those neurals contribute very well to the classification of what is looking for and which is a dog

Dog neural is paying attention to the bold lines (three neurals)

<img src="https://user-images.githubusercontent.com/15076665/63554778-99967580-c579-11e9-99fc-387741c74514.png" width="720">

We can see that there are some neurals (1, 0.9) go both ways (cat and dog) but it's up to the dog and the cat to decide to learn from it neural or not

Wrap up

<img src="https://user-images.githubusercontent.com/15076665/63555701-eb8cca80-c57c-11e9-86f6-d045ffb23355.png" width="720">

## Softmax & Cross-entropy

About cross-entropy we have:

<img src="https://user-images.githubusercontent.com/15076665/63556229-e7fa4300-c57e-11e9-9986-582edebd6119.png" width="720">

Output neurals **don't connect to each other**. We use **cross-entropy** to calculate performance of NN. Look at the picture

<img src="https://user-images.githubusercontent.com/15076665/63556194-d0bb5580-c57e-11e9-92e3-da2edb3fbc14.png" width="720">

In **Mean square error** you use substract so it takes you very slow to improve your result but in **cross-entropy** you use logarithm so it is much faster
