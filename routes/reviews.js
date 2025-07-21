const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isreviewAuthor } = require("../middleware.js");
const reviewControllers = require("../controllers/reviews.js");


router.post("/", isLoggedIn, validateReview, wrapAsync(reviewControllers.createReview));

router.delete("/:reviewId", isLoggedIn, isreviewAuthor, wrapAsync(reviewControllers.deleteReview));

module.exports = router;
