const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: '',
    pass: ''
  } 

})
const mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

transport.sendMail(mailOptions,(err,info)=>{
    if (err){
        console.log(err);
    } else {
        console.log("mail sent !" + info.response);
    }
})