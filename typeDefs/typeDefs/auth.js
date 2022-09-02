const { gql } = require("apollo-server-express");
// users should be able to create and login their profile without Authentication
const login = gql`
  extend type Query {
    login(username: String!, password: String!): UserAuthInfo
    userProfile: User #Gets the authenticated user information after login
  }
  extend type Mutation {
    createUser(input: newUser): User
  }
  type UserAuthInfo {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
`;
module.exports = login;
