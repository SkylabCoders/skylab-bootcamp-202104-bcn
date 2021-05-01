import actionTypes from '../actions/actionTypes';

function loadListReducer(list = [], action) {
  const updatelist = [...list];

  switch (action.type) {
    case actionTypes.LOAD_LIST:
      updatelist = [...action.name];
      break;

    default:

      break;
  }
  return updatelist;
}

export default loadListReducer;
