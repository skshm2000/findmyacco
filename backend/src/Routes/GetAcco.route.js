const { Router } = require('express')
const { GetAccoByLandlord } = require('../Controllers/GetAcco.cotroller')

const GetAcco = Router()

GetAcco.get('/', async (req, res)=>{
    const { landlord } = req.query
    let query = req.query
    
    let data = await GetAccoByLandlord(landlord)

    if(data.error) {
        res.status(201).send(data)
    } else {
        res.status(200).send(data)
    }
})


module.exports = GetAcco