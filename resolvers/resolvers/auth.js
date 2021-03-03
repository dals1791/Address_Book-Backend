const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require("../../models/user")

const auth = {
    Query: {
        login: async (parent, args, ctx, info)=>{
            const {username, password} = args
            const user = await User.findOne( {username: username}) 
            if (!user){
                throw new Error('User does not exist')
            }
            await bcrypt.compare(password, user.password).then((result)=>{
                console.log(password, user.password, result)
                if (result){
                    const token = jwt.sign(
                        {userId: user.id},
                        'addresssecretkey',
                        { expiresIn: '2h'}
                    )
                    console.log(user.id, token)
                    return ( {userId: user.id, token: token,  tokenExpiration: 2} )
                    
                }else{
                    throw new Error('Password does not match username')
                }
                 
            }).catch(error=>{})
        
            
            
        }
    }
}
module.exports = auth


