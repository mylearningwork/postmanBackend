const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = new Schema({
    name: {type: String, required: true},
    author:{type: Schema.Types.ObjectId, ref: 'users'},
    title: {type: String, required: true},
    price: {type:Number,required:true},
    pages: {type: Number, required: true},

})

module.exports = mongoose.model('books', BooksSchema)