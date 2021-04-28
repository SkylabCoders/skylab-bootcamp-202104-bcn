import actionTypes from '../actions/actionTypes';

function heroesReducer(hero = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROE:
      return action.hero;

    default:
      return hero;
  }
}

export default heroesReducer;
