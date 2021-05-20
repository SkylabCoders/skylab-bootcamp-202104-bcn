import '../../firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import axios from 'axios';
import actionTypes from './actionTypes';

// const db = 'http://localhost:2021/curriculums';
// const db = firebase.firestore();
const db = 'https://firebasestorage.googleapis.com/v0/b/fernando-firebase-demo.appspot.com/o/curriculums.json?alt=media&token=cfaece1d-17ea-44b5-9aa5-80a08ac8fba2';
// const db = 'gs://fernando-firebase-demo.appspot.com/curriculums.json';

export function login() {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
      dispatch({
        type: actionTypes.LOGIN,
        userData: user,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
        error,
      });
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch({
        type: actionTypes.LOGOUT,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
        error,
      });
    }
  };
}

export function loadCurriculum() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(db);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        curriculum: data[0],
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.CURRICULUM_ERROR,
      });
    }
  };
}
