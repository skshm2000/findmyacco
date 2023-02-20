const { Schema, model } = require('mongoose')

const SSQuerySchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true,
        default: false
    },
    date:{
        required:true,
        type: String
    }
})

const SSQueryModel = model('SSQuery', SSQuerySchema)

module.exports = SSQueryModel