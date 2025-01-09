const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service, e.g., Gmail
  auth: {
    user: process.env.SMTP_USERNAME, // Replace with your actual email address
    pass: process.env.SMTP_PASSWORD, // Replace with your actual email password
  },
});

const sendEmail = async(mailOptions)=>{
try {
  await	transporter.sendMail(mailOptions);
  console.log('Email sent successfully.', );
} catch (error) {
console.log("error while sending email",error)	
}
}

module.exports={
	sendEmail	
}
	