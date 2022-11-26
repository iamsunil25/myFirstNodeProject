const {ContactUsModel} = require("../models/ContactusUser.model");
const { sendEmail } = require("./email.service");

// add contact-us details service
const addContactUsDetailsService = async (contactDetails)=>{
	try {
		console.log("req body",contactDetails);

	let isConatctUsDetailsAlreadyPresent = await ContactUsModel.find({$or: [ {contactNumber:{$eq: contactDetails.contact_number}}, {email:{$eq: contactDetails.email}} ] }) 
	console.log("🚀 ~ file: Contact.service.js ~ line 10 ~ addContactUsDetailsService ~ isConatctUsDetailsAlreadyPresent", isConatctUsDetailsAlreadyPresent)
	
	
	if(isConatctUsDetailsAlreadyPresent.length===0){
		console.log("filled data", isConatctUsDetailsAlreadyPresent);
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
