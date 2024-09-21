const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone : {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
    }

},
    { timestamps: true }
)
userSchema.pre('save',async function(next){
    // if password is not modified we dont need to hash the password again
    if (!this.isModified('password')) next();
    // it is modified hash the password again
    this.password = await bcrypt.hash(this.password,12)
})
const userData = mongoose.model("UserData",userSchema);

module.exports = userData;