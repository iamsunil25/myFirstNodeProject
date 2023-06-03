const { addContactUsDetailsService } = require("../services/Contact.service");
const {verifyCaptchaToken} = require("../services/verifyToken.service")

// add contact-us details controller  
const addContactUsDetailsController = async (req, res)=>{
	const {token, contactUsData} =req.body;
	if(!token ) return;
	if(!contactUsData) return;

let contactData = await addContactUsDetailsService(contactUsData);

// duplicate email
if(contactData?.code===11000){	
	res.status(409).json({message: "You have already raised a query with this data."})
}

// verify google captcha
await verifyCaptchaToken(token);	
res.status(201).json({message: "Your query raised Successfully."})
}

module.exports ={
	addContactUsDetailsController,
}