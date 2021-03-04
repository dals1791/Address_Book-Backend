const jwt = require('jsonwebtoken')
// Express Middleware for authentication of user JWT. middleware format: function (req, res, next)=>{}
const authJWT = (authHeader)=>{
    // const authHeader = req.headers.authorization || "";
    if (!authHeader){
        console.log("You are not logged in")
    }
    const token = authHeader.split(' ')[1] //token is in bearer <token>, split on whitespace [bearer, token]
        if (!token || token ===''){
            throw new Error('There is no Token')
        }
        let decodedToken;
        try{
            decodedToken=jwt.verify(token, 'addresssecretkey' )
    
            return decodedToken
        }
        catch(error){
            throw new Error('token is invalid')
        }   
 }

module.exports = authJWT