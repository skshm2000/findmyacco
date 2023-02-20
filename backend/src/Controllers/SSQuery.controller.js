const SSQueryModel = require('../Models/SSQuery.model')
const { CustomTransport } = require('./Mailer.controller')

const GetSSQueries = async (page) => {
    page = +page
    page -= 1
    try {
        const queries = await SSQueryModel.find().sort({_id:-1}).skip(page*15).limit(15);
        const total = await SSQueryModel.find().countDocuments();
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

const DeleteSSQuery = async (id) => {
    try {
        const queries = await SSQueryModel.findOneAndDelete({_id:id})
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

const NewSSQuery = async ({ firstName, lastName, phoneNumber, university, email }) => {
    try {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;
        const query = new SSQueryModel({firstName, lastName, email, university, phoneNumber, date:currentDate})
        await query.save()
        const mail = {
            from: 'contact@findmyacco.com',
            to: email,
            subject: 'Query Recieved',
            text: 'Your Scholarship application has been recieved, Our team will reach you soon!'
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

const UpdateSSStatus = async (id) => {
    try {
        const queries = await SSQueryModel.findById({_id:id});
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

const SearchSSQuery = async(query) => {
    try{
        const res = await SSQueryModel.aggregate([{$match:{$or:[{name:query},{university:query}]}}]);
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

module.exports = { GetSSQueries, DeleteSSQuery, NewSSQuery, SearchSSQuery, UpdateSSStatus }