import actionTypes from '../actions/actionTypes';

function singleHeroReducer(hero = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return hero;
    default:
      return hero;
  }
}

export default singleHeroReducer;
