const jwt = require('jsonwebtoken')
require("dotenv").config();
const  {SECRET} = process.env
const authJWT =  async (authHeader)=>{
   
    try{
        const token = authHeader.split(' ')[1] //token is in bearer <token>, split on whitespace [bearer, token]
        if (!token || token ===''){
            throw new Error('There is no Token')
        }
        let decodedToken;
        decodedToken= await jwt.verify(token, SECRET )
        
        if(decodedToken==""||decodedToken==null ||decodedToken == undefined){
            throw new Error("You are not authenticated")
        }
    
        return decodedToken
        }
        catch(error){
            throw new Error('token is invalid')
        }   
 }

module.exports = authJWT