const {gql} = require('apollo-server-express')

const groups = gql`
    extend type Mutation{
        createGroup(userId: ID!, title: String!, connectionIds:ID ): Group
        destroyGroup( userId: ID, groupId: ID): Group
    }
    
    type Group {
        _id: ID,
        title: String,
        connections:[User]
    }
    

    
`
module.exports = groups