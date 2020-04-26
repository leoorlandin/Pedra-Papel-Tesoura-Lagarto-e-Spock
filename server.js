const express = require('express')
const routes = require('./routes')

const server = express()

server.use(express.static('views'))
server.use('/public', express.static('public'))
server.use(routes)


server.set("view engine", "html")

server.con


server.listen(5000, function () {

  console.log('server is running')
})