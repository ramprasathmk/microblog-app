const mongoose = require('mongoose')
// const ObjectID = new mongoose.Schema.ObjectId;

// Schema for the `post`
const userSchema = new mongoose.Schema({
  //   _id: ObjectID,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  //   _v: { type: Number, default: 1},
})

// Model for the `post`
module.exports = mongoose.model('User', userSchema)
