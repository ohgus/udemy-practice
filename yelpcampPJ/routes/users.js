const express = require("express");
const router = express.Router();
const passport = require("passport");
const users = require("../controllers/users");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/user");
const {storeReturnTo} = require("../middleware");

// register

router.get("/register", users.renderRegister);

router.post("/register", catchAsync(users.register));

// login

router.get("/login", users.renderLogin);

router.post("/login", storeReturnTo, passport.authenticate("local", {failureFlash: true, failureRedirect: "/login"}), users.login);

// logout

router.get("/logout", users.logout);

module.exports = router;