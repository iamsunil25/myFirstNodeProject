const {ContactUsModel} = require("../models/ContactusUser.model");
const { sendEmail } = require("./email.service");

// add contact-us details service
const addContactUsDetailsService = async (contactDetails)=>{
	try {
		// console.log("req body",contactDetails);
	// let isConatctUsDetailsAlreadyPresent = await ContactUsModel.findOne({email: contactDetails.email}) 
	// console.log("🚀 ~ file: Contact.service.js ~ line 10 ~ addContactUsDetailsService ~ isConatctUsDetailsAlreadyPresent", isConatctUsDetailsAlreadyPresent)
	
	
	// if(isConatctUsDetailsAlreadyPresent){
	// 	console.log("filled data", isConatctUsDetailsAlreadyPresent);
	//  throw new Error(isConatctUsDetailsAlreadyPresent)
    // }


		let addContactData = await ContactUsModel.create(contactDetails) 
		if(addContactData){
		await sendEmail(contactDetails)
		}
return addContactData;
	} catch (error) {
		console.log("error while storing contact details", error);
		if(error.code===11000){	
return error;
		}
		throw new Error(error)
	}

}
module.exports = {
	addContactUsDetailsService
}
