const User = require('../../models/user')
const Connections = require('../../models/connection')
const connections = {
    Mutation: {
        addConnection: async (parent, args, context, info)=>{
            try{
                const userA = await User.findByIdAndUpdate({_id: args.userId})
                console.log(userA)
                if (args.input==args.userId){
                    throw new Error('You cannot add yourself')
                }
                if (userA.connections.some(connection=>connection._id ==args.input)){
                    throw new Error("You're already connected")
                }
                
                await userA.connections.push(args.input)
               return await userA.save()
                
        
                
        
            }catch (error){ throw error}
        }
    }
    // Connection: {
    //     user: async(User)=>{
    //         return (await User.populate('user').execPopulate()).User
    //     }
    // }
}
module.exports = connections
