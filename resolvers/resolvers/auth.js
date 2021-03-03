const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require("../../models/user")

const auth = {
   Query: {
        login: async (parent, args, ctx, info)=>{
            const {username, password} = args 
            try{ 
                const user = await User.findOne( {username: username}) 
                if (!user){
                 throw new Error('User does not exist')
                }
            
            await bcrypt.compare(password, user.password).then((result)=>{
                    // console.log(password, user.password, result)
                if (!result){
                    throw new Error('Password does not match username')          
                }
            })
            const token = jwt.sign(
                {userId: user.id},
                'addresssecretkey',
                { expiresIn: '2h'}
            )
            return {userId: user.id, token: token,  tokenExpiration: 2} 
        }catch(error){throw error}
        }
            
    }
}
    

module.exports = auth


