// code away!
const express = require('express')
const server = express()
const URL = 4000

server.listen(URL, () => {
    console.log(`** Server listening on ${URL} **`)
})