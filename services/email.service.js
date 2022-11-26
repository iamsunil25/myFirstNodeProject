const emailjs = require("@emailjs/browser")

const sendEmail = async (contactDetails)=>{
	console.log("email  init" );
emailjs.init(process.env.EMAIL_PUBLIC_KEY);
  await emailjs.send(process.env.EMAIL_SERVICE_ID , process.env.EMAIL_TEMPLATE_ID, contactDetails).then(function (res) {
	console.log("email sent successfully",res);
   }).catch((error)=>{
console.log("error while sending email",error);
   })
}
module.exports ={
	sendEmail
}
