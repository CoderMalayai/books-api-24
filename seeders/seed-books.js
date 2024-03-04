const Books = require("../models/books.js")
const mongoose = require("mongoose")

require("dotenv").config()
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(() => {
    console.log(`Connected to MONGO: ${MONGO_URI}`)
})

Books.insertMany([
    {
        title: "Hello Kitty and Friends Character Guide",
        description: "Adorable guide has everything you need to know about all her friends and the adventures they go on!",
        year: 2023,
        quantity: 15,
        imageURL: "https://m.media-amazon.com/images/I/71IlOzjwMgL._SY385_.jpg",
    },
    {
        title: "Little Bun: A Bilingual Storybook about Feelings",
        description: "Little Bun is learning how to express his emotions with words. Little Bun is sharing how he feels so people around him can understand him and support him.",
        year: 2022,
        quantity: 10,
        imageURL: "https://m.media-amazon.com/images/I/51dLogIWZHL._SY385_.jpg",
    },
    {
        title: "My Brain Is Magic: A Sensory-Seeking Celebration",
        description: "This sensory-seeking celebration shines a light on neurodiversity and sensory processing in a fun and action-packed way for all children to enjoy.",
        year: 2023,
        quantity: 5,
        imageURL: "https://m.media-amazon.com/images/I/91IIB177p3L._SY385_.jpg",
    },
    {
        title: "One Chicken Nugget",
        description: "This is a problem if you happen to sell chicken nuggets, and Celeste sells the finest nuggets around. But Frank scares her other customers away, so she’s forced to cook up an eating contest of monstrous proportions to get rid of him. If Frank wins, Celeste will make him free chicken nuggets for life. But if he loses, he must leave and never return.",
        year: 2023,
        quantity: 9,
        imageURL: "https://m.media-amazon.com/images/I/71QVgScH6+L._SY385_.jpg",
    }
])
.then(() => {
    console.log('Great Job creating books!')
})
.catch(err => {
    console.log('Was not able to create books: ', err)
})