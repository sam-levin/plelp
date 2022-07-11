const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }
  type Post {
    _id: ID
    title: String
    postText: String
    createdAt: String
    username: String
    replyCount: Int
    location: String
    replies: [Reply]
    city: [City]
  }
  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }
  type City {
    _id: ID
    cityName: String
    posts: [Post]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    city(_id: ID!): City
    cities: [City]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(
      postText: String!
      title: String!
      location: String!
      cityId: ID!
    ): Post
    addReply(postId: ID!, replyBody: String!): Post
    addCity(cityName: String!): City
  }
`;

module.exports = typeDefs;
