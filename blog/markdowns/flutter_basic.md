# Flutter Basic

- Source of background image: https://levelup.gitconnected.com/flutter-to-build-ios-android-apps-f8786d6fe987
- Source of images have beeen used in this post is: https://www.udemy.com/learn-flutter-dart-to-build-ios-android-apps/
- Content of this post is referenced from [course](https://www.udemy.com/learn-flutter-dart-to-build-ios-android-apps/)

## Basic concepts and notations

- **@required** - make argument become require, not optional - but this is not dart feature
- **@override** provided by Dart
- **double.infinity** by default is width of device
- We can call flutter functions because we have connection by pubspec.yaml file (same role with package.json in Javascript project)

## App life circle functions

**main()** is a starting point of dart application, it will be called first when app start

**MaterialApp()** does some base setup to turn combination of widgets into real app that can be rendered

**home argument** in **MaterialApp()** is core widget which Flutter will bring onto screen when app is mounted into screen

**runApp()**: used to run app, take out the Widget tree and draw onto the screen

**build()** function is always called when Flutter want to rebuild interface of app

Flutter will provide content for **context object** of **build method** and build method must return a **Widget object**, context object hold a metadata about widget (position in widget tree or in application and so on ...)

## Widgets

Different types of widgets:
- **Visible** (output, input): **Text()**, **Card()** - Drawn onto the screen : 'What the user sees'
- **Invisible** (Layout & Control): **Row()**, **Column()**, **ListView()**: can not see its but helps us to construct our content - control how visible widgets are drawn onto the screen
  - **Column()** will make widgets stack vertically to each other
  - **Row()** will make widgets stack horizontally
  - **Container()** is the both types - default it is Invisible type but you can style for it
  - **Column()** will take available height of view-port

<**Widget**>: generic type

**Text** component has width base on its content

**PreferredSizeWidget** - just a special kind of widget

**Scaffold** has job create base page design, it will give you a basic design and structure and color scheme

## Stateful and Stateless Widget

Every widgets in Flutter must be extended from **StatelessWidget** or **StatefulWidget** 

<img src="https://user-images.githubusercontent.com/43769314/62666680-5526a980-b9bf-11e9-8bb0-43735c14563c.png" width="720">

**Stateless**: input data -> widget -> render ui (widget will be re-render when input data change), data inside stateless widget will never be changed

**Stateful**: input data -> widget (internal state) -> render ui (get re-render when input data or local state changes)

Widget in Flutter can be recreated. With **StatefulWidget**, we have two classes
- The first one is Widget which extends from StatefulWidget
- The second one is State (persistent)
- The reason why that we have two classes is Widget can be re-created so if states is stored in the Widget class, its will be reseted when Widget is re-created

## State

State in general is data/ information used by app
- App state
- Widget state

**setState()** function forces Flutter re-render widget

**Lifting state up** - the way you manage state by on the shared, on the common denominator

## Argument

**Named Argument** - Example: home: Text()
  - We can also use {} in method arguments (named argument - optional argument)
  - With **non-named** arguments we have to remember the order of the arguments, it will be difficult with 10 or more arguments
  - With **named argument** we can simply use the name to assign it without the remember of the order 

**Positional argument** - arguments list without {} - when method has only one argument, it better to be a positional argument

We can also provide the default value for argument too

## Styles

In Flutter we style for elements, widgets **through arguments**

<img src="https://user-images.githubusercontent.com/15076665/62819872-4fcf8780-bb96-11e9-8452-2a7f772e3ff5.png" width="720">

For text's style we use **TextStyle()**

## Tips & Tricks

- In flutter it will be helpful when we see the beginning of the error message
- Use the code below to close the most top screen
```dart
Navigator.of(context).pop();
```
- **widget** object is the connection between **Widget** and **State** (StatefulWidget), **context** gives you access to the context related to your widget

## Container vs Column / Row

- Container - Takes exactly one child widget
  - Rich aligment & styling options
  - Flexible widget, set width on container
  - Perfect for custom styling & alignment
- Column / Row: Takes multiple (unlimited) child widgets
  - Aligment but no styling options
  - Always takes full available height (column) / width (row)
  - Have no extra options or arguments you can set on column and row

## Scroll View

Flutter tries to always scroll the input, to make input can never be below that soft keyboard, that why the height of text field is always added as a padding above the soft keyboard

## ListView

ListView can not have a fixed height, has a infinite height
It's Scrollable
If we combine **ListView** with **Column** it can be horrible, because **Column** itself gets all height that it can get, but **ListView** has a infinite height so it becomes **no limit**

So we need to wrap **ListView** with **Container** to know how high it should be in this case

```dart
Container(
  height: 300,
  child: ListView()
)
```

There are two ways of using **ListView**

```dart
ListView(children: [])
ListView.builder()
```

The difference between them is when you load a lot of items, **ListView.builder()** have some optimizations put in place by Flutter, **builder** only render **visible items**
But when you pass children as argument to **ListView** constructor, all the widgets that are part of the ListView are rendered even if they're offscreen

So if you then scroll a long list you can have lags or bad performance because Flutter has to manage all these items in memory

<img src="https://user-images.githubusercontent.com/15076665/62853147-64db2080-bd26-11e9-92bd-f2393d9c2256.png" width="720">

With **builder()**

```dart
itemBuilder() // called by flutter
```

## SizedBox

Allow us to add a **Box** with **specific size**. Usually is used as separator
