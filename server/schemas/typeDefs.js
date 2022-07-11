const { gql } = require("apollo-server-express");

// Because this is MVP, Reply type, mutation, and references removed for simplicity/ease of erorr checking 
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
    city: [City]
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
    addCity(cityName: String!): City
  }
`;

module.exports = typeDefs;
