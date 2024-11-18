const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3333;

mongoose.connect('mongodb://127.0.0.1:27017/microblog_db', { useNewUrlParser: true, useUnifiedTopology: true });
app.set('view engine', 'ejs');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', async (req, res) => {
  const posts = await Post.find().sort({ timestamp: -1 });
  res.render('./index.ejs', { posts });
  
});

app.post('/create', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running in the http://localhost:${PORT}`);
});
