const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingControllers = require("../controllers/listings.js");
const multer  = require('multer');
const {upload} =require("../cloudConfig.js");

router.route("/")
    .get(wrapAsync(listingControllers.index))
    .post(isLoggedIn, validateListing, upload.single('listing[image][url]'), wrapAsync(listingControllers.createListing));


router.get("/new", isLoggedIn, listingControllers.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingControllers.showListing))
    .put(isLoggedIn, isOwner, validateListing,upload.single('listing[image][url]'), wrapAsync(listingControllers.updateListing))
    .delete(isLoggedIn, isOwner,upload.single('listing[image][url]'), wrapAsync(listingControllers.deleteListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingControllers.editListing));

module.exports = router;