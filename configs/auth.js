const jwt = require('jsonwebtoken')
// Express Middleware for authentication of user JWT. middleware format: function (req, res, next)=>{}
const auth = (req, res, next)=>{
const header = req.get('Authorization');
    if (!header){
        req.authTrue = false
        return next()
    }
    const token = header.split(' ')[1] //token is in bearer <token>, split on whitespace [bearer, token]
        if (!token || token ===''){
            req.authTrue = false
            return next()
        }
        let decodedToken;
        try{
        decodedToken=jwt.verify(token, 'addresssecretkey' )
        }
        catch(error){
            req.authTrue = false
            return next()
        }
        if (!decodedToken){
            req.authTrue = false
            return next()
        }
        req.authTrue = true
        req.userId = decodedToken.userId
        next()

}
module.exports = auth