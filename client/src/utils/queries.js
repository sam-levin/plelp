import { gql } from '@apollo/client';

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replybody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postText
        createdAt
        reactionCount
      }
    }
  }
`;

