import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user_resolver.js";
import transactionResolver from "./transaction_resolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

// the mergeresolver function was recommended in order to keep the resolver file more easier to read.

export default mergedResolvers;
