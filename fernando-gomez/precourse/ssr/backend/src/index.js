import firebaseConfig from '../firebase/firebase.config';

const express = require('express');
const fetch = require('node-fetch');
const firebase = require('firebase');

firebase.initializeApp(firebaseConfig);
const server = express();
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use('/public', express.static('public'));
server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  res.render('index');
});
server.get('/about', (req, res) => {
  res.render('about');
});
server.get('/form', (req, res) => {
  res.render('form');
});
server.post('/home', (req, res) => {
  const { login, password } = req.body;
  firebase
    .auth()
    .signInWithEmailAndPassword(login, password)
    .then(({ user }) => user.getIdToken().then((idToken) => fetch('http://localhost:4242/sessionLogin', {
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
        login,
      });
    });
});
server.listen(4242, () => {
  console.log('Server is running...');
});
