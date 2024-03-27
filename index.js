// const http = require('http')
const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send('Home Page')
})

app.get('/about-us',(req,res) => {
    res.send('about us page '+req.query.name)
})

app.listen(8000,() => {
    console.log('Server listening at 8000')
})

// const myServer = http.createServer(app)
// myServer.listen(8000,() => {console.log('Server Start')})