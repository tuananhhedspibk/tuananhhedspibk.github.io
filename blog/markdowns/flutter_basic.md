# Flutter Basic

- Source of banner image: https://levelup.gitconnected.com/flutter-to-build-ios-android-apps-f8786d6fe987
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

With StatefulWidget, **build()** is called when **setState** called, after state is updated we will have a new StatefulWidget to replace the old Widget that we are using, but state object is not replaced instead it is updated

After **build()** called, the Widget tree is built again. Element hold some information on how to identify their related widget (position, its childs), store information about skeleton of Widget tree

Element knows which kind or which type of widget it was connected to
Flutter will check widget position in Widget tree if widget consists, Flutter will update reference of element to new widget

After that element passes *changed* information to render object so **render object** cand re-render on screen

Flutter will not re-render the whole screen, it will check which parts on the real screen to be updated

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

**FittedBox** forces its childs to available space

In **Flexible Widget** we have **fit** property and **FlexFit** enum
**FlexFit** enum has two values:
- **loose** - take as much space as fit it childs
- **tight** - it only takes as much space as fits in there without squeezing any items off the screen, so we will not see black/ yellow warning marker. If we use **flex** property (default value is 1), the value of flex notices us that this Widget will take ~ part amongs **tight** elements

We also have **Expanded** Widget, it sames with **Flexible** that has **fit: FlexFit.tight**

**ListTile** widget often is used in conjunction with lists but you don't have to use it in conjuction
- ListTile - leading: first widget

In state class of **StatefulWidget** we have **global context object**

In **Theme** we have default **errorColor is red**

## Responsive & Adaptive UIs

Adaptive means you adapting your UI with different OS(s)

<img src="https://user-images.githubusercontent.com/43769314/62917624-ef2f8d00-bdd7-11e9-8f1f-45a44a8121e4.png" width="720">

By One Codebase, One Widget Tree, depending on platform, we create different Sub-Trees / Widget (for iOS and Android)

## Constraints

Define how a widget is rendered on the screen, set by height, width
If you don't set it, default values will be used by Flutter

<img src="https://user-images.githubusercontent.com/43769314/62920860-e8a61300-bde1-11e9-9d29-f0f92ed2453e.png" width="720">

Don't use **{}** in *if inside of a list* syntax

```dart
if (condition) handle
```

Flutter aims to give you a 60fps application, so it updates the screen 60 times per second (mean frame is re-drawed 60 times per second)

## Widget Tree, Element Tree, Render Tree

- Widget Tree is controlled by your code, immutable
- Element & Render Tree is controlled internally by Flutter

<img src="https://user-images.githubusercontent.com/15076665/62946305-66d2db80-be1b-11e9-9e6b-54b5dd17878a.png" width="720">

**setState()** is called when theme or **MediaQuery** has changed, **MediaQuery** also holds the information about **viewInset**

We use **builder** when we want to build Widget dynamically

## const constructor & const widget

**const constructor** - if a class have this type of constructor, the instance that is created from class will be unchangeable, use to notice that all properties of this instance is **final** (means can not change it)

We do not use Widget objects like normal objects, we use them to pass onto the **Widget Tree**

When the **build()** method runs, all the widgets of Widget tree are placed, not be changed

If we know data pass to Widget will never be changed, we can use **const** before that Widget in **WidgetTree Code**, we use that to tell Flutter **doesn't need to rebuild this Widget anymore**

By this way, we can improve the performance of our apps with tiny changes

## Good Code

Has two types
- **Readability / Understandability**
- **Performace** 

If MediaQuery content usually changes, you should put it into separate Widget to **prevent recall build()** method as much as possible

Attention that **MediaQuery** 's **type** is **MediaQueryData**

## Widget Lifecycle

With **Stateful Widget** **initState** is implemented by **State Class**

**didUpdateWidget** method have **oldWidget** argument - it's a previous Widget, this method is called when Widget changes

**dispose()** is called when Widget is destroyed, so we use it to clean up data, listener, life connection

Image for **Widget lifecycle**

<img src="https://user-images.githubusercontent.com/43769314/62992786-d4205400-be8f-11e9-8b60-c9e2ab434e25.png" width="720">

**initState()** is often used for fetching some initial data you need in your app, is called before **build()** so do not use **setState** in **initState**

**didUpdateWidget()** is not usually used, we use it if we know something changed in parent widget and we need to refetch data in our state

## App lifecycle

<img src="https://user-images.githubusercontent.com/43769314/62996237-ea81dc00-be9e-11e9-88ff-846fb44d7b10.png" width="720">

**Mix-in** not the same as extends, you can use some methods or properties from another class (not all) - the other way for **multiple inherrit** (same with **ruby**)

**didChangeAppLifecycleState** is called when lifecycle state changes

## Understanding context

**MediaQuery** and **Theme** use **InheritedWidget** behind the scenes
context knows about the general structure of widget tree, so it can directly access any other widget without passing data through arguments

Flutter uses **InheritedWidget** to get data of **MediaQuery** and **Theme** it useful for Flutter establish behind the scenes channel to exchange data between widgets in **Widget Tree**

## About key in Flutter

Every Widget in Flutter has a key

We need key when this is **topmost** - **stateful** item of list

We use **super()** to instantiating the parent class if we want to pass extra data to parent class
Key makes Flutter identify widget easier

With **StatefulWidget** state object is attached to Element **not Widget**

## GridView

Sliver in Flutter are really just scrollable areas on the screen
**gridDelagate** takes care about structuring, layouting the grid

## Navigation in Flutter Apps

Pages are managed as a Stack, Top-most Page is visible. So we can **pushing** or **poping** page
- Push: when navigate to new page
- Pop: when get out of page

<img src="https://user-images.githubusercontent.com/43769314/63011230-dfd93e00-bec2-11e9-9b81-0a3e5f453228.png" width="720">

## Named Routes

- Just like a route system in web app
- In a bigger app, it can be easier to manage because you have a list of available routes
- Make your app become more cleaner
- We will use **pushNamed** instead of **push** in this case

home (in MaterialApp) **always also has an automatically named route** which is just slash **(/)**
- **onGenerateRoute** is reached if you are going to a named route with **pushNamed**, that is not registered in the routes table, usually used in highly dynamic application, the function that you pass to it should return a **Route**
- **onUnknownRoute** is reached when Flutter failed to build a screen with all other measures so if you don't use **onGenerateRoute**, before throwing an error, Flutter will try to use **onUnknownRoute** to show something on the screen (same as 404 page of website)

## ClipRRect

Use other widget as a child and force it into a certain form

## Tab Screen

**DefaultTabController** and **TabBar** here are automatically connected by Flutter behind the scenes, so **DefaultTabController** will automatically detect which tab you selected and then show the right content for that tab. Content is passed to **TabBarView** - this is used for **Default Tab Bar**

The way you add **Tab** is the **same** with you add **Screen**

But if you want to use **Bottom Tab Bar**, don't need to use **DefaultTabController** or **TabBarView**, just using **bottomNavigationBar** property of **Scaffold**, very easy

## Drawer

Backdrop is behind Drawer

**context** is globally in **State class** but not in **initState**, because it is runned before **build**, too early

**didChangeDependencies** is called when state change in here we can tap into context

## Tips & Tricks

Passing data via constructors can be **cumbersome** and **dificult**

## State & State Management

State = Data which affects the UI. We have two kinds of state
- App-wide State: affect entire app, authenticated
- Widget (local) State - affects only a widget on its own, Form Input

<img src="https://user-images.githubusercontent.com/43769314/63145818-ce637380-c033-11e9-8488-1fc76d6f74ab.png" width="720">

We can do this

```dart
Provider.of(context)
```

to set up a direct communication channel behind the scenes

If we use

```dart
Product.of<Generic>(context)
```

**build()** method will be re-runned whenever data changes. But we could alyways want to have a case where we only want to run a subpart of our widgets treen when some thing changes, then we can only wrap the subpart of the widget tree that depends on your product data with that listener

In that case we can use **Consumer**, **Consumer** always listens to changes

If we want to rebuild only a part of the widget tree not the whole tree, have to set up a part of tree as a listener not the majority tree

Do not use the **Provider** if you want to change only inside widget 's state

**TextEditingController** saves user input automatically

If you work with your own **FocusNode** you must **dispose()** all of those in **class dispose() method**

We can not use both **TextEditingController** with **initialValue** for **TextFormField**

In **initState()** all **of(context)** doesn't work but if we use with **Provider** and **listen: false**, we don't get any problems and the solution is **Future.delayed()**

```dart
Future.delayed(Duration.zero).then((_) {
    Provider.of<Products>(context).func();
});
```

We could **fetch server data** in
- **initState()** function
- **didChangeDependencies()** function (run more often than **initState**)
