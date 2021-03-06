const User = require('../../models/user')
const Group = require('../../models/group')

module.exports ={
    Mutation: {
        createGroup: async (parent, args, context, info)=>{
            const {userId, title, connectionIds} = args
            
            try{
               const group =  await Group.create({title: title, connections: [connectionIds]})
               console.log(group)
                const user = await User.findByIdAndUpdate({_id: userId})
                await user.groups.push(group._id);
                return await user.save()                

            }catch(error){throw error}
        },
        destroyGroup: async (parent, args, context, info)=>{
            
            const user= await User.findOne({_id: args.userId})
        
            const groupIndex= user.groups.findIndex((ele)=>ele == args.groupId) 
            await Group.findByIdAndRemove(({_id: args.groupId}))
            return await user.groups.splice(groupIndex, 1)
            
        }
    },
    Group: {
        connections: async(Group)=>{
            return (await Group.populate('connections').execPopulate()).connections
        }
    }
    
}
