import actionTypes from '../actions/actionTypes';
import HEROES from '../../constants/heroes.mock';

function heroesReducer(heroes = [], action) {
  let updatedHeroes = [...heroes];

  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      updatedHeroes = HEROES;
      break;
    case actionTypes.DELETE_HERO:
      updatedHeroes = heroes.filter((hero) => hero.id !== action.heroId);
      break;
    case actionTypes.ADD_HERO:
      updatedHeroes = [...heroes, action.hero];
      break;
    case actionTypes.UPDATE_HERO:
      updatedHeroes = heroes.map((hero) => (
        hero.id === action.hero.id
          ? { ...hero, ...action.hero }
          : hero
      ));
      break;
    default:
      updatedHeroes = heroes;
      break;
  }
  return updatedHeroes;
}

export default heroesReducer;
