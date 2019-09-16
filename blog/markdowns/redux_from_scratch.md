Redux from scratch

- Reference from source: https://levelup.gitconnected.com/learn-redux-by-building-redux-from-scratch-dcbcbd31b0d0
- Banner source: https://blog.novoda.com/introduction-to-redux-in-flutter/

I have summarized some concepts about Redux in [here](https://github.com/learndeeplearningbymyself/TIL/issues?q=is%3Aopen+is%3Aissue+label%3AArchitecture)

## 1. Overview

Redux is used to store application state. The application state consists of two key inputs:
- Data sent from the server
- User interaction with UI/ application

State is just a plain JS object. Redux manages states by **store** and the store also provides methods to update, read state

<img src="https://user-images.githubusercontent.com/15076665/64959465-25c36080-d8cc-11e9-8cdd-78bbf860d24b.png" width="720">

At the core of Redux is PubSub (publisher/ subscriber) pattern, similar to the event driven architecture

Base on **type** and **payload** of action, state will be updated

Components can be subscribed to state changes and will update the UI based on the the new state tree.

## 2. Three core principles of Redux

- **Single source of truth** - The entire state of the UI is derived from a single object
- **State is read only** - State can only be changed when emitting an action (the publish)
- **Changes are made with pure functions** - The state is not updated directly. The reducer function takes **previous state** and create new object of state base on **previous state** and **action object**

By breaking the state into discrete steps, a developer is able to pinpoint exactly what is happening in the application