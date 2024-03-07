const {ContactUsModel} = require("../models/ContactusUser.model");
const { sendEmail } = require("./email.service");

// add contact-us details service
const addContactUsDetailsService = async (contactDetails)=>{
	try {
			sendEmail(contactDetails)
		await ContactUsModel.create(contactDetails);
return {success:true};
	} catch (error) {
// 		console.log("error while storing contact details", error);
// 		if(error.code===11000){	
// return error;
// 		}
		throw new Error(error)
	}

}
module.exports = {
	addContactUsDetailsService
}
