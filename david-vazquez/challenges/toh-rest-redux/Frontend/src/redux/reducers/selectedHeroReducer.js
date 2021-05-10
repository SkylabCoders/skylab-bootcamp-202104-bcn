import actionTypes from '../actions/actionTypes';

function selectedHeroReducer(heroes = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return action.hero;

    default:
      return heroes;
  }
}

export default selectedHeroReducer;
