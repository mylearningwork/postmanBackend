const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function mailSender(name, mail, subject, message) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "user@gmail.com", // generated ethereal user
      pass: "password" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Name" user@gmail.com', // sender address
    to: "user1@gmail.com, user2@gmail.com...Etc", // list of receivers
    subject: "subject", // Subject line
    // html: "<h4>Message de : "+name+"</h4></br><h5>Mail : "+mail+"</h5></br><p>Sujet : "+subject+"</p></br><p>Message : "+message+"</p>" // html body
    html: "html code"
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return info.messageId
}

module.exports = mailSender