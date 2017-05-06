"use strict";
var express = require('express')

var app = express();

let transporter = nodemailer.createTransport({
    service: 'Yahoo',
    auth: {
        user: 'alderikhoarau@yahoo.fr',
        pass: 'Rcestp7e1.'
    }
});

let mailOptions = {
    from: 'alderikhoarau@yahoo.fr',
    to: 'ald.hoarau.974@gmail.com',
    subject: 'Test Mailer',
    text: 'I am testing Nodemailer to send email.',
};

app.options('/sendmail', function (req, res) {
  res.sendStatus(200);
});


app.post('/sendmail', function (req, res) {
    console.log('post');

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Change this to your Angular 2 port number
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    transporter.sendMail(mailOptions, (error, info) => {
        console.log('coucou');
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

})