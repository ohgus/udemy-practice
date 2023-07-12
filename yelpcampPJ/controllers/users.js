const User = require("../models/user");


// register
module.exports.renderRegister = (req, res) => {
    res.render("users/register");
}

module.exports.register = async(req, res) => {
    try{
        const {email, username, password} = req.body;
        const user = new User({email, username});
        const registerdUser = await User.register(user, password);
        req.login(registerdUser,err => {
            if(err) return next(err);
            req.flash("success","Welcome to Yelp Camp!");
            res.redirect("/campgrounds");
        })
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/register");
    }
}

// login

module.exports.renderLogin = (req, res) => {
    res.render("users/login");
}

module.exports.login = (req, res) => {
    req.flash("success", "Welcome Back!");
    const redirectUrl = res.locals.returnTo || "/campgrounds";
    res.redirect(redirectUrl);
}

// logout

module.exports.logout = (req, res, next) => {
    req.logOut(function (err) {
        if(err) {
            return next(err);
        }
        req.flash("success", "Goodbye!");
        res.redirect("/campgrounds");
    });
}