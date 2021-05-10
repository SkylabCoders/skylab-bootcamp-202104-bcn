/* eslint-disable max-len */

// const { response } = require('express');
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end('Hola mundo'); end es la suma de write y end, hago una peticion mantengo el cnal abierto hasta q el servidor responde y cierro la app
// });

// server.listen('2021'); El servidor escuche peticiones en un puerto, espeficiocamos el puerto en que llamaremos al servidor

const express = require('express');
let heroes = require('./heroes.js');

const server = express();
server.use(express.json());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021');

// // USERS
// const users = [{ name: 'Pepe' }, { name: 'Lola' }];
// server.get('/users', (req, res) => {
//   res.json(users);
// });

// server.get('/users/:userName', (req, res) => {
//   const response = users.find((user) => user.name.toLowerCase() === req.params.userName.toLowerCase());
//   if (response) {
//     res.json(response); // req.params nos opermite acceder a los parametros enviados por la url
//   } else {
//     res.send(`There are no users with name: ${req.params.userName}`);
//   }
// });

function addHero(hero){
    return async (dispatch)=>{
const {data}= await axios.post(url, hero);
dispatch{
    type:..,
    hero:data
}
    }
}

function addHero(hero){
    const {data}= await axios.delete(`url/${heroId}`);
    return dispatch{
        type:..,
        hero:data
    }
    }