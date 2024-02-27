import { gql } from "@apollo/client";

export const UserLogin = gql`
  mutation CreateLoginToken($email: String!, $password: String!) {
    createLoginToken(email: $email, password: $password)
  }
`;
