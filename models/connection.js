const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const connectionSchema = new Schema(
   {
    User: {type:Schema.Types.ObjectId,
        ref:"User" }
   } 

        
)

const Connections = mongoose.model('Connections', connectionSchema)

module.exports = Connections