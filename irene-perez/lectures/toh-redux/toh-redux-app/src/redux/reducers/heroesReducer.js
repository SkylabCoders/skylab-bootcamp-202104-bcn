import HEROES from '../../constans/heroes';
import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return HEROES;

    case actionTypes.DELETE_HERO:
      return heroes.filter((hero) => hero.id !== action.heroId);

    case actionTypes.ADD_HERO:
      return [
        ...heroes,
        action.hero];

    case actionTypes.UPDATE_HERO:
      return heroes.map(
        (hero) => (hero.id === action.hero.id
          ? { ...hero, ...action.hero }
          : hero)
      );

    default:
      return heroes;
  }
}

export default heroesReducer;
