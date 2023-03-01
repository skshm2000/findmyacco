const { Schema, model } = require('mongoose')

const HostaHomeSchema = new Schema({
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
    area:{
        type:String,
        required:true
    },
    date:{
        required:true,
        type: String
    },
    completed:{
        required:true,
        type: Boolean,
        default:false
    }
})

const HostAHomeModel = model('HostAHome', HostaHomeSchema)

module.exports = HostAHomeModel