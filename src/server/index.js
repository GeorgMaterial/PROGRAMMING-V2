var path = require('path')
const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

console.log(__dirname)

const api = process.env.API_KEY


const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

// // SERVER CONFIG
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

// DATA ENDPOINT
const proj_data = {}

// API REQUESTS 

app.post('/', (req, res)=>{
    result.data = req.body
    res.send(result)
})



