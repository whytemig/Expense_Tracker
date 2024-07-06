import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query Transactions {
    transactions {
      _id
      userId
      amount
      description
      category
      paymentType
      date
      location
    }
  }
`;

//GET TRANSACTION BY ID
export const GET_TRANSACTIONS_BY_ID = gql`
  query Transaction($transactionId: ID!) {
    transaction(transactionId: $transactionId) {
      _id
      userId
      amount
      description
      category
      paymentType
      date
      location
    }
  }
`;

//GET TRANSACTION BUT IN AN OBJECT FORMAT FOR CATEGORIES AND AMOUNT

export const GET_CATEGORIES = gql`
  query Query {
    categoryTallies {
      category
      amount
    }
  }
`;
