import actionTypes from '../actions/actionTypes';
import USER from '../../data/user.mock';

function userReducer(user = {}, action) {
  let updatedUser = { ...user };

  switch (action.type) {
    case actionTypes.LOAD_USER:
      updatedUser = USER;
      break;
    default:
      break;
  }
  return updatedUser;
}

export default userReducer;
