//SERVER
import express from "express";
import http from "http";
import cors from "cors";
//AUTH-SESSION
import session from "express-session";
import passport from "passport";
import connectMongoDBSession from "connect-mongodb-session";
//APOLLO
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import mergedResolvers from "./resolvers/mergeIndex.js";
import mergedTypes from "./typeDefs/mergeIndex.js";
//MONGO CONNECTION
import connectDB from "./database/_db.js";
//GRAPHQL-PASSPORT
import { buildContext } from "graphql-passport";
import dotenv from "dotenv";
//import without variable for side effects only
import "./passport/passport.js";

dotenv.config();

// Required logic for integrating with Express
const app = express();

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

const MongoDBStore = connectMongoDBSession(session);

const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});
//error handling
store.on("error", (error) => console.log(error));

app.use(
  session({
    secret: process.env.MY_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 3,
      httpOnly: true,
    },
    store: store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req, res }) => {
    buildContext({ req, res });
  },
});

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

app.use(
  "/",
  cors({
    origin: "http://localhost:4000",
    credentials: true,
  }),
  express.json(),
  expressMiddleware(server)
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDB();
console.log(`🚀 Server ready at http://localhost:4000/`);
