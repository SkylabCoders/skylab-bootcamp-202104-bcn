import actionTypes from '../actions/actionTypes';

function dataReducer(data = [], action) {
  if (action.type === actionTypes.LOAD_DATA) {
    return action.data;
  }
  return data;
}

export default dataReducer;
