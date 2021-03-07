const {gql} = require('apollo-server-express')

const contact = gql`
    # extend type Query{
    #     personalContact(_id: ID): User
    # }
    extend type Mutation{
        addContactInfo(input: newContact): User
    }
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
    input newAddress{
        street: String
        aptNum: Int
        city: String
        state: String
        zipcode: Int
    }

    type Address{
        street: String
        aptNum: Int
        city: String
        state: String
        zipcode: Int
    }
    
`;
module.exports = contact