const express = require("express");
const userRouter = express.Router();
const app = require("../app");
const Space = require("../models/Space.model");
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

 userRouter.get("/space/add", (req, res, next) => {
     // Renders a Form to Create and Publish a Space

     res.render("CreateSpace");
 });

// userRouter.get("/:id/space/:id", (req, res, next) => {
//     // Renders Space Page for an Authenticated User
//     res.render("Space");
// });

 userRouter.post("/space/add", (req, res, next) => {
    const {title, address, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency, imageUrl} = req.body;
    const discount = req.body.discount / 100;

    const providerID = req.session.currentUser._id;

    Space.create({
        title, 
        address, 
        contactInfo, 
        capacity, 
        welcomePhrase, 
        description, 
        pricePerHour, 
        priceCurrency, 
        discount, 
        imageUrl,
        providerID
    })
    .then((createdSpace) => {
        
        const spaceID = createdSpace._id;
        User.findByIdAndUpdate(providerID, {$push:{spaces: spaceID}}, {new: true})
            .then((userObj) => {
                const userId = userObj._id;
                return userId;

            })
            .then((userId) => {
                User.findByIdAndUpdate(userId, {isProvider: true}, {new: true})
                    .then((userObj) => {
                        const index = userObj.spaces.length - 1;
                        return userObj.spaces[index];
                    })
                    .catch((err) => console.log(err)); 
            })
            .catch((err) => console.log(err)); 
    })
    .then((spaceId) => {
        Space.findById(spaceId)
            .then((spaceObj) => {
                //const props = {space: spaceObj};
                res.redirect('/');
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));


});

// userRouter.post("/:id/space/:id/book", (req, res, next) => {
//     // Creates a Booking and Redirects User to their Profile Page
//     res.render("User");
// });

// userRouter.post("/:id/booking/:id/cancel", (req, res, next) => {
//     // Cancels the Booking and Refreshes User's Profile Page
//     res.render("User");
// });

module.exports = userRouter;