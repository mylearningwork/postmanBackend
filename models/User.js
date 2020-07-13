module.exports = require('mongoose').model('users', new require('mongoose')
    .Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    type: {type: String, required: true}
}))