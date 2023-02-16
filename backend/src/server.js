const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const DB = 'mongodb+srv://skshm2000:12345@cluster0.ieq2spx.mongodb.net/?retryWrites=true&w=majority'
const QueryRouter = require('./Routes/Query.route')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/query', QueryRouter)

app.listen(8080, async () => {
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB)
    console.log('Server started @ http://localhost:8080')
})