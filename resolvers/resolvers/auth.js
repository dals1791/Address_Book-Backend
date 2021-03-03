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
            const passwordCheck = bcrypt.compare(password, user.password)
            console.log(password, user.password, passwordCheck)
            if (passwordCheck===false){
                throw new Error('Password does not match username')
            }
            const token = jwt.sign(
                {userId: user.id},
                'addresssecretkey',
                { expiresIn: '2h'}
            )
            return { userId: user.id, token: token, tokenExpiration: 2 } 
            
        }
    }
}
module.exports = auth


