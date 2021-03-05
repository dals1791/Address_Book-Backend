const {gql} = require('apollo-server-express')

const connections = gql`
    extend type Mutation{
        addConnection(userId: ID!, input: ID!): User 
    }
    type Connection {
        user: User
    }
    

    
`
module.exports = connections