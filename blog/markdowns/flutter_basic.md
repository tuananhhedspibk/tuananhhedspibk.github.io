# Flutter Basic

- Reference from [course](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)

Flutter is a tool that allows you to build **native cross-platform** app iwht **one programming language**

Flutter contains:
- SDK: tool to compile code to native machine code
- Framework/ Widget library (Widget = Re-usable UI building blocks)

Flutter Architecture:
- UI as Code approach: Build a Widget Tree
- In Flutter, Everything is a Widget
- One codebase (Dart code)
- Embrace Platform Differences: can know about mobile's platform

How is Flutter/ Dart "transformed" to a Native App?
- Flutter has *Flutter SDK* which will compile **Dart Code** to **native code (Java, Kotlin, objective-c)** and optimize performance for your dart code (it depends on SDK version too)

Flutter **does not** use Platform primitive
- Flutter has an engine to control every pixels on the screen, you have full control over how you want to build your UI