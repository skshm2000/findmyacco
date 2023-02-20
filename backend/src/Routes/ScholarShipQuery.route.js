const { Router } = require('express')
const { GetSSQueries, DeleteSSQuery, NewSSQuery } = require('../Controllers/SSQuery.controller')

const SSQueryRouter = Router()

SSQueryRouter.get('/admin/getSSQueries/:page', async (req, res)=>{
    const { page } = req.params
    const data = await GetSSQueries(page)

    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }
})

SSQueryRouter.delete('/admin/deleteSSQuery/:id', async (req, res)=>{
    const { id } = req.params
    const data = await DeleteSSQuery(id)
    
    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }    
})


SSQueryRouter.post('/user/newSSQuery', async (req, res)=>{
    const { firstName, lastName, number, univ, email } = req.body
    const data = await NewSSQuery({ firstName, lastName, number, univ, email })

    if(data.error){
        return res.status(201).send(data)  
    } else {
        return res.status(200).send(data)  
    }    
})

module.exports = SSQueryRouter