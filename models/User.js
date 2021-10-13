const mongoose = require('mongoose')
const { model, Schema} = mongoose

let userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    gender: String,
    avatar: String
},{ timestamps: true});

module.exports = {
    User: model('user', userSchema)
}