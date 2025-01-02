const mongoose = require('mongoose')
// const ObjectID = new mongoose.Schema.ObjectId;

// Schema for the `post`
const postSchema = new mongoose.Schema({
  // _id: ObjectID,
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  // _v: { type: Number, default: 1 },
})

// Model for the `post`
module.exports = mongoose.model('Post', postSchema)
