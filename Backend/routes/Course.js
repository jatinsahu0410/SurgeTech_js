// taking the instance 
const express = require("express");
const router = express.Router();

// import in all the controller and middleware for the routes

// Middle ware
const { auth, isStudent, isAdmin, isInstructor} = require("../middleware/auth");

// CONTROLLERS
// course
const {
    createCourse,
    getAllCourses,
    getCourseDetail,
    editCourse,
    getInstructorCourses,
    deleteCourse,
    getFullCourseDetails,
    deleteAllCourses
} = require("../controller/Course");

// categories
const {
    createCategory,
    getAllCategory,
    categoryBasedDetails,
} = require("../controller/Category");

// section
const {
    createSection,
    updateSection,
    deteleSection,
} = require("../controller/Section");

// /Subsection
const {
    createSubSection,
    updateSubSection,
    deleteSubSection,
} = require("../controller/SubSection");

// rating and reviews
const {
    createRating,
    getAverageRating,
    getAllRating,
} = require("../controller/RatingAndReview");

// /courseProgresss route
const{
    CourseProgressVideo
} = require("../controller/CourseProgress")

// Define all the routes require 
// 1) course creation routes --> as the course can only be create by instructor so we need auth ans isInstructor both
router.post("/createCourse", auth, isInstructor, createCourse);
// edit course
router.post("/editCourse", auth, isInstructor, editCourse)
// add a section 
router.post("/addSection", auth, isInstructor, createSection);
// update an section
router.post("/updateSection", auth , isInstructor, updateSection);
// delete a section
router.post("/deleteSection", auth, isInstructor, deteleSection);
// create the subsection
router.post("/addSubSection", auth, isInstructor, createSubSection);
// update an subsection
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
// delete subsection
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
// get all the courses
router.get("/getAllCourses", getAllCourses);
// get course Details
router.post("/getCourseDetail", getCourseDetail);
// get instuctor courses
router.get("/getInstructorCourses",auth, isInstructor, getInstructorCourses)
// delete course by instructor 
router.delete("/deleteCourse", auth, isInstructor, deleteCourse);
// get full course details 
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
// delete all courses of Instructor 
router.delete("/deleteAllCourses", auth, isInstructor, deleteAllCourses);
// updated courseProgress
router.post("/updatedCourseProgress", auth, isStudent, CourseProgressVideo);

/******************************************************************************************************* */
// router Defined for Admin
/************************************************** */

// AS admin can only create th category 
router.post("/createCategory", auth, isAdmin, createCategory);
// show all the categories
router.get("/getAllCategories", getAllCategory);
// get category page details
router.post("/getCategoryPageDetails", categoryBasedDetails);

// now routes for rating and review
router.post("/createRating", auth, isStudent, createRating);
// get average rating
router.get("/getAverageRating", getAverageRating);
// get all reviews
router.get("/getReviews",getAllRating);


// export
module.exports = router;