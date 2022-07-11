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

export const QUERY_ALL_CITIES = gql`
  query cities {
    cities {
      _id
      cityName
    }
  }
`;

// this gets all posts from a city
// export const QUERY_POSTS = gql`
//   query allPosts($city: String!) {
//     city(cityName: $cityName) {
//       posts{
//         postText
//         createdAt
//         replyCount
//         username
//       }
//     }
//   }
// `;

export const QUERY_CITY = gql`
  query city($cityId: ID!) {
    city(_id: $cityID) {
      city {
        _id
        posts{
          _id
          title
        }
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
