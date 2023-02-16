const nodemailer = require('nodemailer')

const CustomTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contact@findmyacco.com',
        pass: 'bpwkpldqpclzstby'
    }
});

module.exports = { CustomTransport }