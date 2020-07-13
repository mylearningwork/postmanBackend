const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollegeSchema = new Schema({
    name: {type: String, required: true},
    established:{type: Date, required:true},
    university: {type: String, required: true},
    Location: {type:String,required:true},
    Owner: {type: String, required: true},

})

module.exports = mongoose.model('college', CollegeSchema)