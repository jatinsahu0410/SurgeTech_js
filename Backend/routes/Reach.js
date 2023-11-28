// taking instance of express
const express = require("express");
const router = express.Router();

// import controller required
const { Contact } = require("../controller/Contact");

// define route
router.post("/contact", Contact);


module.exports = router;