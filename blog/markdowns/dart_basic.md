# Dart Basic

Source of banner: https://medium.com/@krossovochkin/dart-language-bad-design-choices-6e35987dc693

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

- The same syntax like Java. OOP Language
- Everything in dart is object
- Although Dart is strongly typed, type annotations are optional because Dart can infer types
- Unlike Java, Dart doesn’t have the keywords **public**, **protected**, and **private**.
- If an identifier starts with an underscore (_), it’s private to its library
- Uninitialized variables have an initial value of null. Even variables with numeric types are initially null, because numbers—like everything else in Dart—are objects.
- Variables store references
- If an object isn’t restricted to a single type, specify the **Object** or **dynamic** type
- **@override** provided by Dart
- In Dart we have **Map** (same with **object** in **javascript**)
- Same with Java, Dart also has constructor for class which is the special function (method) has the same name with class name.
- **null** value in Dart - used in uninitialized state
- Dart **doesn’t allow** constant variable at **class level**, but it can be if variable is a **static variable**
- Do not confuse between **Map** and **Object** in Dart. In Dart **Object** is the instance of the class

## Anonymous functions

- Same with javascript
- Can be assigned to a variable
- NO NAMED

## Mixin and Class

With **mixin** you can share properties or methods but less of a strong connection, just like utility functions provider

```dart
mixin Agility {
   var speed = 10;
  
  void sitDown() {
    print('Sitting down...');
  }
}

class Mammal {
  void breathe() {
    print('Breathe in ... Breathe out ...');
  }
}

class Person extends Mammal with Agility {
  String name;
  int age;
  
  Person(this.name, this.age);
}

void main() {
  final pers = Person('Max', 30);
  print(pers.name);
  
  pers.breathe();
  pers.sitDown();
  print(pers.speed);
}
```

## Deep Dive With Future

Basically in Dart **Future is a generic type**

```dart
Future<Type>
```

**catchError** will catch all errors **before it not after it**

```dart
void main() {
  var result = 1 + 1; // this is available immediately

  var myFuture = Future(() {
     return 'Hello';
  }); // not stop dart code executing until this Future job done
  
  print('This runs first!');
  myFuture
    .then((result) => print(result))
    .then((_) {
      print('After first then!');
    })
    .catchError((err) {
      print(err);
    });
  print('This also runs before the future is done!');
}
```

If we use **async** key word, all the code inside a function will be automatically wrapped by the **Future**

```dart
Future<void> functionName(params) async {
  // code inside here are automatically wrapped by Future object, so we do not need to use return keyword here
}

var myFuture = Future(() {
     return 'Hello';
  }); // not stop dart code executing until this Future job done
  
  print('This runs first!');
  myFuture
    .then((result) => print(result))
    .then((_) {
      print('After first then!');
    })
    .catchError((err) {
      print(err);
    });
  print('This also runs before the future is done!');
}
```

If we use **async** key word, all the code inside a function will be automatically wrapped by the **Future**

```dart
Future<void> functionName(params) async {
  // code inside here are automatically wrapped by Future object, so we do not need to use return keyword here
}
```

**..** notation will not return result the of method is used with it, it will return the result of method before

```dart
Matrix4.rotationZ(-8 * pi / 180)
  ..translate(-10.0), // return the result of rotationZ not translate
```

**try**, **catch**, **on** - with **on** we can specify exactly **what type of error**

```dart
try {
  // code
} on HttpException catch (error) {
  // handle error
}
```

```dart
import 'dart:io';
// to use File type
```
