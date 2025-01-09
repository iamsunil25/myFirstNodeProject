const {ContactUsModel} = require("../models/ContactusUser.model");
const { sendEmailService } = require("./email.service");

// add contact-us details service
const addContactUsDetailsService = async (contactDetails)=>{
	try {
		// let addContactData = await ContactUsModel.create(contactDetails);
		await sendEmailService(contactDetails)
	} catch (error) {
		console.log("error",error)
	}

}
module.exports = {
	addContactUsDetailsService
}
