const express = require('express')

const posts = require('../data/helpers/postDb')

const router = express.Router();

router.post('/', (req, res) => {
    const {text} = req.body;
    posts
    .insert({text})
    .then(response => {
        res.status(201).send(response)
    })
})

router.get('/', (req, res) => {
    posts
    .get()
    .then(posts => {
        res.status(200).send(posts)
    })
    .catch(err => {
        res.status(500)
    })
  });

  module.exports = router