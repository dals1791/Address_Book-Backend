const User = require('../../models/user')
// const bcrypt = require('bcryptjs')

// const Joi = require('joi')
const user = {
    Query: {
        users: (parent, args, ctx, info) =>User.find(),
        user: (parent, args, ctx, info) =>{
            return User.findOne({handle: args.input.handle})
        }
        // connections: async (parent, args, ctx, info) =>{
        //     try{
        //     const user = await User.findOne({_id: args.userId})
        //     console.log(user.connections)
        //     return user.connections
        //     }catch(error){throw error}
        // }
    },

    Mutation: {
        addContactInfo: async (parent, args, context, info)=>{
            // if (context.userId!=args.userId){
            //     throw new Error("Please Login, not authenticated")
            // }
            try{
               return User.findByIdAndUpdate(args.userId, {personalContact: args.input})
            }catch (error){throw error}
            
        } 
    }   
}
module.exports = user