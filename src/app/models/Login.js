const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Login = new Schema({
    username: String,
    password: String,
});
module.exports = mongoose.model('Login', Login);