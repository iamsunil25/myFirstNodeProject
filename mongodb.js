const dotenv = require('dotenv')
const mongoose = require("mongoose")
dotenv.config();
// const MongoClient = require("mongodb").MongoClient;
const { MONGODB_CONNECTION_ERROR, MONGODB_CONNECTION_SUCCEED } = require("./constantMessage");


mongoose.connect(process.env.MONGODB_DEV_URL, 
	{
	useNewUrlParser:true,
	useUnifiedTopology:true,
},
(err)=>{
	if(err){
		console.log(MONGODB_CONNECTION_ERROR,err);
	}
	else{
		console.log(MONGODB_CONNECTION_SUCCEED);
	}

})


