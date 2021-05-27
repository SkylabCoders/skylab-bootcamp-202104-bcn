
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://server-auth-41acc.firebaseio.com",
});

const server = express();

//________________

server.engine("html", require("ejs").renderFile);
server.use(express.static("static"));

server.use(bodyParser.json());

server.post("/", (req, res) => {
    const idToken = req.body.idToken.toString();
  
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
  
    admin
      .auth()
      .createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          const options = { maxAge: expiresIn, httpOnly: true };
          res.cookie("session", sessionCookie, options);
          res.render('/about');
        },
        (error) => {
          res.status(401).send("UNAUTHORIZED REQUEST!");
        }
      );
  });

//___________________

server.set('view engine', 'ejs');

server.use(express.urlencoded({extended: false}))

server.use(express.json())

server.get('/',(req, res)=>{
    res.render('index');
});

server.set('view engine', 'ejs');

server.get('/about',(req,res)=>{
    res.render('about');
})

server.get('/form',(req,res)=>{
    res.render('form');
})

server.post('/home',(req,res)=>{
    const {name, surname} = req.body
    res.render('home', {
        name,
        surname,
    });
})

server.listen(4242, ()=>{
    console.log('Express Server is running...')
});
