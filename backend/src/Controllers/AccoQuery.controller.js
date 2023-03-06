const AccoQueryModel = require('../Models/AccoQuery.model')
const { CustomTransport } = require('./Mailer.controller')

const GetQueries = async (page) => {
    page = +page
    page -= 1
    try {
        const queries = await AccoQueryModel.find().sort({_id:-1}).skip(page*15).limit(15);
        const total = await AccoQueryModel.find().countDocuments();
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
        const queries = await AccoQueryModel.findOneAndDelete({_id:id})
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

const UpdateStatus = async (id) => {
    try {
        const queries = await AccoQueryModel.findById({_id:id});
        queries.completed = !queries.completed;
        queries.save();
        return {
            error:false,
            msg:"Status updated successfully"
        }
    } catch (error) {
        return {
            error:true,
            data:error,
            msg:'Something went wrong'
        }   
    }
}

const NewQuery = async ({ name, number, university, email }) => {
    try {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        const query = new AccoQueryModel({name, email, university, phoneNumber:number, date:currentDate, completed:false})
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
        const res = await AccoQueryModel.aggregate([{$match:{$or:[{name:query},{university:query}]}}]);
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

module.exports = { GetQueries, DeleteQuery, NewQuery, SearchQuery, UpdateStatus }