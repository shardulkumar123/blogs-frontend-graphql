import { gql } from "@apollo/client";

export const Get_All_Blogs = gql`
  query GetAllPosts {
    getAllPosts {
      id
      title
      body
      created_at
    }
  }
`;

export const Get_Blog = gql`
  query GetPost($id: String!) {
    getPostById(id: $id) {
      id
      title
      body
      created_at
    }
  }
`;

export const Get_User_Post_Blogs = gql`
  query GetPostByUser {
    getPostByUser {
      body
      id
      title
      created_at
    }
  }
`;
