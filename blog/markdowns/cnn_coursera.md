# Convolutional Neural Networks

## Computer vision

<img width="720" src="https://user-images.githubusercontent.com/15076665/68857742-c98f8800-0726-11ea-846a-ad81255528bf.png">

One problem of Computer Vision (CV) is input is so big

<img width="720" src="https://user-images.githubusercontent.com/15076665/68858110-9ac5e180-0727-11ea-9eaa-34069afa56f3.png">


## Edge Detection Example

<img width="720" src="https://user-images.githubusercontent.com/15076665/68947365-9e756900-07f8-11ea-8492-f213329ecbe8.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68988994-da094500-0883-11ea-9d8c-9983c7053527.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/68989060-ef32a380-0884-11ea-83c3-e3fc534d8d1e.png">

## More Edge Detection

<img width="720" src="https://user-images.githubusercontent.com/15076665/68989290-a03a3d80-0887-11ea-94c1-93c93fe3f808.png">

Differents filter allow us to find vertical and horizontal edges

<img width="720" src="https://user-images.githubusercontent.com/15076665/68994034-76057180-08c1-11ea-8a63-edde28c3b4a3.png">

We can learn filter matrix as parameters by backpropagation with the aim that with this filter matrix we can detect good edges of the input picture

<img width="720" src="https://user-images.githubusercontent.com/15076665/68994113-7fdba480-08c2-11ea-9e91-0b245907d70f.png">

## Padding

The corners pixel of the image are use much less in the output so we are throwing away a lot of information near the edge of the image

<img width="720" src="https://user-images.githubusercontent.com/15076665/69007571-d4465900-0982-11ea-9fdb-0be81de2adb4.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69007629-b3323800-0983-11ea-87c8-d4529332cc86.png">

## Strided Convolutions

<img width="720" src="https://user-images.githubusercontent.com/15076665/69007956-2ccc2500-0988-11ea-9755-d31ae958882e.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69008007-ed520880-0988-11ea-9d17-194a483417f8.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69008081-a6b0de00-0989-11ea-83e5-79e1686a6fe7.png">

## Convolutions Over Volume

<img width="720" src="https://user-images.githubusercontent.com/15076665/69008207-58044380-098b-11ea-9bd1-3d68f14c5943.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69008315-5f781c80-098c-11ea-8cac-2eb7f4b20997.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69008392-4d4aae00-098d-11ea-8704-2587619cd4a6.png">

## One Layer of a Convolutional Network

<img width="720" src="https://user-images.githubusercontent.com/15076665/69053028-d6281f00-0a4b-11ea-968e-9ebafbae738e.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69053204-374ff280-0a4c-11ea-9363-ad23c79bbd9d.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69053786-92361980-0a4d-11ea-8b77-86933180074f.png">

## Simple Convolutional Network Example

<img width="720" src="https://user-images.githubusercontent.com/15076665/69056158-b6e0c000-0a52-11ea-89b2-43af70334248.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69056790-02e03480-0a54-11ea-877b-7f32bdae41b5.png">

## Pooling Layers

<img width="720" src="https://user-images.githubusercontent.com/15076665/69058756-9830f800-0a57-11ea-99ed-2facd5b5f057.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69059062-286f3d00-0a58-11ea-82cd-86a298c1c40e.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69059521-0cb86680-0a59-11ea-9a69-fce314c4eae4.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69059791-923c1680-0a59-11ea-8870-afe40ed3901a.png">

## CNN Example

Pooling layer doesn't have any weights or parameters, just have hyper-parameter

<img width="720" src="https://user-images.githubusercontent.com/15076665/69242054-664c9c80-0be3-11ea-85fe-ce8c295f4641.png">


W[3]: weight matrix of fully connected layer
FC3: just a "fully connected" layer

<img width="720" src="https://user-images.githubusercontent.com/15076665/69243134-bb89ad80-0be5-11ea-86af-aaf970a59e31.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69243317-2aff9d00-0be6-11ea-82f4-7bb0746d196b.png">

## Why Convolutions?

Plus 1 (25 + 1 = 26) - bias parameter

<img width="720" src="https://user-images.githubusercontent.com/15076665/69244092-af065480-0be7-11ea-8eb8-2bd77faa22b3.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69245102-8d0dd180-0be9-11ea-825d-ef2e73761e56.png">

W, b are parameters of Conv and Pool layers

<img width="720" src="https://user-images.githubusercontent.com/15076665/69245334-fee61b00-0be9-11ea-8938-172522ad838d.png">

<img width="482" src="https://user-images.githubusercontent.com/15076665/69245831-ec201600-0bea-11ea-9374-e2830a2b02f3.png">

## Why look at case studies?

<img width="720" src="https://user-images.githubusercontent.com/15076665/69489350-3ee32180-0eba-11ea-9424-520c951cc898.png">

## Classic Networks

<img width="720" src="https://user-images.githubusercontent.com/15076665/69489641-b9ae3b80-0ebe-11ea-93ac-bf072ebe60da.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69489704-acde1780-0ebf-11ea-848a-8546d94dbba2.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69489807-a355af00-0ec1-11ea-9e1d-f9f739548b03.png">

## ResNet

<img width="720" src="https://user-images.githubusercontent.com/15076665/69490843-9ab8a500-0ed0-11ea-90eb-0361e576a839.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69490875-0ef34880-0ed1-11ea-9361-ed372c7987b9.png">

> Padding = Same: means the input image ought to have zero padding so that the output in convolution doesnt differ in size as input

> Padding = Valid: means we don't add the zero pixel padding around the input matrix, and its like saying, we are ready to loose some information

## Why ResNets Work

Add these two layers really doesn't hurt your neural network's ability to do as well as this simpler network without these two extra layers because it's quite easy for it to learn the identity function to just copy a[l] to a[l+2] using despite the addition of these two layers

The reason is it's so easy for these extra layers to learn the identity function that it's doesn't hurt the performance

Add one addition matrix Ws when input and output have different dimension

<img width="720" src="https://user-images.githubusercontent.com/15076665/69495701-35cf7000-0f0d-11ea-9d44-2c571232c741.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69495745-aa0a1380-0f0d-11ea-9497-f477a57d5282.png">

## Networks in Networks and 1x1 Convolutions

<img width="720" src="https://user-images.githubusercontent.com/15076665/69634789-54ad3e00-1096-11ea-86e8-5e295c0257ad.png">

Number channels of filter have to match with number channels of input
We use 1x1 conv to shrink nc (number channels) of the input

<img width="720" src="https://user-images.githubusercontent.com/15076665/69635031-d8ffc100-1096-11ea-8b0d-a364f015e588.png">

## Inception Network Motivation

<img width="720" src="https://user-images.githubusercontent.com/15076665/69636733-97711500-109a-11ea-8bf4-c062dfca0642.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69637170-76f58a80-109b-11ea-865e-9f6dd520403c.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69638299-c341ca00-109d-11ea-90d3-7bd8ff7cb9b3.png">

## Inception Network

<img width="720" src="https://user-images.githubusercontent.com/15076665/69727662-55150a00-1166-11ea-8c1f-65ceeb38971c.png">

Last layer in Inception network is fully-connected layer with softmax for the output

Side branches of Inception network will take some hidden layer and try to use that for making a prediction

It helps to ensure that the features computed even in the hidden units, even at intermediate layers, that they're not too bad for protecting the output case of the image, it appears to have a regularizing effect on the inception network and help prevent network from over-fitting

<img width="720" src="https://user-images.githubusercontent.com/15076665/69728556-fd779e00-1167-11ea-9f4c-ee4da7368f21.png">