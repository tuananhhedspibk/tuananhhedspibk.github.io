## Elixir Basic

### Data types in Elixir

- tuple: Elixir uses curly brackets to define tuple, just like a list, tuple can hold any value

```elixir
{:ok, "hello"}
# :ok - the atom data type, same as the symbol of ruby
```

- list: List is stored in memory like a linked list, each element of list holds its value and points to the following element until reaches the end of the list

```elixir
list = [1, 2, 3]
```

- map: In elixir **map** is same with hash in ruby

```elixir
map = %{a: 1, b: 2}
```

- struct: Struct is extension of map, with struct we can define default value for each properties

```elixir
defmodule User do
    defstruct name: "John", age: 27
end
```

### Everything is module

- Below is the syntax is used to define module

```elixir
defmodule module_name
end
```

- Attention on **functional programming**
- **NOT OBJECT ORIENTED PROGRAMMING**
- **Immutable** - we not ever modify existed data in Elixir

### Some useful functions

```elixir
Enum.split(input, hand_size)
# input is a list or an array
# return value: { my_hand, the_rest } -> tuple
# my_hand 's index is alway 0, the_rest 's index is 1

list ++ another_list
# join lists together

# Pattern Matching
[first, second | _tail] # we know the exist of the rest elements but we don’t care about its

{ele1, ele2} = tuple
```

### Testing

- Elixir test module will read not only docs of functions but also **Example** path of it to check the code of the function

- Test type:
  - Doctest: Test function by its doc
  - Casetest: **assert / refute** (opposite with **assert -> NOT EQUAL**)

### Some useful commands

```shell
$ mix phoenix.new
$ mix ecto.create
$ mix phoenix.server
$ mix ecto.migrate
$ mix ecto.gen.migration add_model_name
$ iex -S mix

# From phoenix1.3 "phoenix" pattern in commands will be changed to "phx" pattern
```

### Websocket (to be continue)