const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const URI = process.env.MONGODB_URI;

async function connectToDb() {
  await mongoose.connect(URI);
}

connectToDb().catch((err) => console.error("db error happened", err));

module.exports = { connectToDb };
