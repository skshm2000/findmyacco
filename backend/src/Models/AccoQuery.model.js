const { Schema, model } = require('mongoose')

const AccoSchema = new Schema({
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

const AccoQueryModel = model('accoQuery', AccoSchema)

module.exports = AccoQueryModel