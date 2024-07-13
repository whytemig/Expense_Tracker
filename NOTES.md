### Packages that were installed

'''
express express-session graphql @apollo/server @graphql-tools/merge bcryptjs connect-mongodb-session dotenv graphql-passport passport mongoose cors nodemon
'''

### How do sessions work?

"
When a user logs in to a system and makes a login request to the server, the server will create a session and store it on the server’s local cache or in external storage (database).
Then, after finishing this process, the server responds to the client with a cookie.
The cookie usually contains a unique ID which is the session id and will be stored on the client browser for a limited time.
From this point, every request that will be sent to the server will include the browser cookies including the session cookie.
"

### About Express-session

"
Express-session is an HTTP server-side framework that can be used to create and manage a session middlewar
"

### Persisting session data

"
Store session data in a database is the most recommended method for authentification.
"

### Passport.js

"

### PASSPORT

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application."

"

Passport session acts as a middleware to alter the req object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object.
"

Understanding passport serialize & deserialize.

### SerializeUser

Determines which data of the user object should be stored in the session. The result of the serializeUser method is attached to the session as req.session.passport.user = {}

### DeserializeUser

Corresponds to the key of the user object that was given to the done function (see 1.). So your whole object is retrieved with help of that key. That key here is the user id (key can be any key of the user object i.e. name,email etc). In deserializeUser that key is matched with the in memory array / database or any data resource.

The fetched object is attached to the request object as req.user
"

### Graphql Package

It is the core GraphQL implementation in JavaScript.
It provides the functionality to define GraphQL schemas, parse and validate GraphQL queries, execute queries against a schema, and format responses.
graphql is not tied to any specific server or client framework; it's a standalone library that can be used in various JavaScript environments.

### Apollo Client

- Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

### Declarative Data Fetching

Apollo Client handles the request cycle from start to finish, including tracking loading and error states. There's no middleware or boilerplate code to set up before making your first request, and you don't need to worry about transforming or caching responses. All you have to do is describe the data your component needs and let Apollo Client do the heavy lifting.

```jsx
function ShowDogs() {
  //  The useQuery hook supports advanced features like an optimistic UI, refetching, and pagination.
  const { loading, error, data } = useQuery(GET_DOGS);
  if (error) return <Error />;
  if (loading) return <Fetching />;

  return <DogList dogs={data.dogs} />;
}
```

### Caching a graph

```jsx
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
});
```
