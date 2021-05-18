import actionTypes from '../actions/actionTypes';

function authReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        user: action.userData,
        isLoggedIn: true
      };
    case actionTypes.LOGOUT:
      return {
        isLoggedOut: false
      };
    default:
      return user;
  }
}

export default authReducer;
