const express = require('express')
const { Registerer, Loginner } = require('../Controllers/Auth.controller')

const AuthRouter = express.Router()

// AuthRouter.post('/register', async (req, res)=>{
//     const { name, email, password } = req.body

//     const stat = await Registerer( name, email, password )

//     if(stat){
//         return res.status(201).send(stat)
//     } else {
//         return res.status(200).send(stat)
//     }
// })


AuthRouter.post('/login', async (req, res)=>{
    const { email, password } = req.body

    const stat = await Loginner( email, password )

    if(stat){
        return res.status(201).send(stat)
    } else {
        return res.status(200).send(stat)
    }
})

module.exports = AuthRouter