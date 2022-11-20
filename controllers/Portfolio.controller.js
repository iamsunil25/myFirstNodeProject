const { addContactUsDetailsService } = require("../services/Contact.service");


// add contact-us details controller  
const addContactUsDetailsController = async (req, res)=>{
let contactData = await addContactUsDetailsService(req.body.contactUsData)
res.status(201).json({contactUsData:contactData,message:"Contactus Details Stored Successfully"})
}


module.exports ={
	addContactUsDetailsController
}