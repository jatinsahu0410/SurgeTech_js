// taking the instance of express
const express = require("express");
const router = express.Router();

// import the middle ware
const { auth, isStudent} = require("../middleware/auth");


// import the required controller
const {
    capturePayment,
    verifyPayment,
    sendPaymentSuccessEmail
} = require("../controller/PaymentLayer");

// define the routes
router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifyPayment", auth, isStudent, verifyPayment);
router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);
// export the module

module.exports = router;