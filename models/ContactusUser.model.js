
const mongoose = require("mongoose")
const Schema = mongoose.Schema
// contact-us  data schema
const contactUSchema = Schema({
	name:{
		type:String,
		require:true
	},
email:{
	type:String,
     require:true
	},
	contact_number:{
		type:String,
		require:true
	},
	message:{
type:String,
require:false,
default:""
	}
})

const ContactUsModel = mongoose.model("ContactUsData", contactUSchema)
module.exports ={
	ContactUsModel
}