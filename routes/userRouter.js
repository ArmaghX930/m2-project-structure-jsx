const express = require("express");
const userRouter = express.Router();
const app = require("../app");
const parser = require('./../config/cloudinary');

const Space = require("../models/Space.model");
const User = require("../models/User.model");
const Booking = require("../models/Booking.model");


userRouter.get("/", (req, res, next) => {
    const userid = req.session.currentUser._id;
    User.findById(userid)
    .populate('spaces')
    .populate({
        path: 'bookings', 
        populate: {
            path: 'spaceID'
        }
    })
    .then((user) => {
        console.log(user.bookings[0]);
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

userRouter.post("/edit", parser.single("imageUrl"), (req, res, next) => {
    const userid = req.session.currentUser._id;
    let profilePic;

    let { username, dateOfBirth, phoneNumber } = req.body;
    if (!dateOfBirth) {
        dateOfBirth = req.session.currentUser.dateOfBirth;
    }
    User.findById(userid)
        .then((userObj) => {
            req.file ? profilePic = req.file.url : profilePic = userObj.imageUrl
            const updatedUser = {username, dateOfBirth, phoneNumber, imageUrl: profilePic};
            const pr = User.update({_id: userid}, updatedUser, {new: true});
            return pr;
        })
        .then(() => {
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

 userRouter.post("/space/add", parser.single("imageUrl"), (req, res, next) => {
    const {title, address, city, amenities, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency} = req.body;
    let availToday = req.body.availToday;
    availToday ? availToday : availToday = false;
    const discount = req.body.discount / 100;
    let imageUrl;
    req.file ? imageUrl = req.file.secure_url : imageUrl = "";
    const providerID = req.session.currentUser._id;

    Space.create({
        title, 
        address,
        city,
        amenities, 
        contactInfo, 
        capacity, 
        welcomePhrase, 
        description, 
        pricePerHour, 
        priceCurrency, 
        discount,
        imageUrl,
        availToday,
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

userRouter.post("/space/edit/:id", parser.single("imageUrl"), (req, res, next) => {
    const spaceid = req.params.id;
    const {title, address, city, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency} = req.body;
    let availToday = req.body.availToday;
    availToday ? availToday : availToday = false;
    let amenities = req.body.amenities;
    amenities ? amenities : amenities = [];
    const discount = req.body.discount / 100;
    const coordinates = [Number(req.body.longitude), Number(req.body.latitude)];
    let spacePic;
    Space.findById(spaceid)
        .then((spaceObj) => {
            req.file ? spacePic = req.file.secure_url : spacePic = spaceObj.imageUrl;
            const updatedSpace = {title, address, coordinates, city, amenities, contactInfo, capacity, welcomePhrase, description, pricePerHour, priceCurrency, imageUrl: spacePic, discount, availToday};
            const pr = Space.findByIdAndUpdate(spaceid, updatedSpace, {new: true});
            return pr;
        })
        .then((updatedSpace) => {
            console.log("UPDATED SPACE", updatedSpace);
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


userRouter.get("/space/book/:id", (req, res, next) => {
    
    const user = req.session.currentUser;
    const spaceId = req.params.id;

    Space.findById(spaceId)
         .populate('providerID')
         .then((spaceObj) => {
             const props = {user: user, space: spaceObj};

             res.render('CreateBooking', props)
         })
         .catch((err) => console.log(err));
});

userRouter.post("/space/book/:id", (req, res, next) => {
    // Creates a Booking and Redirects User to their Profile Page
    const clientID = req.session.currentUser._id;
    const spaceID = req.params.id;
    const {startDate, startTime} = req.body;

    Space.findById(spaceID)
         .then((spaceObj) => {
             console.log(spaceObj);
             const {pricePerHour, discount} = spaceObj;
             const priceWithDiscount = pricePerHour * ( 1 - discount );
             return (pricePerHour, discount, priceWithDiscount);
         })
         .then((pricePerHour, discount, priceWithDiscount) => {
            const pr = Booking.create({clientID, spaceID, startDate, startTime, pricePerHour, discount, priceWithDiscount});
            return pr;
         })
         .then((newBooking) => {
            const bookingID = newBooking._id;
            User.findByIdAndUpdate(clientID, {$push:{bookings: bookingID}}, {new: true})     
            .then(() => {
                res.redirect("/user/");
            }) 
         })
         .catch((err) => console.log(err));
});

// userRouter.post("/:id/booking/:id/cancel", (req, res, next) => {
//     // Cancels the Booking and Refreshes User's Profile Page
//     res.render("User");
// });

module.exports = userRouter;