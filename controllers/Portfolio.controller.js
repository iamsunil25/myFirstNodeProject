const { addContactUsDetailsService } = require("../services/Contact.service");
const {verifyCaptchaToken} = require("../services/verifyToken.service")

// add contact-us details controller  
const addContactUsDetailsController = async (req, res)=>{
	const {token, contactUsData} =req.body;
	if(!token || !contactUsData) return;

let contactData = await addContactUsDetailsService(contactUsData);
const isError= Object.keys(contactData).length==0 ? true:false;
await verifyCaptchaToken(token);	
// if(!isTokenVerified.status) return isTokenVerified;
res.status(201).json({contactUsData:contactData,message: isError ? "email is already present in db": "Contact-us Details Stored Successfully"})
}

module.exports ={
	addContactUsDetailsController,
}