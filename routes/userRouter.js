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
     const props = {user: req.session.currentUser};

     res.render("CreateSpace", props);
 });

 userRouter.post("/space/add", (req, res, next) => {
    const {title, address, amenities, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency, imageUrl} = req.body;
    const discount = req.body.discount / 100;
    const providerID = req.session.currentUser._id;

    Space.create({
        title, 
        address,
        amenities, 
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
        const pr = User.findByIdAndUpdate(providerID, {$push:{spaces: spaceID}}, {new: true})
        return pr;
    })
    .then((userObj) => {
        const userId = userObj._id;
        return userId;
    })
    .then((userId) => {
        const pr = User.findByIdAndUpdate(userId, {isProvider: true}, {new: true})
        return pr;
    })
    .then((userObj) => {
        const index = userObj.spaces.length - 1;
        const newSpaceId = userObj.spaces[index];
        return newSpaceId;
    })
    .then((spaceId) => {
        res.redirect(`/space/${spaceId}`);
    })
    .catch((err) => console.log(err)); 
});

userRouter.get("/space/edit/:id", (req, res, next) => {
    const spaceid = req.params.id;
    Space.findById(spaceid)
    .then((spaceObj) => {
        const props = {space: spaceObj, user: req.session.currentUser};
        res.render("EditSpace", props);
    })
    .catch((err) => console.log(err));
});

userRouter.post("/space/edit/:id", (req, res, next) => {
    const spaceid = req.params.id;
    const {title, address, amenities, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency, imageUrl} = req.body;
    const discount = req.body.discount / 100;
    Space.findByIdAndUpdate(spaceid, {title, address, amenities, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency, imageUrl, discount}, {new: true})
    .then((updatedSpace) => {
        const spaceId = updatedSpace._id
        res.redirect(`/space/${spaceId}`);
    })
    .catch((err) => console.log(err));
});

userRouter.get("/space/delete/:id", (req, res, next) => {
    const spaceid = req.params.id;
    Space.findById(spaceid)
    .then((spaceObj) => {
        const props = {space: spaceObj, user: req.session.currentUser};
        res.render("DeleteSpaceMessage", props);
    })
    .catch((err) => console.log(err));
});

userRouter.post("/space/delete/:id", (req, res, next) => {
    const spaceid = req.params.id;
    const providerid = req.session.currentUser._id;        
    User.findByIdAndUpdate(providerid, {$pull: {spaces: spaceid}}, {new: true})
    .then((updatedUserObj) => {
        let isProvider;
        if (updatedUserObj.spaces.length === 0) {
            isProvider = false;
        } else {
            isProvider = true;
        }
        return isProvider;
    })
    .then((isProvider) => {
       const pr = User.findByIdAndUpdate(providerid, {isProvider}, {new: true});
       return pr;    
    })
    .then(() => {
        const pr = Space.findByIdAndDelete(spaceid);
        return pr;
    })
    .then(() => {
        res.redirect("/user/");
    })
    .catch((err) => console.log(err));
})

// userRouter.post("/:id/space/:id/book", (req, res, next) => {
//     // Creates a Booking and Redirects User to their Profile Page
//     res.render("User");
// });

// userRouter.post("/:id/booking/:id/cancel", (req, res, next) => {
//     // Cancels the Booking and Refreshes User's Profile Page
//     res.render("User");
// });

module.exports = userRouter;