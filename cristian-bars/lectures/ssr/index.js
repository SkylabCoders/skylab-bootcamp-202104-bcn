const express = require('express');
const server = express();

server.set('view engine', 'ejs');

server.use(express.urlencoded({
    extended: false
}));

server.use(express.json());

server.get('/', (req,res)=> {
    res.render('index');
})

server.get('/about', (req,res)=> {
    res.render('about');
})

server.get('/form', (req,res)=> {
    res.render('form');
})


server.post('/home', (req,res)=> {
    const {name, surename} = req.body;
    res.render('home', {
        name,
        surename
    });
})

server.listen("4242", () => {
    console.log('Express Server is running...')
})