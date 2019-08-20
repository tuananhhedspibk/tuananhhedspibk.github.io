# CNN basics

Referenced from [course](https://www.udemy.com/deeplearning)

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

- Step 2: Max Pooling

We have to make sure that our Neural Network has a property called **spatial invariance**, it doesn't care where the feature are located or our features are litte tilted, a bit in texture

Our neural network has to have some level of flexibility to be able to find that feature - Pooling

With max-pooling we take a box of **2x2 pixels**, put that in top-left corner and find **maximum value in that region**, after move the box by **stride pixel**, in this example we use **stride = 2**

<img src="https://user-images.githubusercontent.com/15076665/63352155-87f77700-c39b-11e9-9ffe-133163ccaf4e.png" width="720">

- Step 3: Flattening
- Step 4: Full Connection
