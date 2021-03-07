const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require("../../models/user")
const userValidate = require('../../configs/validate-schema')

const auth = {
   Query: {
        login: async (parent, args, context, info)=>{
            const {username, password} = args 
            try{ 
                const user = await User.findOne( {username: username}) 
                if (!user){
                 throw new Error('User does not exist')
                }
            
            await bcrypt.compare(password, user.password).then((result)=>{
                if (!result){
                    throw new Error('Password does not match username')          
                }
            })
            const token = jwt.sign(
                {userId: user.id},
                'addresssecretkey',
                { expiresIn: '2h'}
            )
            // context
            return {userId: user.id, token: token,  tokenExpiration: 2} 
        }catch(error){throw error}
        },
        userProfile: async (parent, args, context, info)=>{
            if(!context || context.userId == null ||context.userId == ""){
                throw new Error('Your are not logged in')
            }
            console.log(context)
            return await User.findById(context.userId)
        }
            
    },
    Mutation:{
        createUser: async (parent, args, ctx, info) =>{
            const {name, username, password, handle} = args.input;
            try{
                await userValidate.validateAsync(args.input)
                return  User.create(args.input)
            } catch (error){throw error}
        }
    }
}
    

module.exports = auth


