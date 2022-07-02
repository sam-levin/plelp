const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
_id: ID
username: String
email: String
posts:[Post]
}

type Post {
_id: ID
description: String
title: String
createdAt: String
username: String
replys: [Reply]
}

type Reply {
_id: ID
replyBody: String
username: String
createdAt: String
}
type City {
 _id: ID
 cityname: String
 posts: [Post]
 locations: [Location]   
}

type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login($email: String!, $password: String!) Auth
    addUser($username: String!, $email: String!, $password: String!) Auth
    addPost($description: String!) Post
    addReply($descriptionId: ID!, $replyBody: String!) Post
  }
`

module.exports = typeDefs;