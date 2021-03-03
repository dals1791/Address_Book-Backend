const user = require('./resolvers/user')
const auth = require("./resolvers/auth")
const contact = require('./resolvers/contact')

module.exports = [
    user,
    auth,
    // contact
]

