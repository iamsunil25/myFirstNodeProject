const express = require("express");
const {
addContactUsDetailsController
} = require("../controllers/Portfolio.controller");
 
const router = express.Router();
 
router.route("/contact-us").post(addContactUsDetailsController)
module.exports = router;