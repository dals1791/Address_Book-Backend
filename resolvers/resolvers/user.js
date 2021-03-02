const User = require('../../models/user')
const user = {
    Query: {
        users: (parent, args, ctx, info) =>User.find(),
        user: (parent, args, ctx, info) =>{
            return User.findById(args.id)
        }
    },

    Mutation: {
        createUser: async (parent, args, ctx, info) =>{
            const {name, username, password, handle} = args.input;
            const createUser = await User.create({ name, username, password, handle });
            return [createUser]
        }

    }
}
module.exports = user