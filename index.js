require('./mongodb')
const express = require("express")
const { SERVER_LISTENING_MESSAGE } = require("./constantMessage")
global.XMLHttpRequest = require('xhr2');
const contactUsRouter = require("./routes/Portfolio.route");

const logger = require("morgan")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors");
app.use(cors());
app.options('*', cors()); 
// app.use(cors({ origin: '*' }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
  
const port = process.env.PORT || 3000
// middleware
app.use(express.json())
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));

// app.use(cors(corsOptions));
// Parses the text as json
app.use(bodyParser.json());
 
app.use(logger("tiny"))
// app.use(ignoreFavicon);
app.use("/portfolio", contactUsRouter);
app.listen(port,()=>{
	console.log(`${SERVER_LISTENING_MESSAGE} ${port} `);
})

module.exports = app
