const {gql} = require('apollo-server-express')

const login = gql`
    extend type Query {
        login(username: String, password: String): UserAuth!
       
    }
    type UserAuth {
        userId: ID!
        token: String!
        tokenExpiration: Int!


    } 
`
module.exports = login