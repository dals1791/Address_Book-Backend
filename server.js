const { ApolloServer, AuthenticationError } =require('apollo-server-express') 
const express = require('express');
const typeDefs =require( "./typeDefs")
const resolvers =require("./resolvers") 
const authJWT = require('./configs/auth')
// Call express
const app = express()
// CORS
const cors = require("cors");
//====================== MiddleWare====================
app.use(cors())
// ====================================================

// Create apollo server with typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context:  async ({req})=>{
       let authenticatedToken = null
     try{
        const authHeader = req.headers.authorization || "";
        if (authHeader){
         authenticatedToken = await authJWT(authHeader)
        }
        
        

     }catch{throw AuthenticationError}
     return authenticatedToken
    }
    
})


// apply middleware for apolloserver
server.applyMiddleware({ app });

app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)