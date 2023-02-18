const DB = 'mongodb+srv://skshm2000:12345@cluster0.ieq2spx.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose')

const dbconnect = async () => {
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB)
}

module.exports = dbconnect