import '../../firebase';
import firebase from 'firebase';
import actionTypes from './actionTypes';

export default function login() {
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
      });
    }
  };
}

// export logout() {

// }
