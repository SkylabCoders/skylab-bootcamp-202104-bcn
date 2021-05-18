import actionTypes from '../actions/actionTypes';

function authReducer(userData = {}, action) {
  let newUserData = { ...userData };
  switch (action.type) {
    case actionTypes.LOGIN:
      newUserData = {
        ...action.userData,
        isLoggedIn: true,
      };
      break;
    case actionTypes.LOGOUT:
      newUserData = { isLoggedIn: false };
      break;
    default:
      break;
  }

  return newUserData;
}

export default authReducer;
