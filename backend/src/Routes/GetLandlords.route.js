const { Router } = require('express')
const { GetLandlordByCity } = require('../Controllers/GetLandords.controller')

const GetLandlords = Router()

GetLandlords.get('/', async (req, res)=>{
    const { city } = req.query
    let query = req.query
    
    let data = await GetLandlordByCity(city)

    if(data.error) {
        res.status(201).send(data)
    } else {
        res.status(200).send(data)
    }
})


module.exports = GetLandlords