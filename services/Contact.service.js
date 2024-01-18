const {ContactUsModel} = require("../models/ContactusUser.model");
const { sendEmail } = require("./email.service");

// add contact-us details service
const addContactUsDetailsService = async (contactDetails)=>{
	try {
		// let addContactData = await ContactUsModel.create(contactDetails);
		if(true){
	 sendEmail(contactDetails)
		}
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
