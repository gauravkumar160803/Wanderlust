const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers = require("../controllers/users.js");

router.route("/signup")
    .get(wrapAsync(userControllers.signupForm))
    .post(wrapAsync(userControllers.signup));

router.route("/login")
    .get(wrapAsync(userControllers.loginForm))
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), wrapAsync(userControllers.login));

router.get("/logout", wrapAsync(userControllers.logout));

module.exports = router;
