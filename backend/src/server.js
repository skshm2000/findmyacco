const express = require('express')
const cors = require('cors')
const QueryRouter = require('./Routes/Query.route')
const dbconnect = require('./Config/databse.config')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/query', QueryRouter)

app.listen(8080, async () => {
    await dbconnect()
    console.log('Server started @ http://localhost:8080')
})