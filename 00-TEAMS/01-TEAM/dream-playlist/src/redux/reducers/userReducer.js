import actionTypes from '../actions/actionTypes';

function userReducer(user = null, { type, newUser }) {
  switch (type) {
    case (actionTypes.GET_USER):
      return newUser;
    default:
      return user;
  }
}

export default userReducer;
