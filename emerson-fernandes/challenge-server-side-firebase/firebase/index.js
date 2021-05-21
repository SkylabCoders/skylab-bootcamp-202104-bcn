const firebase = require('firebase/app');
import 'firebase/auth';
const firebaseConfig = require('./firebase.config');

firebase.initializeApp(firebaseConfig);
firebase.auth();