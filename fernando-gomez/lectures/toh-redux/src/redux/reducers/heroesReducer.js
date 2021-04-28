import HEROES from '../../Constants/heroes.mock';
import actionTypes from '../actions/actionTypes';

const heroesReducer = (heroes = {}, action) => {
  let heroesUpdated;

  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      heroesUpdated = HEROES;
      break;
    case actionTypes.DELETE_HERO:
      heroesUpdated = heroes.filter((hero) => hero.id !== action.heroId);
      break;
    case actionTypes.ADD_HERO:
      heroesUpdated = [
        ...heroes,
        action.hero,
      ];
      break;
    case actionTypes.EDIT_HERO:
      heroesUpdated = heroes.map((hero) => (hero.id === action.hero.id
        ? { ...hero, ...action.hero }
        : hero));
      break;

    default:
      heroesUpdated = heroes;
      break;
  }
  return heroesUpdated;
};

export default heroesReducer;
