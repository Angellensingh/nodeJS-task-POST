// const mongoose = require("mongoose")
// exports.Cat=mongoose.model('Cat',{name:String})
// exports.Dog=mongoose.model('Dog',{name:String})

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Data', dataSchema)