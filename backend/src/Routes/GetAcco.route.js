const { Router } = require('express')


const GetAcco = Router()

GetAcco.get('/', async (req, res)=>{
    const { page } = req.params
    let query = req.query
    
    res.send('Okay')
})


module.exports = GetAcco