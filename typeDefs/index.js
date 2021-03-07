const root = require('./root')
const user = require('./typeDefs/user')
const auth = require('./typeDefs/auth')
const contact = require('./typeDefs/contact')
const connections = require('./typeDefs/connections')
const groups = require('./typeDefs/group')

module.exports = [
    root,
    user,
    auth,
    contact,
    connections,
    groups
]

