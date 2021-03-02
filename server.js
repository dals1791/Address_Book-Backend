const { ApolloServer } =require('apollo-server-express') 
const express = require('express');
// require('dotenv').config()
const typeDefs =require( "./typeDefs")
const resolvers =require("./resolvers") 
// const {PORT} = process.env;

// Call express
const app = express()

// Create apollo server with typeDefs and resolvers
const server = new ApolloServer({typeDefs,resolvers});
// apply middleware for apolloserver
server.applyMiddleware({ app });

app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )