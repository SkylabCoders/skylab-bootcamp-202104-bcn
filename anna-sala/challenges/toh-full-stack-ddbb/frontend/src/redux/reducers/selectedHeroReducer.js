import actionTypes from '../actions/actionTypes';

function heroReducer(hero = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return action.hero;
    default:
      return hero;
  }
}

export default heroReducer;
