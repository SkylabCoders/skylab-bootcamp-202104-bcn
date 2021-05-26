import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
firebase.auth();
