// taking the instance of required things 
const express = require("express");
// router 
const router = express.Router();

// import the required controller and middleware
const {
    login,
    signUp,
    sendOTP,
    changePassword
} = require("../controller/Auth");

// for the reset password
const {
    resetPasswordToken,
    resetPassword
}= require("../controller/ResetPassword");

// now the middlewares
const {auth} = require("../middleware/auth");


// Define routes for login, signUp , sendOTP and changePassword
router.post("/login", login);

// signUp
router.post("/signup",signUp);

// sendOTP
router.post("/sendotp",sendOTP);

// changePassword
router.post("/changepassword",auth, changePassword);

// define Route for Reset Password

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

// export the user route
module.exports= router;