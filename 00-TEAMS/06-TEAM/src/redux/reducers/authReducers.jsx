import Types from '../actions/actionTypes';

const authReducers = (state = {}, action) => {
  switch (action.type) {
    case Types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      };
    case Types.logout:
      return {};
    default:
      return state;
  }
};
export default authReducers;
