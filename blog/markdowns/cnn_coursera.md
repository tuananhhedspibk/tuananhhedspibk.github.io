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
