const {gql} = require('apollo-server-express')

const user = gql`
     extend type Query {
        user(input: Handle!): User!
        users:[User!]!
        # connections(userId: ID!):User
        
    }
    extend type Mutation {      
        addContactInfo(input: newContact, userId: ID!): User
        
    }
    
    type User {
        _id:ID
        username: String!
        password: String!
        handle: String
        name: String
        personalContact: Contact
        connections: [Connection]
        groups: [Group]
    }
    
    input Handle{
        handle: String
    }
    input newUser{
        username: String!
        password: String!
        name: String
        handle: String 
    }
    
`
module.exports = user