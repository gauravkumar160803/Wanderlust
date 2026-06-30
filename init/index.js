const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

 dbURL = process.env.ATLASDB_URL;
main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(dbURL);
};
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj=>({...obj,owner:'687f4644b40c0225c6fb447a'})));
    await Listing.insertMany(initData.data);
};
initDB();