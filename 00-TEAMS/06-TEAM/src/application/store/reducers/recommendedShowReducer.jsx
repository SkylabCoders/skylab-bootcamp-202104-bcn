import actionTypes from '../actions/actionTypes';

function recommendedShowReducer(recomended = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOWS_RECOMMENDED:
      return action.recomenShow;
    default:
      return recomended;
  }
}

export default recommendedShowReducer;
