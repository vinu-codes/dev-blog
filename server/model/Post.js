const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  author: String,
  body: String,
  date: Date,
  comments: [{ body: String, date: Date, author: String }],
});

const Post = model("Post", postSchema);

module.exports = { Post, postSchema };
