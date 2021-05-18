import actionTypes from '../actions/actionTypes';

function authReducer(auth = {}, action) {
  let updatedAuth = { ...auth };

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      updatedAuth = { ...auth, isLoggedIn: true, user: action.user };
      break;
    case actionTypes.AUTH_LOGOUT:
      updatedAuth = { ...auth, isLoggedIn: false, user: null };
      break;
    default:
      break;
  }
  return updatedAuth;
}

export default authReducer;
