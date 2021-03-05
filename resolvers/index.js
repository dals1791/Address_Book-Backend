const user = require('./resolvers/user')
const auth = require("./resolvers/auth")
const connections = require('./resolvers/connections')
const groups = require('./resolvers/group')

module.exports = [
    user,
    auth,
    connections,
    groups
]

