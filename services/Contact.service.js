const {ContactUsModel} = require("../models/ContactusUser.model");
const { sendEmail } = require("./email.service");

// add contact-us details service
const addContactUsDetailsService = async (contactDetails)=>{
	try {
	let {contact_number, email} = contactDetails; 
	let isConatctUsDetailsAlreadyPresent = await ContactUsModel.find({$or: [ {contactNumber:{$eq: contact_number}}, {email:{$eq: email}} ] }) 
	
	console.log("req body",isConatctUsDetailsAlreadyPresent);
	
	if(isConatctUsDetailsAlreadyPresent)
	{
	throw new Error("You have already filled the form")
    }


		let addContactData = await ContactUsModel.create(contactDetails) 
		if(addContactData){
		await sendEmail(contactDetails)
		}
return addContactData;
	} catch (error) {
		console.log("error while storing contact details", error);
		return error
	}

}
module.exports = {
	addContactUsDetailsService
}
