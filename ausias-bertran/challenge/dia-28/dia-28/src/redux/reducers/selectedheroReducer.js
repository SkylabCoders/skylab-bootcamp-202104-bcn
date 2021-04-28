import actionTypes from '../action/actionTypes';

function heroesReducer(heroes = {}, action) {
  switch (action.type) {
    case 'LOAD_HEROES':
      return action.hero;

    case 'UPDATE_HERO':
      return heroes.map((hero) => (hero.id === action.hero.id ? { ...hero, ...action.hero }
        : hero));

    default:
      return heroes;
  }
}

export default heroesReducer;
