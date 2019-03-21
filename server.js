const express = require('express')
const server = express()

const postsRouter = require('./routers/posts-router')
const usersRouter = require('./routers/users-router')

server.use(express.json())

server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)
// CREATE our CRUD




module.exports = server