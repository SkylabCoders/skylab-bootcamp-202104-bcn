import actionTypes from '../../actions/actionTypes';

function sliderTitleMostValuedReducer(title = '', action) {
  switch (action.type) {
    case actionTypes.LOAD_TITLE_MOST_VALUED:
      return action.title;
    default:
      break;
  }
  return title;
}

export default sliderTitleMostValuedReducer;
