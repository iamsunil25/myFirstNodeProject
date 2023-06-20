const express = require("express");
const {
addContactUsDetailsController
} = require("../controllers/Portfolio.controller");
const { WELCOME_MESSAGE } = require("../constantMessage");

const router = express.Router();
 
router.route("/v1/contact-us").post(addContactUsDetailsController)
// router.route("/welcome").get(async(_,res)=>{
// 	res.status(200).json({message: WELCOME_MESSAGE})
// })
module.exports = router;