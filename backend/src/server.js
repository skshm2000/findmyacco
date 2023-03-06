const express = require('express')
const cors = require('cors')
const QueryRouter = require('./Routes/Query.route')
const dbconnect = require('./Config/databse.config')
const SSQueryRouter = require('./Routes/ScholarShipQuery.route')
const HostAHome = require('./Routes/HostAHome.route')
const GetAcco = require('./Routes/GetAcco.route')
const GetLandlords = require('./Routes/GetLandlords.route')
const AccoQuery = require('./Routes/AccoQuery.route')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/query', QueryRouter)
app.use('/accoquery', AccoQuery)
app.use('/SSQuery', SSQueryRouter)
app.use('/hostahome', HostAHome)
app.use('/getacco', GetAcco)
app.use('/getlandlords', GetLandlords)

app.listen(8080, async () => {
    await dbconnect()
    console.log('Server started @ http://localhost:8080')
})