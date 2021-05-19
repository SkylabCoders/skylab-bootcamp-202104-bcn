import '../../firebase';
import firebase from 'firebase';
import axios from 'axios';
import actionTypes from './actionTypes';

const curriculumUrl = 'http://localhost:2021/curriculums';

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
      const { data } = await axios(curriculumUrl);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        curriculum: data[0],
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CURRICULUM_ERROR,
      });
    }
  };
}
