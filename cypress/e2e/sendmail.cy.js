const nodemailer = require('nodemailer');
const fs = require('fs');

try {
    // Read the Allure report file synchronously
    const allureReport = fs.readFileSync('./allure-report/index.html', 'utf8');

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vraju9949@gmail.com',
            pass: '9949082358'
        }
    });

    // Email content
    const mailOptions = {
        from: 'vraju9949@gmail.com',
        to: 'vraju9949@gmail.com',
        subject: 'Cypress Allure Report',
        html: allureReport
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
} catch (err) {
    console.error('Error reading Allure report:', err);
    return;
}
