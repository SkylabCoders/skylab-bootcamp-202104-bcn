import actionTypes from '../actions/actionTypes';

function sliderTitleReducer(title = {}, action) {
  // let titleName = [...state];
  // eslint-disable-next-line no-debugger
  debugger;

  switch (action.type) {
    case actionTypes.LOAD_TITLE:
      return action.title;

    default:
      break;
  }
  return title;
}

export default sliderTitleReducer;
