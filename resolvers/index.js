const user = require('./resolvers/user')
const auth = require("./resolvers/auth")

module.exports = [
    user,
    auth
]

