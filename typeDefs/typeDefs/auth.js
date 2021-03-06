const {gql} = require('apollo-server-express')

const login = gql`
    extend type Query {
        login(username: String!, password: String!): UserAuthInfo
       
    }
    extend type Mutation{
        createUser(input: newUser): User
    }
    type UserAuthInfo {
        userId: ID!
        token: String!
        tokenExpiration: Int!


    } 
`
module.exports = login