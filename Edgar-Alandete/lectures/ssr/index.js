const express = require('express');
const fetch = require('node-fetch');
// const admin = require('firebase-admin');
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyBxvSrUqitWvdKorChNWMoSR9u0myW2k18',
  authDomain: 'edgar-firebase-ssr-login.firebaseapp.com',
  projectId: 'edgar-firebase-ssr-login',
  storageBucket: 'edgar-firebase-ssr-login.appspot.com',
  messagingSenderId: '377849075824',
  appId: '1:377849075824:web:b90f6859c19154c632bcb5',
};
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
