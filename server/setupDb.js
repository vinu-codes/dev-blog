const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const { postSchema } = require("./model/Post");

const URI = process.env.MONGODB_URI;

console.log("MONGODB_URI:", process.env.MONGODB_URI);

async function connectToDb() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToDb()
  .then(() => {
    console.log("MongoDB connection successful");

    // Define schema
    const postSchema = new mongoose.Schema({
      title: String,
      author: String,
      body: String,
      date: { type: Date, default: Date.now },
      comments: [{ body: String, date: Date, author: String }],
    });

    // Define and export the Post model
    const Post = mongoose.model("Post", postSchema);
  })
  .catch((err) => console.error("Error during connection:", err));
