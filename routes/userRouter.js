const express = require("express");
const userRouter = express.Router();
const app = require("../app");
const User = require("../models/User.model");


userRouter.get("/", (req, res, next) => {
    const userid = req.session.currentUser._id;
    User.findById(userid)
    .then((user) => {
        const props = {user: user};
        res.render("UserProfile", props);
    })
    .catch((err) => console.log(err));
});

userRouter.get("/edit", (req, res, next) => {
    const userid = req.session.currentUser._id;
    User.findById(userid)
    .then((user) => {
        const props = {user: user};
        res.render("UserProfileEdit", props);
    })
    .catch((err) => console.log(err));
});

userRouter.post("/edit", (req, res, next) => {
    const userid = req.session.currentUser._id;
    const { imageUrl, username, dateOfBirth, phoneNumber } = req.body;
    User.findByIdAndUpdate(userid, { imageUrl, username, dateOfBirth, phoneNumber }, {new: true})
    .then((updatedUser) => {
        res.redirect("/user");
    })
    .catch((err) => console.log(err));
});

userRouter.get("/delete", (req, res, next) => {
    const userid = req.session.currentUser._id;
    req.session.destroy();
    User.findByIdAndDelete(userid)
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => console.log(err));
});

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