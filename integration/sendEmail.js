const nodemailer = require('nodemailer');
const fs = require('fs');
const archiver = require('archiver');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vraju9949@gmail.com', // Replace with your Gmail address
    pass: 'dqcn wnwg wwxn bdso' // Replace with your Gmail password or app-specific password
  }
});

// Create a ZIP archive of the allure-report folder
const archive = archiver('zip', { zlib: { level: 9 } });
const output = fs.createWriteStream('allure-report.zip');
archive.pipe(output);
archive.directory('C:/githubactions/allure-report', 'allure-report'); // Replace with the path to your allure-report folder
archive.finalize();

// Mail options
const mailOptions = {
  from: 'vraju9949@gmail.com', // Replace with your Gmail address
  to: 'vraju9949@gmail.com', // Replace with recipient's email address
  subject: 'Sending Allure Report via Email',
  attachments: [
    {
      filename: 'allure-report.zip',
      path: 'allure-report.zip'
    }
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
