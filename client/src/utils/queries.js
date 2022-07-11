import { gql } from "@apollo/client";

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      title
      username
      location
    }
  }
`;

export const QUERY_ALL_CITIES = gql`
  query cities {
    cities {
      _id
      cityName
    }
  }
`;

export const QUERY_CITY = gql`
  query city($id: ID!) {
    city(_id: $id) {
      _id
      cityName
      posts {
        _id
        title
      }
    }
  }
`;

// export const QUERY_CITY = gql`
// query city($cityName: String!) {
//   city( cityName: $cityName){
//       _id
//       cityName
//       posts {
//         _id
//         title
//       }
//     }
//   }`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
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