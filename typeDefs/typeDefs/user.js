const { gql } = require("apollo-server-express");

const user = gql`
  extend type Query {
    user(input: Handle!): User!
    users: [User!]!
  }

  type User {
    _id: ID
    username: String!
    password: String!
    handle: String
    name: String
    personalContact: Contact
    connections: [User]
    groups: [Group]
  }

  input Handle {
    handle: String
  }
  input newUser {
    username: String!
    password: String!
    name: String
    handle: String
  }
`;
module.exports = user;
