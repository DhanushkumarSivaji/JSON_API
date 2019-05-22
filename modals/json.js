const mongoose = require("mongoose")

const Schema = mongoose.Schema;

//create schema 
const JsonSchema = new Schema ({
    json:{
        type:Object,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = Json = mongoose.model('json',JsonSchema)