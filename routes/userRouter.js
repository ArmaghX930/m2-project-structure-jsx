const express = require("express");
const userRouter = express.Router();
const app = require("../app");
const isLoggedIn = require('./../utils/isLoggedIn');

userRouter.get("/:id", isLoggedIn, (req, res, next) => {
    const userId = req.params;
    console.log(userId);
    // const props = {user: req.session.currentUser.user};
    res.render("UserProfile");
});

// userRouter.post("/:id", (req, res, next) => {
//     // Updates User's Profile Info and Refreshes the Profile Page after Editing
//     res.render("UserProfile");
// });

// userRouter.get("/:id/space/add", (req, res, next) => {
//     // Renders a Form to Create and Publish a Space
//     res.render("Space");
// });

// userRouter.get("/:id/space/:id", (req, res, next) => {
//     // Renders Space Page for an Authenticated User
//     res.render("Space");
// });

// userRouter.post("/:id/space/:id", (req, res, next) => {
//     // Updates Provider's View of Space Page and Refreshes the Space Info after Editing
//     res.render("Space");
// });

// userRouter.post("/:id/space/:id/book", (req, res, next) => {
//     // Creates a Booking and Redirects User to their Profile Page
//     res.render("User");
// });

// userRouter.post("/:id/booking/:id/cancel", (req, res, next) => {
//     // Cancels the Booking and Refreshes User's Profile Page
//     res.render("User");
// });

module.exports = userRouter;