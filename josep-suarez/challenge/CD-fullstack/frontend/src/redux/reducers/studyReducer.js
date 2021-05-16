/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function studyReducer(study = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_INFO_STUDY:
      return action.info;
    default:
      return study;
  }
}

export default studyReducer;
