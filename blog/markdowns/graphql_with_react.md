# GraphQL with React

Reference from course: https://www.udemy.com/course/graphql-with-react-course/

- When query with the data that has a lot of relationships to each other, sometimes we have to break the RESTful convention

- We can look at GraphQL just like **a graph**, with records equivalent to graph's nodes. Let's look at the below image

We have **Root query**, you can think it as an entry of our graph

**resolve function** purpose is to say, I will go to database and find data for you

We can also use **fragment** to define the common structure of data that we want to pick it out from database, but remember that we can only use it for **query** not **mutation** or **subscription** in **graphql**

```javascript
  fragment FRAGMENT_NAME on MODEL_NAME {
    properties...
  }
```

About Apollo:
- Apollo store: store of data on the client side, it doesn't care about view-side (ex: what framework or library that we use on client side)
- Apollo provider: connect Apollo store and client-view (react app), takes data from store and inject into react app
- Apollo client will directly interact with graphql-server to send query or fetch the data and store it on the client-side

<img src="https://user-images.githubusercontent.com/15076665/70850085-bc062300-1ec9-11ea-8bfd-2d0b20167eac.png" width="720">

> Because it takes some times to execute the query so our component will be rendered two times

- Cold cache: we want auto reload

<img src="https://user-images.githubusercontent.com/15076665/70908855-9145d700-204f-11ea-947b-5d71ea94ff5b.png" width="300">

- Warm cache

<img src="https://user-images.githubusercontent.com/15076665/70908880-a1f64d00-204f-11ea-8289-6b66c57c9e42.png" width="400">

<img width="460" src="https://user-images.githubusercontent.com/15076665/71176575-7d97ac00-22ad-11ea-8d3b-ac4316cd38ee.png">

Apollo knows which bucket (Songs or Lyrics) to store fetched data into it, so each item has "__typename" property, Apollo will base on that to know the suitable bucket for correspond item.

Apollo has no idea about property of each records are being stored inside it

- Optimize response

<img width="500" src="https://user-images.githubusercontent.com/15076665/71301597-5ee80100-23e4-11ea-8ef4-4f71f953993a.png">

> By default graphql requires at least one field available for every single defined type

In **GraphiQL**, when we issue a query, a request includes **query** and **cookie** will be sent to a backend (server).
But in a normal client, there is **no cookie** is sent to backend. So even you have logged in at **GraphiQL** you still can't get the **current user** at other site in your client app.

> By default, graphQL does not send along cookies

ApolloClient can have **a networkInterface**, so when we send a request to our backend, we'll tell **ApolloClient** that take **some cookies** to send along with the request