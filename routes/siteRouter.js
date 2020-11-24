const express = require("express");
const app = require("../app");
const Space = require("../models/Space.model");
const siteRouter = express.Router();

siteRouter.get("/", (req, res, next) => {
    
    Space.find()
         .then((allSpacesArr) => {
             let citiesArr = [];
             allSpacesArr.map((space) => {
                if (!citiesArr.includes(space.city)){
                    citiesArr.push(space.city);
                }
             })
            return citiesArr;
         })
         .then((citiesArr) => {
    
            Space.find()
            .limit(4)
            .then((spaceObjArr) => {
                const props = {user: req.session.currentUser, spaces: spaceObjArr, cities: citiesArr};
                res.render("Home", props);
            })

         })
         .catch((err) => console.log(err));
});

siteRouter.get("/search", (req, res, next) => {
    const {city, pricePerHour, capacity} = req.query;
    const searchQuery = {city, pricePerHour, capacity};
   
    Space.find()
         .then((allSpacesArr) => {
             let citiesArr = [];
             allSpacesArr.map((space) => {
                if (!citiesArr.includes(space.city)){
                    citiesArr.push(space.city);
                }
             })
            return citiesArr;
         })
         .then((citiesArr) => {

            Space.find({$and:[{city: city}, {pricePerHour:{$lte:pricePerHour}}, {capacity:{$gte:capacity}}]})
            .then((resultsArr) => {
                
               const props = {user: req.session.currentUser, spaces: resultsArr, search: searchQuery, cities: citiesArr};
               res.render("SearchResults", props);
            })
         })
         .catch((err) => console.log(err));
});

siteRouter.get("/space/:id", (req, res, next) => {
    const spaceId = req.params.id;
    const userObj = req.session.currentUser;
    Space.findById(spaceId)
        .populate('providerID')
        .then((spaceObj) => {

            console.log(spaceObj);
            const props = {user: userObj, space: spaceObj};
            res.render("ViewSpace", props);
        })
        .catch((err) => console.log(err));
});

siteRouter.get("/faq", (req, res, next) => {
    const props = {user: req.session.currentUser};
    res.render("Faq", props);
});

module.exports = siteRouter;
