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
  _id: ID
  posts: [Post]
  name: String
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
  cities: [City]
  city(name: String!): City
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addPost(postText: String!): Post
<<<<<<< HEAD
  addReply(postId: ID!, replyBody: String!): Post
=======
  addReply(postId: ID!, reactionBody: String!): Post
>>>>>>> bdaf5ea175cce9deabc5860550c6412320ad6d7b
}
`;

module.exports = typeDefs;
