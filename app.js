
require('./mongodb')

const express = require("express")
const { SERVER_LISTENING_MESSAGE } = require("./constantMessage")
global.XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();
// global.XMLHttpRequest.XMLHttpRequest;
const contactUsRouter = require("./routes/Portfolio.route");



const logger = require("morgan")
const app = express()
const bodyParser = require("body-parser")
// let whitelist = ['https://iamsunil25.github.io/portfolio',]
// const cors = require("cors")
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
const port = process.env.PORT || 3000
// middleware
app.use(express.json())
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));

// app.use(cors(corsOptions));
// Parses the text as json
app.use(bodyParser.json());
 
app.use(logger("tiny"))
 
app.use("/portfolio", contactUsRouter);
app.listen(port,()=>{
	console.log(`${SERVER_LISTENING_MESSAGE} ${port} `);
})

module.exports = app
