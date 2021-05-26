const express = require('express');
const server = express();

server.use(express.urlencoded({extended: false}));
server.use(express.json());
//esto parsea el body RTFM

server.use('/styles', express.static('styles')); //usar css

server.set('view engine', 'ejs'); // que use el motor de ejs 
// esto irá a buscar la carpeta views para hacer el renderizado

server.get('/', (req, res) =>{ 
    res.render('index'); // lo primero que hace es el render del index 
});

server.get('/about', (req, res) =>{ 
    res.render('about'); 
});
server.get('/form', (req, res) =>{ 
    res.render('form'); 
});

server.post('/home', (req, res) =>{ // usamos post pq el form hace un post alli 
    const {name, surname} = req.body // le decimos que en el body vamos a recibir name y surname
    res.render('home', { // renderizara el home añadiendo los datos que le hemos pasado 
        name,
        surname,
    }); 
});

server.listen(4242, () => {
    console.log('Express Server is running...')
})