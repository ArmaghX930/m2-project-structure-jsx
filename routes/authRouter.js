const express = require("express");
const authRouter = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

authRouter.get("/", (req, res, next) => {
    res.render("Authentication");
});

authRouter.post("/login", (req, res, next) => {
    // Logic for the login functionality
    const {email, password} = req.body;

    if (email === "" || password === ""){
        const props = {errorMessage: "Please fill in all required fields."};
        res.render("Authentication", props);
        return;
    }
    
    User.findOne({email})
        .then((user) => {
            if (!user){
                const props = {errorMessage: "This email is not registered."};
                res.render("Authentication", props);
                return;
            }
            const passwordCorrect = bcrypt.compareSync(password, user.password);
            if (passwordCorrect) {
                user.password = "***";
                req.session.currentUser = user;
                const props = {user};
                res.redirect(`/user/${props.user._id}`); // Instead of Home, redirect to the Previous visited Page
            }
            else {
                const props = {errorMessage: "Wrong password. Try again"};
                res.render("Authentication", props);
                return;
            }

        })
        .catch((err) => console.log(err));

});

authRouter.post("/signup", (req, res, next) => {
    // Logic for the signup functionality
    const {username, email, password, repeatPassword} = req.body;

    if (username === "" || email === "" || password === "" || repeatPassword === ""){
        const props = {errorMessage: "Please fill in all required fields."};
        res.render("Authentication", props);
        return;
    }
    else if (password.length < 5) {
        const props = {errorMessage: "Your password must be at least 5 characters long."};
        res.render("Authentication", props);
        return;
    }
    else if (password !== repeatPassword){
        const props = {errorMessage: "Password and Repeat Password must match"};
        res.render("Authentication", props);
        return;
    }
    User.findOne({email})
        .then((userObj) => {
            if (userObj){
                const props = {errorMessage: "This email is already registered."};
                res.render("Authentication", props);
                return;
            }

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashPassword = bcrypt.hashSync(password, salt);

            User.create({
                username: username, 
                email: email, 
                password: hashPassword
            })
            .then((user) => {
                user.password = "***";
                req.session.currentUser = user;
                const props = {user};
                res.render("Home", props); // Instead of Home, redirect to the Previous visited Page
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});

module.exports = authRouter;
