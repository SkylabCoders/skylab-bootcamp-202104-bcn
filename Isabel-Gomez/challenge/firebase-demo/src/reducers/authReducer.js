import actionTypes from '../actions/actionTypes';

const authReducer = (user = {}, action) => {
  let newUserData = user;
  switch (action.type) {
    case actionTypes.LOGIN:
      newUserData = {
        ...action.userData,
        isLoggedIn: true,
      };
      break;
    case actionTypes.LOGOUT:
      newUserData = {
        isLoggedIn: false,
      };
      break;

    default:
      break;
  }
  return newUserData;
};

export default authReducer;
