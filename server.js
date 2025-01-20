const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.set('view engine', 'ejs')

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', async (req, res) => {
  const posts = await Post.find().sort({ timestamp: -1 })
  res.render('index', { posts })
})

app.post('/create', async (req, res) => {
  const { title, content } = req.body
  const newPost = new Post({ title, content })
  await newPost.save()
  res.redirect('/')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
