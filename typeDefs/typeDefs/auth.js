const {gql} = require('apollo-server-express')

const login = gql`
    extend type Query {
        login(username: String!, password: String!): UserAuthInfo
       
    }
    type UserAuthInfo {
        userId: ID!
        token: String!
        tokenExpiration: Int!


    } 
`
module.exports = login