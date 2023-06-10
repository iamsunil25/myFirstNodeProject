require('./mongodb')
const express = require("express")
const { SERVER_LISTENING_MESSAGE } = require("./constantMessage")
global.XMLHttpRequest = require('xhr2');
const contactUsRouter = require("./routes/Portfolio.route");

const logger = require("morgan")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors");
const { ignoreFavicon } = require('./utility/utilityFunction');
app.use(cors({
	origin:'https://iamsunil25.github.io',
	methods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}));
// app.options('*', cors());
const port = process.env.PORT || 3000
// middleware
app.use(express.json())
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));

// app.use(cors(corsOptions));
// Parses the text as json
app.use(bodyParser.json());
 
app.use(logger("tiny"))
app.use(ignoreFavicon);
app.use("/",async(req,res)=>{
	res.status(200).json({message: "Hurray! Server is listening..."})
})
app.use("/portfolio", contactUsRouter);
app.listen(port,()=>{
	console.log(`${SERVER_LISTENING_MESSAGE} ${port} `);
})

module.exports = app
