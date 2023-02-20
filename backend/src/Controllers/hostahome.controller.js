const HostAHomeModel = require('../Models/hostahome.model')
const { CustomTransport } = require('./Mailer.controller')

const GetQueries = async (page) => {
    page = +page
    page -= 1
    try {
        const queries = await HostAHomeModel.find().sort({_id:-1}).skip(page*10).limit(10);
        const total = await HostAHomeModel.find().countDocuments();
        return {
            error:false,
            queries,
            total
        }
    } catch (error) {
        return {
            error:true,
            data:error,
            msg:'Something went wrong'
        }   
    }
}

const DeleteQuery = async (id) => {
    try {
        const queries = await HostAHomeModel.findOneAndDelete({_id:id})
        return {
            error:false
        }
    } catch (error) {
        return {
            error:true,
            data:error,
            msg:'Something went wrong'
        }   
    }
}

const NewQuery = async ({ name, number, univ, email }) => {
    try {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        const query = new HostAHomeModel({name, email, university:univ, phoneNumber:number, date:currentDate})
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
            data:error,
            msg:'Something went wrong'
        }   
    }
}

const SearchQuery = async(query) => {
    try{
        const res = await HostAHomeModel.aggregate([{$match:{$or:[{name:query},{university:query}]}}]);
        return {
            error:false,
            queries: res,
            total: res.length
        }
    }catch(error){
        console.log(error);
        return {
            error:true,
            msg:'Something went wrong'
        }
    }
}

module.exports = { GetQueries, DeleteQuery, NewQuery, SearchQuery }