import { gql } from "@apollo/client";

export const LOGINUSER_USER = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      username
      email
      _id
    }
  }
`;
