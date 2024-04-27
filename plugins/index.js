const sendAnEmail = (message) => {

    const nodemailer = require('nodemailer');
    const sgTransport = require('nodemailer-sendgrid-transport');
    const options = {
      auth: {
        api_user: 'vraju9949@gmail.com',
        api_key: '9949082358'
      }
    }
    const client = nodemailer.createTransport(sgTransport(options));
  
    const email = {
      from: 'vraju9949@gmail.com',
      to: 'vraju9949@gmail.com',
      subject: 'Hello',
      text: message,
      html: '<b>Hello world</b>'
    };
    client.sendMail(email, function(err, info) {
      return err? err.message : 'Message sent: ' + info.response;
    });
  }
  
  module.exports = (on, config) => {
    on('task', {
      sendMail (message) {
        return sendAnEmail(message);
      }
    })
  }