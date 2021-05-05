import actionTypes from '../../actions/actionTypes';

function sliderTitleMostViewedReducer(title = '', action) {
  switch (action.type) {
    case actionTypes.LOAD_TITLE_MOST_VIEWED:
      return action.title;
    default:
      break;
  }
  return title;
}

export default sliderTitleMostViewedReducer;
