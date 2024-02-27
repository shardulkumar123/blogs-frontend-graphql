import { gql } from "@apollo/client";

export const Get_All_Blogs = gql`
  query GetAllPosts {
    getAllPosts {
      id
      title
      body
      slug
    }
  }
`;
