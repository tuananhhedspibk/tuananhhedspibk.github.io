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

## Tips & Tricks

- In flutter it will be helpful when we see the beginning of the error message
