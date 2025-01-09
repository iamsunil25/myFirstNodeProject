
// Email options

const { sendEmail } = require("../config/email");


// const sendEmailDummy =  (contactDetails)=>{
// 	console.log("email init" );
// emailjs.init(process.env.EMAIL_PUBLIC_KEY);
// emailjs.send(process.env.EMAIL_SERVICE_ID , process.env.EMAIL_TEMPLATE_ID, contactDetails).then(function (res) {
// 	console.log("email sent successfully",res);
//    }).catch((error)=>{
// console.log("error while sending email",error);
//    })
// }

const sendEmailService =  async (contactDetails)=>{
try {
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Enquiry</title>
</head>
<body>
    <p>Hello <strong>Sunil Joshi</strong>,</p>
    <p>You got a new enquiry from your portfolio website:</p>
    <blockquote>
        <p><strong>Name:</strong>${contactDetails?.name ?? ""}</p>
        <p><strong>Email:</strong>${contactDetails?.email ?? ""}</p>
        <p><strong>Contact Number:</strong>${contactDetails?.contact_number ?? ""}</p>
        <p><strong>Message:</strong> ${contactDetails?.message ?? ""}</p>
    </blockquote>
    <p>Best wishes,</p>
    <p><strong>Sunil Portfolio</strong></p>
</body>
</html>`
const mailOptions = {
	from: process.env.SMTP_USERNAME, // Sender's email address
	to: contactDetails?.email, // Recipient's email address
	subject: `New enquiry received from portfolio`, // Email subject
	text: htmlContent, // Email body
  };
await sendEmail(mailOptions)

} catch (error) {
	console.log("error",error)
}
}

module.exports ={
	sendEmailService
}
