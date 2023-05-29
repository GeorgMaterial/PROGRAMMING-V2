const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

// // SERVER CONFIG
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

app.post('/', (req, res)=>{
    result.data = req.body
    res.send(result)
})