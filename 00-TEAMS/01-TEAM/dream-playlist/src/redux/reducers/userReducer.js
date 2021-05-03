import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, { type, newUser }) {
  switch (type) {
    case (actionTypes.GET_USER):
      return newUser;
    default:
      return user;
  }
}

export default userReducer;
