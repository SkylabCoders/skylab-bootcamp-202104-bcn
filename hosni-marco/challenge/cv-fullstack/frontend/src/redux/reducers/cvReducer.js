import actionTypes from '../actions/actionTypes';

function cvReducer(cv = {}, action) {
  let updatedCv = { ...cv };
  if (action.type === actionTypes.LOAD_CV) {
    updatedCv = { ...action.cv };
  }
  return updatedCv;
}

export default cvReducer;
