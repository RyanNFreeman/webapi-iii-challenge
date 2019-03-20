const express = require('express')
const server = express()

const posts = require('./data/helpers/postDb')
const users = require('./data/helpers/userDb')

server.use(express.json())

// READ our CRUD
server.get('/api/users', (req, res) => {
  users
  .get()
  .then(users => {
      res.status(200).send(users)
  })
  .catch(err => {
      res.status(500)
  })
});

server.get('/api/posts', (req, res) => {
    posts
    .get()
    .then(posts => {
        res.status(200).send(posts)
    })
    .catch(err => {
        res.status(500)
    })
  });

module.exports = server