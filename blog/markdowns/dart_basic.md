# Dart Basic

Source of background: https://medium.com/@krossovochkin/dart-language-bad-design-choices-6e35987dc693

## Basic concepts

Same with **Java**, Dart also has constructor for class which is the special function (method) has the same name with class name.

In Dart we have **Map** (same with **object** in **javascript**)

**Const variable** and **const value**

- **Const Variable**: all objects are stored in memory by Dart, Dart stores in the variables are the pointers at the object memory, so address object in memory. Instead of bringing object to every place (take up a lot of memory). Dart stores the object only once somewhere and then only takes the address in the memory (the same when we pass pointer of function to Widget constructor). When we define a variable as constant (it implicitly also treats the value of that variable as constant)

- **Const value**: if we use normal variable with constant value, we could assign a new value to that variable
Actually we store address in the variable instead of value
With a constant value we can't add, delete or modify it

**final** and **constant**:
- We use **final** if a value doesn't change from the point of time when program runs, when we write code, we don't know the *final value*, it's a runtime constant value, at the point of time this code executes, we lock final value
- **const** mean compile time const, when writing code if you know the value of the variable will never change, then of course, it will also never change during runtime

**null** value in Dart - used in **uninitialized state**

Dart **doesn't** allow **constant variable at class level**, but it **can** be **if variable is a static variable**

**getter** in Dart: special type, mixture of property and method
- Type get name - dont add (), we add body {
	return 
} - method not receive param, use it like a property


**Class _MyState** -> same with private class in java
- We can add **_** before property or method to make its can be accessed in current file

...List (**...** operator) will pull all elements of List to surrounding List as individual values

We can have a different way to define constructor of class in dart

```dart
ClassName.constructor_name() {}
```

We can use **${variable}** syntax to embed variable's value into a string (called *string interpolation* - Dart will automatically calls **toString()** for us)

```dart
"${tx.ammount}"
```

**$** symbol has a special meaning in Dart, so if you want to treat it like a normal character of string, must use this syntax **"\$"**

With **List** in Dart, we have **where** function, it is same with **filter** function in javascript

## Lexical scope

- Scope is defined statically
- We can *follow the curly braces outwards*

## Lexical closures

- A closure is a function object that has access to variables in its lexical scope, even when the function is used outside of its original scope.

```dart
Function makeAdder(num addBy) {
  return (num i) => addBy + i;
}
```

**Future.then(() {});** the function that we passed to **then()** will be stored in memory until Future value is available
