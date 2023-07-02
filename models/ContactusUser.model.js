
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
     require:true,
	//  unique:true
	},
	contact_number:{
		type:String,
		require:true,
		// unique:true
	},
	message:{
type:String,
require:false,
default:""
	},

},	{
	timestamps: true
  })

const ContactUsModel = mongoose.model("ContactUsData", contactUSchema)
module.exports ={
	ContactUsModel
}