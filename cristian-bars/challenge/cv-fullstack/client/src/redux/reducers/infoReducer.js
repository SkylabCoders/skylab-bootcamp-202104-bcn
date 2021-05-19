/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function infoReducer(info = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_INFO:
      return action.info;
    default:
      return info;
  }
}

export default infoReducer;
