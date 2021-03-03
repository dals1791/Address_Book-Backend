const {gql} = require('apollo-server-express')

const user = gql`
     extend type Query {
        user(_id: ID!): User!
        users:[User!]!
        
    }
    extend type Mutation {
        createUser(input: newUser): User
        addContactInfo(input: newContact, userId: ID!): User
    }
    
    type User {
        _id:ID
        username: String!
        password: String!
        handle: String
        name: String
        personalContact: Contact
    }
    input newUser{
        username: String!
        password: String!
        name: String
        handle: String 
    }
    
`
module.exports = user