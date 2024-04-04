import { gql } from "@apollo/client";

export const UserLogin = gql`
  mutation CreateLoginToken($email: String!, $password: String!) {
    createLoginToken(email: $email, password: $password)
  }
`;

export const UserSignUp = gql`
  mutation CreateUser(
    $firstName: String!
    $email: String!
    $password: String!
    $lastName: String
  ) {
    createUser(
      firstName: $firstName
      email: $email
      password: $password
      lastName: $lastName
    )
  }
`;

export const CreatePost = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body)
  }
`;
