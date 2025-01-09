const express = require("express");
const mongoose = require("mongoose");
const { model } = mongoose;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config({ path: "./.env" });
const { postSchema } = require("./model/Post");
const { connectToDb } = require("./db");

connectToDb().catch((err) => console.error("db error happened", err));

const PORT = 3001;

// routes
app.get("/blog", async (req, res) => {
  try {
    const Post = model("Post", postSchema);
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send({ error: "An error occurred while fetching posts." });
  }
});

app.get("/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Fetch the post by ID from MongoDB
    const Post = model("Post", postSchema);
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.send(post);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the post" });
  }
});

app.delete("/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Fetch the post by ID from MongoDB
    const Post = model("Post", postSchema);
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.send(post);
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    res
      .status(500)
      .send({ error: "An error occurred while deleting the post" });
  }
});

// app.post("/blog", async (req, res) => {
//   // const Post = mongoose.model("Post", postSchema);
//   // const blah = new Post({
//   //   title: "MongoDb",
//   //   author: "Nick",
//   //   body: "This is a test",
//   //   date: new Date(),
//   //   comments: [
//   //     { body: "This is a great blog post", date: new Date(), author: "Nick" },
//   //   ],
//   // });
//   // blah.save();
// });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
