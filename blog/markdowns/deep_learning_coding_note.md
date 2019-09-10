# Note about coding deep learning

Reference:
- https://www.coursera.org/learn/neural-networks-deep-learning/home/welcome**
- https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html

In fact, if x=(x1,x2,...,xn) is a row vector then np.exp(x) will apply the exponential function to every element of x

In computer science, an image is represented by a 3D array of shape (length, height, depth = 3). However, when you read an image as the input of an algorithm you convert it to a vector of shape (length * height * 3, 1). In other words, you "unroll", or reshape, the 3D array into a 1D vector.

It often leads to a better performance because gradient descent converges faster after normalization

Broadcasting provides a means of vectorizing array operations so that looping occurs in C instead of Python. It does this without making needless copies of data and usually leads to efficient algorithm implementations

Common steps for pre-processing a new dataset are:

- Figure out the dimensions and shapes of the problem (m_train, m_test, num_px, ...)
- Reshape the datasets such that each example is now a vector of size (num_px * num_px * 3, 1)
- *Standardize* the data


The main steps for building a Neural Network are:

1. Define the model structure (such as number of input features)
2. Initialize the model's parameters
3. Loop:
  - Calculate current loss (forward propagation)
  - Calculate current gradient (backward propagation)
  - Update parameters (gradient descent)

- The weights W[l] should be initialized randomly to break symmetry.
- It is however okay to initialize the biases b[l] to zeros. Symmetry is still broken so long as W[l] is initialized randomly.
- Initializing weights to very large random values does not work well.
