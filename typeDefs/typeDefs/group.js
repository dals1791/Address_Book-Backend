const {gql} = require('apollo-server-express')

const groups = gql`
    extend type Mutation{
        createGroup(title: String!, connectionIds:[ID] ): Group
        destroyGroup(groupId: ID): Group
    }
    
    type Group {
        _id: ID,
        title: String,
        connections:[User]
    }
    

    
`
module.exports = groups