const { ALREADYRAISEDQUERY, ALREADY_RAISED_QUERY, QUERY_RAISED_SUCCESSFULL } = require("../constantMessage");
const { addContactUsDetailsService } = require("../services/Contact.service");
const {verifyCaptchaToken} = require("../services/verifyToken.service")

// add contact-us details controller  
const addContactUsDetailsController = async (req, res)=>{
	const {token, contactUsData} =req.body;
	if(!token ) return;
	if(!contactUsData) return;

await addContactUsDetailsService(contactUsData);
// verify google captcha
 verifyCaptchaToken(token);	
res.status(201).json({message: QUERY_RAISED_SUCCESSFULL})
}

module.exports ={
	addContactUsDetailsController,
}
