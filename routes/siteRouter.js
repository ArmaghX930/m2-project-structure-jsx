const express = require("express");
const app = require("../app");
const Space = require("../models/Space.model");
const siteRouter = express.Router();

siteRouter.get("/", (req, res, next) => {
    const props = {user: req.session.currentUser};
    res.render("Home", props);
});

siteRouter.get("/search", (req, res, next) => {
    const props = {user: req.session.currentUser};
    res.render("SearchResults");
});

siteRouter.get("/space/:id", (req, res, next) => {
    const spaceId = req.params.id;
    const userObj = req.session.currentUser;
    Space.findById(spaceId)
        .populate('providerID')
        .then((spaceObj) => {
            console.log("PROVIDER ID NAME " + spaceObj.providerID[0]._id);
            const props = {user: userObj, space: spaceObj};
            res.render("ViewSpace", props);
        })
        .catch((err) => console.log(err));
});

siteRouter.get("/faq", (req, res, next) => {
    const props = {user: req.session.currentUser};
    res.render("Faq");
});

module.exports = siteRouter;
