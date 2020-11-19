const express = require("express");
const app = require("../app");
const siteRouter = express.Router();

siteRouter.get("/", (req, res, next) => {
    res.render("Home");
});

siteRouter.get("/search", (req, res, next) => {
    res.render("SearchResults");
});

siteRouter.get("/space/:id", (req, res, next) => {
    res.render("Space");
});

siteRouter.get("/faq", (req, res, next) => {
    res.render("Faq");
});

module.exports = siteRouter;
