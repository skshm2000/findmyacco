const { Router } = require('express')
const { GetQueries, DeleteQuery, NewQuery, SearchQuery, MarkComplete } = require('../Controllers/hostahome.controller')

const HostAHome = Router()

HostAHome.get('/admin/getQueries/:page', async (req, res)=>{
    const { page } = req.params
    const data = await GetQueries(page)

    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }
})

HostAHome.get('/admin/searchQuery', async (req, res)=>{
    const  {query}  = req.query
    const data = await SearchQuery(query);

    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }
})

HostAHome.delete('/admin/deleteQuery/:id', async (req, res)=>{
    const { id } = req.params
    const data = await DeleteQuery(id)
    
    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }    
})

HostAHome.get('/admin/markComplete/:id', async (req, res)=>{
    const { id } = req.params
    const data = await MarkComplete(id)
    
    if(data.error){
        return res.status(201).send(data)   
    } else {
        return res.status(200).send(data)
    }    
})


HostAHome.post('/user/newQuery', async (req, res)=>{
    const { name, phoneNumber, university, email, area } = req.body
    const data = await NewQuery({ name, phoneNumber, university, email, area })

    if(data.error){
        return res.status(201).send(data)  
    } else {
        return res.status(200).send(data)  
    }    
})

module.exports = HostAHome