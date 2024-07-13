//Type Definition for Transactions with the relation to Category for the Chart

const transactionDefTypes = `#graphql
type Transaction{
    _id: ID!
    userId:ID!
    amount:Float!
    description:String!
    category:String!
    paymentType:String!
    date:String!
    location:String
}

type CategoryTally{
    category:String!
    amount:Float!
}

type DeleteResponse{
    message: String!
}


type Query{
    transactions:[Transaction!]!
    transaction(transactionId:ID!):Transaction
    categoryTallies:[CategoryTally]
}
type Mutation{
    createTransaction(input: TransactionInput!):Transaction!
    updateTransaction(input:UpdateTransactionInput!):Transaction!
    deleteTransaction(transactionId:ID!):Transaction!
    deleteAllTransactions:DeleteResponse!
}




input TransactionInput{
    description:String!
    paymentType:String!
    category:String!
    amount:Float!
    date:String!
    location:String
}

input UpdateTransactionInput{
    transactionId:ID!
     description:String
    paymentType:String
    category:String
    amount:Float
    date:String
    location:String
}
`;

export default transactionDefTypes;
