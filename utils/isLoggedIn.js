function isLoggedIn (req, res, next) {
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect('/auth');
    }
};

module.exports = isLoggedIn;