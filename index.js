// importing dotenv
require('dotenv').config()

// import database connection
require('./DB-connection/connection')

// import express
const express = require('express')

// import router
const router = require('./Routes/router')

// importing cors
const cors = require('cors')

// creating server using express
const stuServer = express()

// use cors in server
stuServer.use(cors())

// use parse
stuServer.use(express.json())

// use router
stuServer.use(router)

// To get the url for displaying image in the hometable
stuServer.use('/uploads',express.static('./uploads'))

// Customising PORT
const PORT = 4000 || process.env.PORT

// Running the server
stuServer.listen(PORT,() => {
    console.log(`stuServer started at port : ${PORT}`);
})

