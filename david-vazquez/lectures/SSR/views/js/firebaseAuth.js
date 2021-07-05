import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
firebase.auth();

export function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return { user } = await firebase.auth().signInWithPopup(provider);
  }

export function logout() {
  return firebase.auth().signOut();
}