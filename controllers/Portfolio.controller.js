const { addContactUsDetailsService } = require("../services/Contact.service");
const {verifyCaptchaToken} = require("../services/verifyToken.service")

// add contact-us details controller  
const addContactUsDetailsController = async (req, res)=>{
	const {token, contactUsData} =req.body;
	if(!token ) return;
	if(!contactUsData) return;

let contactData = await addContactUsDetailsService(contactUsData);
if(contactData && contactData.code === 11000){	
	// console.log("🚀 sunil_lund",contactData.code)
	res.status(409).json({message: "You have already raised a query with this data."})
}


// verify google captcha
 verifyCaptchaToken(token);	
res.status(201).json({message: "Your query raised Successfully."})
}

module.exports ={
	addContactUsDetailsController,
}
