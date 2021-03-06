const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.use(express.urlencoded({
    extended:false
}))

server.use(express.json())

server.use(express.static('styles'))

server.get('/',(req,res) =>{
    res.render('index')
})

server.post('/home',(req,res) =>{
    const {name,surname} = req.body
    res.render('home',{
        name,
        surname
    })
})

server.listen('12345',()=>{
    console.log('Express server is running')
})