const express = require('express');
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
    res.render('index');
})

server.listen(2105, () => {
    console.log('Express Server is running...')
});