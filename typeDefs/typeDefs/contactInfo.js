const {gql} = require('apollo-server-express')

const contactInfo = gql`

input newAddress{
    street: String
    aptNum: Int
    city: String
    state: String
    zipcode: Int
}
# input newPhone{
#     phone: Int
    
# }
# input newEmail{
#     email: String
    
# }


type Address{
    street: String
    aptNum: Int
    city: String
    state: String
    zipcode: Int
}
# type Phone{
#     phone: Int
    
# }
# type Email{
#     email: String
    
# }

`
module.exports = contactInfo