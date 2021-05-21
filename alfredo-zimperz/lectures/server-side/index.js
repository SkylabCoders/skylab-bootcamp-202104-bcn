const express = require('express');
const server = express();

server.set('view engine', 'ejs')

server.use(express.urlencoded({extended:false}))
server.use(express.json())

server.use('/views', express.static('views'));

server.get('/', (req, res)=> res.render('index'))
server.get('/about', (req, res)=> res.render('about'))
server.get('/form', (req, res)=> res.render('form'))

server.post('/home', (req, res)=>  {
    const {name, lastName} = req.body
    res.render('home',{
        name,
        lastName
    })
})


server.listen('2021', () => console.log(`Server is running in localhost:2021`));
