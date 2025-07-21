if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


//Importing the routes...
const listings = require("./routes/listings.js");
const reviews = require("./routes/reviews.js");
const users = require("./routes/users.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//connection to DB and Server....

dbURL = process.env.ATLASDB_URL;

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(dbURL);
}
app.listen(8080, () => {
    console.log("Server is working");
});

const store = MongoStore.create({
    mongoUrl: dbURL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("Error in the Mongo Session", err);
});

//cutomization of session..
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};


app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));//starts the authentication in our user schema by passport.local

passport.serializeUser(User.serializeUser()); // in simple terms use to store user's data during the session
passport.deserializeUser(User.deserializeUser());// in simple terms use to unstore user's data during the session

// flash messege...
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});


// Listings routes
app.use("/listings", listings);

// Review routes (nested under listings)
app.use("/listings/:id/reviews", reviews);

// User authentication and account routes
app.use("/", users);

//custom error for page not found..

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found.."));
});

// Express error middleware-----

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});
