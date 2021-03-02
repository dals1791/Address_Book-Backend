const mongoose = require('../db/connection')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const userSchema = new Schema(
    {
        username: String,
        password: String,
        name: String,
        handle: String
    },{
        timestamps: true
    }
)
// mongoose pre-middleware: Pre middleware functions are executed one after another, when each middleware calls next.
userSchema.pre('save', async function(next) {
    // bcryptjs function. 
    if (this.isModified('password')){ //if password field is modified encrypt it using bcrypt. 
        //https://www.npmjs.com/package/bcryptjs
        try{
            this.password = await bcrypt.hash(this.password, 12)
        }
        catch(error){
            next(error)
        }
    }
    next();
  });

const User = mongoose.model('user', userSchema)

module.exports = User