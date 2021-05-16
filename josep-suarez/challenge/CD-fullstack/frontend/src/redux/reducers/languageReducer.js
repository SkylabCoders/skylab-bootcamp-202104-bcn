import actionTypes from '../actions/actionTypes';

function languageReducer(study = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_INFO_LANGUAGE:
      return action.info;
    default:
      return study;
  }
}

export default languageReducer;
