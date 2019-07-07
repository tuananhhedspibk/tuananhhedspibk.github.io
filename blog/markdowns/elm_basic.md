## Note about Elm knowledge that have learnt by myself

Learn from course [Elm For Beginners](https://courses.knowthen.com/p/elm-for-beginners)
References documentations:
https://elm-lang.org/docs/syntax

### Pure functions

- Pure function rules
  - Must have input parameter(s)
  - Must not use state
  - Must return value
  - Must not case Side Effects
- Advantage
  - Reusable
  - Composable: 
  - Testable: it means easy to test
  - Cacheable
  - Parallelizable

### State is like Radioactive Material

- Uncontrolled state
- Dirties your code
- Harder to work with

### Attention about commands of the new version of elm (0.19.0)

- **elm init** - initialize new project, this command creates elm.json file for us
- **elm.json** - Has the same meaning with package.json file
- **elm reactor** - to run server of elm application
- **localhost:port//file_name.elm**. Each of the file_name.elm files will have main function
- **elm repl** - turn on the elm console
- https://github.com/elm/compiler/blob/master/upgrade-docs/0.19.md - released note of 0.19.0 version

### Elm type

- Primitive Types: String, Bool
- Advanced Types: Record, Union Types
- Elm Static Type

The bad parts of static type in Java are
- Type declarations
- Slow compiling
- Cryptic error messages
- Still have Runtime errors

Elm eliminates the pain points
- Types are inferred
- Compiler is fast
- Errors are friendly and helpful
- No runtime exceptions

Role of the compiler
- Historically
  - Source code -> Binary or IL
- Elm:
  - Source code -> Javascript

Type annotations
- Just optional
- Function Type Annotation
  - For example: func_name : type -> type -> …
  - It just describes type of inputs, output
- Variable Type Annotation
  - For example: variable_name : type

### Parts of an Elm App

- An Elm App has three parts: model, update, view
- Update: There are 2 concerns in Update
  - What things can happen in our app? (what actions are possible?)
  - How do those things change the model?
- View: what should the view be considering the model?
- Html Tag function
  - tagName (div, p, button) : List(Attribute msg) -- id, class -> List (Html msg) -- child tags, -> Html msg

### Another attention
- Function Composition: newFunctionName = func1 >> func2
- Static Type System
  - Elm has Record type
  - Record fields must exist
  - Record field will never be null
  - record.fieldName = .fieldName record (get value of the record’s field)
  - { record | fieldName = value } - set value for field of record
- Union Types in elm
  - Like an Enumeration of Different Types
  - type SomeType =Type1 | Type2 | Type3
- **/=** is the same with **not (a == b)**

### Elm List
- We have two ways to display a list in Elm

```elm
linkedList = [ele1, ele2, ele3]
-- equivalent syntax
list = ele1 :: ele2 :: ele3 :: []
```

- Elm uses **++** or **::** to add new element to a list

```elm
newList = oldList ++ [newElement]
newList = newElement :: oldList
-- or
newList = oldList :: newElement
-- (depending on the order of the list)
-- for example
oldList = [ele1, ele2]
newList = oldList :: ele3
-- newList will be
newList = [ele1, ele2, ele3]

newList = ele3 :: oldList
-- newList will be
newList = [ele3, ele1, ele2]
```

### let in syntax

**let** these values be defined **in** this specific expression.
We use it when expression is getting large. Make a **let** to break
it into smaller expression and put them together **in** a smaller expression
