// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'firebase/auth';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
firebase.auth();
