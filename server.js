// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(cors())

const booksController = require('./controllers/books-controllers.js')
app.use('/books', booksController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Books API!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})