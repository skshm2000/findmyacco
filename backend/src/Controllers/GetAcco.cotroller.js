const axios = require('axios')
const crypto = require('crypto');
const API = 'https://sturents.com/api/properties?channel=M9DYXPP0QZ&version=2'
const date = new Date()
const displayKey = 'p_6ahQCUWYysYyns5vlNJL'


const GetAccoByLandlord = async ( landlord ) => {
    const timestamp = date.getTime().toString()

    try {
        const auth = crypto.createHmac('sha256', displayKey).update(timestamp).digest('hex')
        let res = await axios.get(`${API}&timestamp=${date.getTime()}&auth=${auth}&landlord=${landlord}`)
        let data = await res.data
        return {
            error:false,
            data
        }
    } catch (error) {
        return {
            error:true,
            msg: 'Something went wrong!'
        }        
    }
}

module.exports = { GetAccoByLandlord }