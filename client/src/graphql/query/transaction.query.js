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
