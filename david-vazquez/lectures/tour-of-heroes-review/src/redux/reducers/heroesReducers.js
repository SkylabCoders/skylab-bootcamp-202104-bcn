import actionTypes from '../actions/actionTypes';

function heroesReducers(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return [...heroes, action.heroes];
    case actionTypes.CREATE_HERO:
      return heroes;
    default:
      return heroes;
  }
}

export default heroesReducers;
