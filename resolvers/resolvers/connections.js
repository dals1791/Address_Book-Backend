const User = require('../../models/user')
const Group = require('../../models/group')
const user = require('../../typeDefs/typeDefs/user')
const connections = {
    Mutation: {
        addConnection: async (parent, args, context, info)=>{
            const {handle} = args.handle
            const{userId}= context
            if(!context || userId == null ||userId == ""){
                throw new Error('Your are not logged in')
            }
            try{
                const user = await User.findByIdAndUpdate({_id: userId})
                const connection = await User.findOne({handle: handle})
                const connectionId  = connection._id
        
                if (connectionId==userId){
                    throw new Error('You cannot add yourself')
                }
                
                if (user.connections.includes(connectionId)){
                    throw new Error("You're already connected")
                } 
                await user.connections.push(connectionId)
                return await user.save()              
            }
            catch (error){ throw error}
        },
        destroyConnection: async (parent, args, context, info)=>{
            const { connectionId} = args
            const{userId}= context
            if(!context || userId == null ||userId == ""){
                throw new Error('Your are not logged in')
            }
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
                const {groupId} = args
                const {handle}=args.handle
                const {userId} = context
                if(!context || userId == null ||userId == ""){
                    throw new Error('Your are not logged in')
                }
                try{
                    const user = await User.findOne({_id: userId})
                    const group = await Group.findByIdAndUpdate({_id: groupId})
                    const connection = await User.findOne({handle: handle})
                    const connectionId  = connection._id
                    const connectedStatus = user.connections.includes(connectionId)
                    if (connectedStatus ===false){
                        throw new Error ('You are not connected, connect with this user first')
                    }
                    if (userId==connectionId){
                        throw new Error('You cannot add yourself')
                    }
                    if (group.connections.includes(connectionId)){
                        throw new Error( `${connection.name} is already in this group`)
                    }
                    await group.connections.push(connectionId)

                    return await group.save()

                }catch (error){ throw error}
            },
        destroyConnectionFromGroup:
            async (parent, args, context, info)=>{
                const {groupId} = args
                const {handle}=args.handle
                const{userId} = context
                if(!context || userId == null ||userId == ""){
                    throw new Error('Your are not logged in')
                }
                try{
                    const group = await Group.findByIdAndUpdate({_id: groupId})
                    const connection = await User.findOne({handle: handle})
                    const connectionId  = connection._id
                   
                    const connectionIndex= group.connections.findIndex((ele)=>ele == connectionId) 
                    await group.connections.splice(connectionIndex, 1)
                    return await group.save()
                }catch (error){ throw error}
            }
    }
}
module.exports = connections
