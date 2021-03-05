const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const groupSchema = new Schema(
   {
    title: String,
    connections: [{type:Schema.Types.ObjectId,
        ref:"Connections" }]
   } 

        
)

const Groups = mongoose.model('Groups', groupSchema)

module.exports = Groups