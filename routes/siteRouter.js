const express = require("express");
const app = require("../app");
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
    const props = {user: req.session.currentUser};
    res.render("Space");
});

siteRouter.get("/faq", (req, res, next) => {
    const props = {user: req.session.currentUser};
    res.render("Faq");
});

module.exports = siteRouter;
