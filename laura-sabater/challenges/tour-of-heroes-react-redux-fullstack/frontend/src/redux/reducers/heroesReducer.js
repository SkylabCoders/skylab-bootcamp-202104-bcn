/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  let updatedHeroes = [];
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      updatedHeroes = action.heroes;
      break;
    case actionTypes.ADD_HERO:
      updatedHeroes = [
        ...heroes,
        action.hero,
      ];
      break;
    case actionTypes.DELETE_HERO:
      updatedHeroes = heroes.filter((hero) => hero._id !== action.heroId);
      break;
    case actionTypes.UPDATE_HERO:
      updatedHeroes = heroes.map(
        (hero) => (hero._id === action.hero.id
          ? { ...hero, ...action.hero }
          : hero),
      );
      break;
    default:
      return updatedHeroes;
  }
  return updatedHeroes;
}

export default heroesReducer;
