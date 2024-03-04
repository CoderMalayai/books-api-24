const express = require('express')
const router = express.Router()

const Books = require('../models/books.js')

router.get('/', async (req, res) => {
    try {
        const books = await Books.find()
        res.json(books)
    } catch (err) {
        res.status(404).json({msg: 'Books are not found!'})
    }
})

router.put('/:id', async (req, res) => {
    if (!req.body.imageURL) {
        req.body.imageURL = undefinded
    }
    try {
        const updateBook = await Books.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updateBook)
        res.status(200).json('Book has Updated!')
    } catch (err) {
        res.status(400).send('Error404')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundBook = await Books.findById(req.params.id)
        if (!foundBook) {
            res.status(404).json({msg: 'This book is not found!'})
        }
        res.json(foundBook)
    } catch (err) {
        res.status(404).send('Error404')
    }
})

router.post('/', (req, res) => {
    if (!req.body.imageURL) {
        req.body.imageURL = undefined
    }
    try {
        Books.create(req.body)
        res.status(201).json('Book has been created!')
    } catch (err) {
        res.status(400).send('Error404')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id)
        res.status(200).json('Book has been deleted!')
    } catch (err) {
        res.status(400).send('Error404')
    }
})

module.exports = router