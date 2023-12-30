const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
})


module.exports = mongoose.model('user', UsersSchema);