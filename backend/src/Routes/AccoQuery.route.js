const { Router } = require('express')
const { GetQueries, DeleteQuery, NewQuery, SearchQuery, UpdateStatus } = require('../Controllers/AccoQuery.controller')

const AccoQuery = Router()

AccoQuery.get('/admin/getQueries/:page', async (req, res)=>{
    const { page } = req.params
    const data = await GetQueries(page)

    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }
})

AccoQuery.delete('/admin/deleteQuery/:id', async (req, res)=>{
    const { id } = req.params
    const data = await DeleteQuery(id)
    
    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }    
})

AccoQuery.patch('/admin/updateStatus/:id', async (req, res)=>{
    const { id } = req.params
    const data = await UpdateStatus(id)
    
    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }    
})


AccoQuery.post('/user/newQuery', async (req, res)=>{
    const { name, number, university, email } = req.body
    const data = await NewQuery({ name, number, university, email })

    if(data.error){
        return res.status(201).send(data)  
    } else {
        return res.status(200).send(data)  
    }    
})

module.exports = AccoQuery