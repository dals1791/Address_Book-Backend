const {gql} = require('apollo-server-express')

const contact = gql`
    
    extend type Mutation{
        addContactInfo( 
            phone: String
            email: String
            street: String
            aptNum: Int
            city: String
            state: String
            zipcode: String
            ): User
    }
    type Contact{
        street: String
        aptNum: Int
        city: String
        state: String
        zipcode: String
        phone: String
        email: String
    }
    
`;
module.exports = contact