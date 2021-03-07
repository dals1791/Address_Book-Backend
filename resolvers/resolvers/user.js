const User = require('../../models/user')
// const bcrypt = require('bcryptjs')

// const Joi = require('joi')
const user = {
    Query: {
        users: (parent, args, ctx, info) =>User.find(),
        user: (parent, args, ctx, info) =>{
            return User.findOne({handle: args.input.handle})
        }
    },

    Mutation: {
        addContactInfo: async (parent, args, context, info)=>{
            // *******ADD AUTHENITCATION *********************
            // if (context.userId!=args.userId){
            //     throw new Error("Please Login, not authenticated")
            // }
            try{
               return User.findByIdAndUpdate(args.userId, {personalContact: args.input})
            }catch (error){throw error}
            
        } 
    }, 
    // Populates the groups and connections fields of the parent Type User after mutations 
    User: {
        groups: async(User) =>{
            return (await User.populate("groups").execPopulate()).groups
        },
        connections: async(User)=>{
            return (await User.populate('connections').execPopulate()).connections
        }
    } 
}
module.exports = user