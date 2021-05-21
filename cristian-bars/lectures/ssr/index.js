const express = require('express');
const fetch = require('node-fetch');
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: 'AIzaSyBHpjvBgsH-kfI8wi6Hva-ZLN7zooGLO3w',
    authDomain: 'cristian-firebase-demo.firebaseapp.com',
    projectId: 'cristian-firebase-demo',
    storageBucket: 'cristian-firebase-demo.appspot.com',
    messagingSenderId: '647379087407',
    appId: '1:647379087407:web:32c225f579f794ce5356da',
  };

firebase.initializeApp(firebaseConfig);
    const server = express();
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    server.use(express.static("styles"))
    server.set('view engine', 'ejs');
    server.get('/', (req, res) => {
    res.render('index');
});

server.get('/', (req,res)=> {
    res.render('index');
})

server.get('/about', (req,res)=> {
    res.render('about');
})

server.get('/form', (req,res)=> {
    res.render('form');
})

server.get('/login', (req,res)=> {
    res.render('login');
})


/*server.post('/home', (req,res)=> {
    const {name, surename} = req.body;
    res.render('home', {
        name,
        surename
    });
})*/

server.post('/home', (req, res) => {
    const { email, passmail } = req.body;
    console.log(email);
    console.log(passmail);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passmail)
      .then(({ user }) => user.getIdToken().then((idToken) => fetch('http://localhost:4242/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      })))
      .then(() => firebase.auth().signOut())
      .then(() => {
        res.render('home', {
            email,
        });
      });
  });

server.listen("4242", () => {
    console.log('Express Server is running...')
})