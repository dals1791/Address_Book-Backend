const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const connectionSchema = new Schema(
   {
    User: {type:Schema.Types.ObjectId,
        ref:"Users" }
   } 

        
)

const Connections = mongoose.model('Connections', connectionSchema)

module.exports = Connections