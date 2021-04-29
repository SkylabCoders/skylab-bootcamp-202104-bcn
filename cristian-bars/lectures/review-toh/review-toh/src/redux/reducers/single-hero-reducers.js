import actionTypes from '../actions/action-Types';

function singleHeroReducer(hero = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return hero;
    default:
      return hero;
  }
}

export default singleHeroReducer;
