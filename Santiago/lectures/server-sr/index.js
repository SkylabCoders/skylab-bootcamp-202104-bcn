const express = require('express');
const server = express();

const port = 3103;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
})

server.get('/about', (req, res) => {
    res.render('about');
})

server.listen(`${port}`, () => {
    console.log(`Express Server is running in port ${port}`);
})
