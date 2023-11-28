// /taking the instance
const express = require("express");
const router = express.Router();

// import the require controller and middleware
// MIDDLEWARE

const {auth, isInstructor} = require("../middleware/auth");

// /CONTROLLERS OF Profile
const {
    updateProfile,
    deleteAccount,
    getAllUserDetails,
    getEnrolledCourses,
    updateDisplayPicture,
    instructorDashboard,
} = require("../controller/Profile");


// DEFINE ROUTES FOR THE PROFILE CONTROLLER
// delete profile 
router.delete("/deleteAccount",auth, deleteAccount);
router.put("/updateProfile",auth, updateProfile);
router.get("/getUserDetails",auth,getAllUserDetails);

// get the course details 
router.get("/getEnrolledCourses",auth, getEnrolledCourses);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard);

// exports 
module.exports = router;