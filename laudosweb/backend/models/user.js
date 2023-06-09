const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UserSchema = new Schema({
    nome:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    senha:{
        type:Number,
        require:true
    }
})

const UserModel = mongoose.model("usuarios",UserSchema) // The String "user" above is the name of your collection

module.exports = UserModel
