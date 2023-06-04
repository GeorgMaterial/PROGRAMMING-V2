// DEPENDENCIES
var path = require('path')
const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()


// API ENDPOINT
const api = process.env.API_KEY
const api_endpoint = {'api': api}

// APP SETUP
const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

// SERVER CONFIG
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

// DATA ENDPOINT
const proj_data = {}

// API REQUESTS 
app.get('/key', (req, res)=>{
    res.send(api_endpoint)
})



