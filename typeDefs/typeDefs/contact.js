const {gql} = require('apollo-server-express')

const contact = gql`
    # extend type Query{
    #     personalContact(_id: ID): User
    # }
    # extend type Mutation{
        
    # }
    input newContact{
        address: newAddress
        phone: Int
        email: String
    }
    type Contact{
        address: Address
        phone: Int
        email: String
    }
    
`;
module.exports = contact