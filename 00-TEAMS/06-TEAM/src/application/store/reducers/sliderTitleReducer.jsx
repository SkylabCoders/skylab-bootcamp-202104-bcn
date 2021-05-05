import actionTypes from '../actions/actionTypes';

function sliderTitleReducer(title = '', action) {
  switch (action.type) {
    case actionTypes.LOAD_TITLE:
      return action.title;
    default:
      break;
  }
  return title;
}

export default sliderTitleReducer;
