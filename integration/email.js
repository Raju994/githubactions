const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vraju9949@gmail.com',
    pass: 'dqcn wnwg wwxn bdso'
  }
});

// Mail options
const mailOptions = {
  from: 'vraju9949@gmail.com',
  to: 'vraju9949@gmail.com',
  subject: 'Sending Files via Email',
  attachments: [
    {
      filename: 'index.html',
      path: 'cypress/reports/html/index.html' // Replace with the path to the first file
    },
    
  ]
};

// Send email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error occurred while sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

