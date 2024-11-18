const mongoose = require("mongoose");

// Schema for the `post`
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

// Model for the `post`
module.exports = mongoose.model("Post", postSchema);
