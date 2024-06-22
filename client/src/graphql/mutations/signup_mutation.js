import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation Mutation($input: SignupInput!) {
    signup(input: $input) {
      _id
      username
      name
      email
    }
  }
`;
