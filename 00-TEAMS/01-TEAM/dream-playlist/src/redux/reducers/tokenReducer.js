import actionTypes from '../actions/actionTypes';

function tokenReducer(token = '', { type, newToken }) {
  switch (type) {
    case (actionTypes.GET_TOKEN):
      return newToken;
    default:
      return token;
  }
}

export default tokenReducer;
