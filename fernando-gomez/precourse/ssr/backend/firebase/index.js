import firebase from 'firebase/';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
firebase.auth();

export default async function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  //   const { user } = await firebase.auth().signInWithPopup(provider);
}
