const { Schema, model } = require('mongoose')

const QuerySchema = new Schema({
    name:{
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
    date:{
        required:true,
        type: String
    }
})

const QueryModel = model('query', QuerySchema)

module.exports = QueryModel