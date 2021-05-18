/* eslint-disable no-console */
/* eslint-disable no-multi-spaces */
const http = require('http');

const server = http.createServer((req, res) => {            /* creacion de un servidor */
  console.log(req);
  res.write('Hola Mundo!');         /* da una respuesta por cada peticion que entre */
  res.end();                        /* finaliza la comunicacion con el cliente */
});

server.listen('2021');         /* para que el servidor escuche peticiones, a traves de un puerto especifico dado,en este caso al 2021 */

/* para hacer una peticion desde la web: localhost:2021 directamente en la url */
/*pueden enviarse datos directamnte, pero debe enviarse como json por ej*/

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hola Mundo!');         /* el end, reemplaza al write y al end */
  });

  /* para enviar todo tipo de datos sin mucha especificacion, se usa Express. si quiero enviar ej un objeto, solo con node, no te deja */
  /*Postman se utiliza para hacer y visualizar las peticiones y con q datos hacerla. es mejor herramienta que hacerlo desde consola */

/*cortamos el servidor, instalamos express (npm i express)*/
const express = require ('express');            /* el nombre del modulo esta package.json dentro de node-modules--->express*/

const server = express ();          /*creacion del servidor*/

server.get('/', (req , res) => {          /*si hacen una req a la ruta princial '/'  , respond con esta res. Tambien se podria hacer una funcion afuera y solamente llamarla */
    res.send('Hola skylab')
});

server.listen ('2021')

//

server.get ('/user',(req,res) =>{            //si se pide todo, devuelve el objeto con todos los users
    res.json([{name:'pepe'},{name:'loca'}])
})

server.get ('/user/:userName',(req,res) => {      /*si se pone : declaras el nombre del parametro que se va a pasar, y solo se devuelve el q se pidio*/
    res.json(user.find(user=>user.name === userName))
})

//para saber como es la req, se pueded hacer console.log(req.params)
//ahi devolvera lo que se puso en '/user/:<USERNAME>'

const response = user.find( (user) => user.name.toLowerCase() === req.params.userName.toLowerCase(),);
 if(response) {
     res.json(response);
 } else {
     res.send (`there is no name with name ${req.params.username}`  //se puede hacer un if, para devolver solo si encuentra el valor de la peticion,
                                                                            /*sino un mensaje de no entocntrado*/

/////////*****************/ */

const heroes = require ('./heroes');

server.get ('/heroes',(req,res) =>{            ////la respuesta ahora puede hacerse con res.json(heroes). debe crearse el fichero del cual accede heroes
    res.status (302)        //da la respuesta del estado de la peticion 302=found
    res.json(heroes)
})                  //hay q transformar a su vez el valor del ir a number cuando se hacen comparaciones, sino no devuevlve nada*/

server.post ('/heroes' (req,res)=>{
    const newHero = req.body;
    heroes.push(newHero);           //se agrega el heroe, de la manera que sea
    res.json (heroes);              //luego doy la respuesta con las acciones tomadas
})

///**************** */

//se puede agregar un middleware para antes de que entre a las rutas//
server.use(express.json())

//**************DELETE HEROES ***********/

server.delete('/heroes/:heroId', (req, res) => {
    const { heroId } = req.params;
    const heroById = heroes.filter((hero) => +heroId !== hero.id);
    if (heroById){
        heroes = heroById;
        res.status(202);
        res.json(heroes);

    } else {
        res.status(404);
        res.json(heroes)
    }
  });

  //************PUT**************/ */

  server.put('/heroes/:heroId', (req, res) => {
    const { heroId } = req.params;
    const updateData = req.body;
    heroes = heroes.map((hero) => {
      if (hero.id === +heroId) {
        return {
          ...hero,
          ...updateData,
        };
      }
      return hero;
    });

    res.json(heroes);
  });

  //******************POST*********** */
  server.post('/heroes', (req, res) => {
    const newHero = req.body;
    heroes.push(newHero);
    res.json(heroes);
  });

  //***************GET BY ID**************** */
  server.get('/heroes/:heroId', (req, res) => {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(302);
      res.json(heroById);
    } else {
      res.status(404);
      res.json(heroById);
    }
  });

  //**************GET ALL************ */
  server.get('/heroes', (req, res) => {
    res.json(heroes);
  });

  // *-------------------TEST------------*
  // se pasa res.json como una funcion de jest
