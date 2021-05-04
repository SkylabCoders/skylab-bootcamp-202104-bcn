import actionTypes from '../actions/actionTypes';

function reducer(auth = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...auth,
        isLoggedIn: true,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...auth,
        isLoggedIn: false,
      };
    default:
      return auth;
  }
}

export default reducer;
