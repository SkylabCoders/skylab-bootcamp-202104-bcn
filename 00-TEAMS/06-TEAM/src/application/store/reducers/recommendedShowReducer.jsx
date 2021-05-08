import actionTypes from '../actions/actionTypes';

function recommendedShowReducer(recomended = [], action) {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case actionTypes.LOAD_SHOWS_RECOMMENDED:
      return action.recomended;
    default:
      return recomended;
  }
}

export default recommendedShowReducer;
