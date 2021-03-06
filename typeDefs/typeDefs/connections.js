const {gql} = require('apollo-server-express')

const connections = gql`
    extend type Mutation{
        addConnection(userId: ID!, connectionId: ID!): User
        destroyConnection(userId: ID!, connectionId: ID!): User
        addConnectionToGroup(groupId: ID!, userId: ID!): Group
        destroyConnectionFromGroup(groupId: ID!, userId: ID!): Group
    }

    
`
module.exports = connections