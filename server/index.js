import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import userTypeDefs from "./typeDefs/user_typeDefs.js";
import mergedResolvers from "./resolvers/mergeIndex.js";
import mergedTypes from "./typeDefs/mergeIndex.js";

const server = new ApolloServer({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`server at ${url}`);
