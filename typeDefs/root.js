const {gql} = require('apollo-server-express')

// Defines typeDef types for Query and Mutation resolvers for when they are merged back togetherin index.js.

const root = gql`
#To make a comment inside gql tag, hash symbols are needed, #.
    type Query {
        empty: String #the types cannot be empty so empty: placeholder is put in
    }

    type Mutation {
        empty: String #the types cannot be empty so empty: placeholder is put in
    }

`
module.exports = root