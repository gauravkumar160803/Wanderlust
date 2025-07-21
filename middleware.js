const Listing = require("./models/listing");
const review = require("./models/review.js");
const ExpressError = require("./utils/expressError.js");
const { listingSchema,reviewSchema } = require("./schema.js");


//to validate the user is logged in or not 
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Please login before to do this");
        return res.redirect("/login");
    }
    next();
};

// to redirect at the page after login means sending to the page where user comes from 
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

//to validate the owner for editing ,deleting and updating
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// to validate the schema of the listing 
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

// to validate the schema of the reviews
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

// to validate the author of the review to delete it 
module.exports.isreviewAuthor = async (req, res, next) => {
    let { id,reviewId } = req.params;
    let newReview = await review.findById(reviewId);    
    if (!newReview.author.equals(req.user._id)) {
        req.flash("error", "Sorry! You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
