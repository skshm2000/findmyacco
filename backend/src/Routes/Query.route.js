const { Router } = require('express')
const { GetQueries, DeleteQuery, NewQuery } = require('../Controllers/Query.controller')

const QueryRouter = Router()

QueryRouter.get('/admin/getQueries/:page', async (req, res)=>{
    const { page } = req.params
    const data = await GetQueries(page)

    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }
})

QueryRouter.delete('/admin/deleteQuery/:id', async (req, res)=>{
    const { id } = req.params
    const data = await DeleteQuery(id)
    
    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }    
})


QueryRouter.post('/user/newQuery', async (req, res)=>{
    const { name, number, univ, email } = req.body
    const data = await NewQuery({ name, number, univ, email })

    if(data.error){
        return res.status(201).send(data)  
    } else {
        return res.status(200).send(data)  
    }    
})

module.exports = QueryRouter