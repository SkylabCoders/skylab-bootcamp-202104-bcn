const firebase = require("firebase/app");
require("firebase/auth");

const apiKey = process.env.FIREBASE_API_KEY;
const fb = firebase.initializeApp({
  apiKey: apiKey,
});