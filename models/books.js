const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: {type: String, default: 'https://unsplash.com/photos/white-and-brown-book-on-brown-woven-surface-LUGuCtvlk1Q'}
})

const Books = mongoose.model('Books', bookSchema)

module.exports = Books