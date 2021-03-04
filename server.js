const { ApolloServer } =require('apollo-server-express') 
const express = require('express');
const typeDefs =require( "./typeDefs")
const resolvers =require("./resolvers") 
const authJWT = require('./configs/auth')
// Call express
const app = express()
//====================== MiddleWare====================
// app.use(authJWT)
// ====================================================

// Create apollo server with typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: ({req})=>{return authJWT(req)}
         
})


// apply middleware for apolloserver
server.applyMiddleware({ app });

app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )