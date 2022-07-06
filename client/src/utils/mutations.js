import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`

  export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $firstName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
mutation addPost(postText: String!)
addPost(postText: $postText){
    _id
    postText
    username
    title
    created_at
    replyCount
    replies{
      _id
    }


}`

export const ADD_REPLY = gql`
mutation addReply($descriptionId: ID!, $replyBody: String!)
addReply(descriptionId: $descriptionId, replyBody: $replyBody)
_id
reply {
_id
replyBody
createdAt
username
}
`