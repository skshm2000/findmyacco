const { Router } = require('express')
const { GetAccoByCity } = require('../Controllers/GetAcco.cotroller')

const GetAcco = Router()

GetAcco.get('/', async (req, res)=>{
    const { city } = req.query
    let query = req.query
    
    let data = await GetAccoByCity(city)

    if(data.error) {
        res.status(201).send(data)
    } else {
        res.status(200).send(data)
    }
})


module.exports = GetAcco