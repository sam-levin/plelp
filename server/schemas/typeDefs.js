const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  posts: [Post]
}
type Post {
  _id: ID
  city: City
  postText: String
  createdAt: String
  username: String
  replyCount: Int
  replies: [Reply]
}
type Reply {
  _id: ID
  replyBody: String
  createdAt: String
  username: String
}
type City {
  cityName: String
  _id: ID
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
  allPosts (cityName: String!): [Post]
  cities: [City]
  city(cityName: String!): City
  locations: String!
  postByCity(cityName: String!): Post
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addPost(postText: String!): Post
  addReply(postId: ID!, replyBody: String!): Post
}
`;

module.exports = typeDefs;
