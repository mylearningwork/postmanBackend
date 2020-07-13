const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClassSchema = new Schema({
    name: {type: String, required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'users'},
    students: [{type: Schema.Types.ObjectId, ref: 'users'}],
    maxNumber: {type: Number, required: true},
    type: {type: String, required: true}
})

module.exports = mongoose.model('class', ClassSchema)