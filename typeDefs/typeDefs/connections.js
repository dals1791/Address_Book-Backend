const { gql } = require("apollo-server-express");

const connections = gql`
  extend type Mutation {
    addConnection(handle: String): User
    destroyConnection(connectionId: ID): User
    addConnectionToGroup(groupId: ID, handle: String): Group
    destroyConnectionFromGroup(groupId: ID, handle: String): Group
  }
`;
module.exports = connections;
