const express = require('express')

const users = require('../data/helpers/userDb')

const router = express.Router();

router.post('/', (req, res) => {
    const {name} = req.body;
    users
    .insert({name})
    .then(response => {
        res.status(201).send(response)
    })
})

// READ our CRUD
router.get('/', (req, res) => {
  users
  .get()
  .then(users => {
      res.status(200).send(users)
  })
  .catch(err => {
      res.status(500)
  })
});

  module.exports = router