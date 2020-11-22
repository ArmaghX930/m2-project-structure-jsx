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
    Space.findById(spaceId)
         .then((spaceObj) => {
            const props = {user: req.session.currentUser, space: spaceObj};
            res.render("ViewSpace", props);
         })
         .catch((err) => console.log(err));
});

siteRouter.get("/faq", (req, res, next) => {
    const props = {user: req.session.currentUser};
    res.render("Faq");
});

module.exports = siteRouter;
