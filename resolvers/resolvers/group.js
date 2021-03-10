const User = require('../../models/user')
const Group = require('../../models/group')

module.exports ={
    Mutation: {
        createGroup: async (parent, args, context, info)=>{
            const {title, connectionIds} = args
            const {userId}= context
            if(!context || userId == null ||userId == ""){
                throw new Error('You are not logged in')
            }
            try{
               const group =  await Group.create({title: title, connections: connectionIds})
                const user = await User.findByIdAndUpdate({_id: userId})
                await user.groups.push(group._id);
                await user.save()  
                return  group         

            }catch(error){throw error}
        },
        destroyGroup: async (parent, args, context, info)=>{
            const {groupId} = args
            const {userId}= context
            if(!context || userId == null ||userId == ""){
                throw new Error('You are not logged in')
            }
            try{
                const user= await User.findOne({_id: userId})
                const groupIndex= user.groups.findIndex((ele)=>ele == groupId) 
                await Group.findByIdAndRemove(({_id: groupId}))
                await user.groups.splice(groupIndex, 1)
                return console.log(`You removed ${groupId}`)
            }
            catch(error){throw error}
            
            
        }
    },
    // Populates connections field in the parent Type 'Group' after mutating connections
    Group: {
        connections: async(Group)=>{
            return (await Group.populate('connections').execPopulate()).connections
        }
    }
    
}
