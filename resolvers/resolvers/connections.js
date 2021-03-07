const User = require('../../models/user')
const Group = require('../../models/group')
const user = require('../../typeDefs/typeDefs/user')
const connections = {
    Mutation: {
        addConnection: async (parent, args, context, info)=>{
            const {userId, connectionId} = args
            try{
                const user = await User.findByIdAndUpdate({_id: userId})
                
                if (connectionId==userId){
                    throw new Error('You cannot add yourself')
                }
                if (user.connections.some(connection=>connection._id == connectionId)){
                    throw new Error("You're already connected")
                }
                
                await user.connections.push(connectionId)
                return await user.save()
            }
            catch (error){ throw error}
        },
        destroyConnection: async (parent, args, context, info)=>{
            const {userId, connectionId} = args
            try{
                const user = await User.findByIdAndUpdate({_id: userId})

                const connectionIndex= user.connections.findIndex((ele)=>ele == connectionId) 

                await  user.connections.splice(connectionIndex, 1)
                return await user.save()

            }
            catch (error){ throw error}
        },

        addConnectionToGroup: 
            async (parent, args, context, info)=>{
                const {groupId, userId} = args
                try{
                    const group = await Group.findByIdAndUpdate({_id: groupId})
                    // ********NEED TO ADD LOGIC FOR ADDING YOURSELF********************
                    // if (userId==args.userId){
                    //     throw new Error('You cannot add yourself')
                    // }
                    if (group.connections.some(connection=>connection._id ==user.Id)){
                        throw new Error("${connection.name} is already in this group")
                    }
                    await group.connections.push(userId)

                    return await group.save()

                }catch (error){ throw error}
            },
        destroyConnectionFromGroup:
            async (parent, args, context, info)=>{
                const {groupId, userId} = args
                try{
                    const group = await Group.findByIdAndUpdate({_id: groupId})
                   
                    const connectionIndex= group.connections.findIndex((ele)=>ele == userId) 
                    await group.connections.splice(connectionIndex, 1)
                    return await group.save()
                }catch (error){ throw error}
            }
    }
}
module.exports = connections
