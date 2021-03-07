const {gql} = require('apollo-server-express')

const connections = gql`
    extend type Mutation{
        addConnection(handle: Handle): User
        destroyConnection(connectionId: ID!): User
        addConnectionToGroup(groupId: ID!, handle: Handle): Group
        destroyConnectionFromGroup(groupId: ID!, handle: Handle): Group
    }

    
`
module.exports = connections