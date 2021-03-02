const {gql} = require('apollo-server-express')

const user = gql`
     type Query {
        user(id:ID!): User
        users:[User!]!
    }
     type Mutation {
        createUser(input: newUser): User
    }
    
    type User {
        id:ID!
        username: String!
        password: String!
        handle: String!
        name: String!
    }
    input newUser{
        username: String!
        password: String!
        name: String!
        handle: String!
    }
    schema {
    query: Query
    mutation: Mutation
    }
`
module.exports = user