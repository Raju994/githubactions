

const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
      user: 'vraju9949@gmail.com',
      pass: 'dqcn wnwg wwxn bdso'
    }
  });

  let mailOptions = {
    from: 'vraju9949@gmail.com',
    to: 'vraju9949@gmail.com',
    subject: 'Cypress Test Report',
    text: 'Please find the Cypress test report attached.',
    attachments: [
      {
        filename: 'report.html',
        path: 'cypress/reports/index.html',
        contentType: 'text/html'
      }
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
}

sendEmail();
