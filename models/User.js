const { model, Schema} = require('mongoose');

const userSChema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
});

module.exports = model('User', userSchema);