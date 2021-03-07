const User = require('../../models/user')
// const bcrypt = require('bcryptjs')

// const Joi = require('joi')
const user = {
    Query: {
        users: (parent, args, context, info) =>{
            const {userId} = context
            if(!context || userId == null ||userId == ""){
                throw new Error('You are not logged in')
            }
           return User.find()
        
        },
        user: (parent, args, contex, info) =>{
            const {userId} = context
            if(!context || userId == null ||userId == ""){
                throw new Error('You are not logged in')
            }
            return User.findOne({handle: args.input.handle})
        }
    },

    Mutation: {
        addContactInfo: async (parent, args, context, info)=>{
            const {userId} = context
            if(!context || userId == null ||userId == ""){
                throw new Error('You are not logged in')
            }
            try{
               const user = await User.findByIdAndUpdate(userId, {personalContact: args.input})
               return await user.save()
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