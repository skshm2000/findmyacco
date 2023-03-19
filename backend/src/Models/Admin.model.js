const { Schema, model } = require('mongoose')

const AdminSchema = new Schema({
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
})

const AdminModel = model("Admin", AdminSchema)

module.exports = AdminModel