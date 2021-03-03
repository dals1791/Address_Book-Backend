const root = require('./root')
const user = require('./typeDefs/user')
const auth = require('./typeDefs/auth')
const contact = require('./typeDefs/contact')
const contactInfo= require('./typeDefs/contactInfo')

module.exports = [
    root,
    user,
    auth,
    contact,
    contactInfo
]

