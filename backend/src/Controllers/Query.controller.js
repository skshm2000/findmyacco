const QueryModel = require('../Models/query.model')
const { CustomTransport } = require('./Mailer.controller')

const GetQueries = async (page) => {
    page = +page
    page -= 1
    try {
        const queries = await QueryModel.find().sort({_id:-1}).skip(page*15).limit(15)
        return {
            error:false,
            queries
        }
    } catch (error) {
        return {
            error:true,
            msg:'Something went wrong'
        }   
    }
}

const DeleteQuery = async (id) => {
    try {
        const queries = await QueryModel.findOneAndDelete({_id:id})
        return {
            error:false
        }
    } catch (error) {
        return {
            error:true,
            msg:'Something went wrong'
        }   
    }
}

const NewQuery = async ({ name, number, univ, email }) => {
    try {
        const query = new QueryModel({name, email, university:univ, phoneNumber:number})
        await query.save()
        const mail = {
            from: 'contact@findmyacco.com',
            to: email,
            subject: 'Query Recieved',
            text: 'Query recieved, Our team will reach you soon!'
        }
        CustomTransport.sendMail(mail)
        return {
            error:false
        }
    } catch (error) {
        return {
            error:true,
            msg:'Something went wrong'
        }   
    }
}

module.exports = { GetQueries, DeleteQuery, NewQuery }