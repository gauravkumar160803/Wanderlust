const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");
let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(MONGO_URL);
};
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj=>({...obj,owner:'686ab92ec062d862640d3f1f'})));
    await Listing.insertMany(initData.data);
};
initDB();