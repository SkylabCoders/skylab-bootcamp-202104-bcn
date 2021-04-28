import actionTypes from '../actions/actionTypes';

const selectedHeroReducer = (hero = {}, action) => {
  let heroesUpdated;

  switch (action.type) {
    case actionTypes.LOAD_HERO:
      heroesUpdated = action.hero;
      break;

    default:
      heroesUpdated = hero;
      break;
  }
  return heroesUpdated;
};

export default selectedHeroReducer;
