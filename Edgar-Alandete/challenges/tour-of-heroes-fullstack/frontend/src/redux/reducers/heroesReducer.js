import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
    case actionTypes.DELETE_HERO:
    case actionTypes.ADD_HERO:
      return action.heroes;

    case actionTypes.UPDATE_HERO:
      return heroes.map(
        (hero) => (hero.id === action.hero.id
          ? { ...hero, ...action.hero }
          : hero),
      );

    default:
      return heroes;
  }
}

export default heroesReducer;
