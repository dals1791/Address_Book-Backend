const User = require('../../models/user')
const userValidate = require('../../configs/validate-schema')
// const Joi = require('joi')
const user = {
    Query: {
        users: (parent, args, ctx, info) =>User.find(),
        user: (parent, args, ctx, info) =>{
            return User.findById(args._id)
        }
    },

    Mutation: {
        createUser: async (parent, args, ctx, info) =>{
            const {name, username, password, handle} = args.input;

            await userValidate.validateAsync(args.input)
            
           
           const createUser = await User.create(args.input);
           return [createUser]
        }

    }
}
module.exports = user