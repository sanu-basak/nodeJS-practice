const express = require('express')
const app = express()
const userData = require('./MOCK_DATA.json')
const bodyParser = require('body-parser')
// app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/users',(req,res) => {
    return res.json({status:200,message:"User data", data:userData})
})

app.get('/api/users/:id',(req,res) => {
    const user = userData.find((user) => user.id === Number(req.params.id))
    return res.json(user)
})

app.post('/api/users',(req,res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(8000,() => {
    console.log(`Server listening at 8000`)
})