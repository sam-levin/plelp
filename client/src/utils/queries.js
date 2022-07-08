import { gql } from "@apollo/client";

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
        replyBody
      }
    }
  }
`;

// this gets all posts from a city
export const QUERY_POSTS = gql`
  query allPosts($city: String!) {
    city(name: $city) {
      post {
        postText
        createdAt
        replyCount
        username
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
      post {
        _id
        postText
        createdAt
        replyCount
      }
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query locations($city: String!) {
    location(city: $city) {
      content
      post {
        title
        username
      }
    }
  }
`;
