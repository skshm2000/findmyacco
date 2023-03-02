const axios = require('axios')
const crypto = require('crypto');
const API = 'https://sturents.com/api/summary?channel=M9DYXPP0QZ&version=2'
const displayKey = 'p_6ahQCUWYysYyns5vlNJL'


const GetLandlordByCity = async ( city ) => {
    const date = new Date()
    const timestamp = date.getTime().toString()

    try {
        const auth = crypto.createHmac('sha256', displayKey).update(timestamp).digest('hex')
        let res = await axios.get(`${API}&timestamp=${date.getTime()}&auth=${auth}`)
        let data = await res.data
        data = data.filter(ele=>ele.title.includes(city))
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

module.exports = { GetLandlordByCity }