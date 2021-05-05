import actionTypes from '../../actions/actionTypes';

function sliderTitleLastRelases(title = '', action) {
  switch (action.type) {
    case actionTypes.LOAD_TITLE_LAST_RELEASES:
      return action.title;
    default:
      break;
  }
  return title;
}

export default sliderTitleLastRelases;
