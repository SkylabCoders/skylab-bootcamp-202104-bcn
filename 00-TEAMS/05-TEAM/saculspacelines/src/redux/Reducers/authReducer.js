import actionTypes from '../Actions/actionTypes';

const {
  AUTH_LOGIN,
  AUTH_LOGOUT

} = actionTypes;

const authReducer = (auth = {}, { type }) => {
  let result;

  switch (type) {
    case AUTH_LOGIN:
      result = {
        ...auth,
        isLoggedIn: true
      };
      break;

    case AUTH_LOGOUT:
      result = {
        ...auth,
        isLoggedIn: false
      };
      break;

    default:
      result = auth;
      break;
  }

  return result;
};

export default authReducer;
