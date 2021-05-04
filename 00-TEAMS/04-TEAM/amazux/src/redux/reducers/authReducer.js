import actionTypes from '../actions/actionTypes';

function authReducer(auth = {}, action) {
  let updatedAuth = { ...auth };

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      updatedAuth = { ...auth, isLoggedIn: true };
      break;
    case actionTypes.AUTH_LOGOUT:
      updatedAuth = { ...auth, isLoggedIn: false };
      break;
    default:
      break;
  }
  return updatedAuth;
}

export default authReducer;
