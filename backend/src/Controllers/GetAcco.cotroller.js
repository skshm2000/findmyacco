const axios = require('axios')
const crypto = require('crypto');
const API = 'https://sturents.com/api/properties?channel=M9DYXPP0QZ&version=2'
const date = new Date()
const displayKey = 'p_6ahQCUWYysYyns5vlNJL'


const GetAccoByCity = async ( city ) => {
    const timestamp = date.getTime().toString()
    console.log('innn')
    try {
        const auth = crypto.createHmac('sha256', displayKey).update(timestamp).digest('hex')
        console.log(`${API}&timestamp=${date.getTime()}&auth=${auth}`)
        let res = await axios.get(`${API}&timestamp=${date.getTime()}&auth=${auth}`)
        let data = await res.data
        console.log(data)
        return {
            error:false
        }
    } catch (error) {
        return {
            error:true,
            msg: 'Something went wrong!'
        }        
    }
}

module.exports = { GetAccoByCity }