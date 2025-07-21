const Listing = require("../models/listing.js");
const { streamUpload, cloudinary } = require("../cloudConfig.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author", } }).populate("owner");
    if (!listing) {
        req.flash("error", " That listing is no longer available");
        return res.redirect("/listings");
    }
    res.render("listing/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    const response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send()
    req.body.listing.price = Number(req.body.listing.price);
    const result = await streamUpload(req.file.buffer, 'Listings');
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.geometry = response.body.features[0].geometry;
    newlisting.image.url = result.secure_url;
    newlisting.image.public_id = result.public_id;
    await newlisting.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", " That listing is no longer available");
        return res.redirect("/listings");
    }
    res.render("listing/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
    const response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send()
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (req.file) {
        if (listing.image && listing.image.public_id) {
            await cloudinary.uploader.destroy(listing.image.public_id);
        }
        const result = await streamUpload(req.file.buffer, 'Listings');
        listing.image.url = result.secure_url;
        listing.image.public_id = result.public_id;
    }
    listing.title = req.body.listing.title;
    listing.description = req.body.listing.description;
    listing.image.description = req.body.listing.image.description;
    listing.price = req.body.listing.price;
    listing.country = req.body.listing.country;
    listing.location = req.body.listing.location;
    listing.geometry = response.body.features[0].geometry;
    await listing.save();
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (listing.image?.public_id) {
        await cloudinary.uploader.destroy(listing.image.public_id);
    }
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
};