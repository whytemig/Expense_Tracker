import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDefs from "./user_typeDefs.js";
import transactionTypeDefs from "./transaction_typeDefs.js";

const mergedTypes = mergeTypeDefs([userTypeDefs, transactionTypeDefs]);

export default mergedTypes;
