/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function jobsReducer(job = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_INFO_JOBS:
      debugger;
      return action.info;
    default:
      return job;
  }
}

export default jobsReducer;
