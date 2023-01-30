const { addContactUsDetailsService } = require("../services/Contact.service");
const {verifyCaptchaToken} = require("../services/verifyToken.service")

// add contact-us details controller  
const addContactUsDetailsController = async (req, res)=>{
	const {token, contactUsData} =req.body;
	if(!token || !contactUsData) return;

let contactData = await addContactUsDetailsService(contactUsData);
await verifyCaptchaToken(token);	
// if(!isTokenVerified.status) return isTokenVerified;
res.status(201).json({contactUsData:contactData,message:"Contact-us Details Stored Successfully"})
}

module.exports ={
	addContactUsDetailsController,
}