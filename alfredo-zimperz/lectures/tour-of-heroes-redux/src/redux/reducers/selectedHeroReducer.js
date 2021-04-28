import actionTypes from '../actions/actionTypes';

function selectedHeroReducer(hero = {}, action) {
  let selectedHero = { ...hero };

  switch (action.type) {
    case actionTypes.LOAD_HERO:
      selectedHero = action.hero;
      break;
    default:
      selectedHero = hero;
      break;
  }
  return selectedHero;
}

export default selectedHeroReducer;
