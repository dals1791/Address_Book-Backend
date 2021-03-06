const {gql} = require('apollo-server-express')

const connections = gql`
    extend type Mutation{
        addConnection(userId: ID!, input: ID!): User
    }
    
    # type Connection {
    #     _id: ID
    #     user: User
    # }
    

    
`
module.exports = connections