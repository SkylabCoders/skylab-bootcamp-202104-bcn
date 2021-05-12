/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return action.heroes;

    case actionTypes.DELETE_HERO:
      return heroes.filter((hero) => hero._id !== action.heroId);

    case actionTypes.ADD_HERO:
      return [
        ...heroes,
        action.hero,
      ];

    case actionTypes.UPDATE_HERO:
      return heroes.map(
        (hero) => (hero._id === action.hero._id
          ? { ...hero, ...action.hero }
          : hero),
      );

    default:
      return heroes;
  }
}

export default heroesReducer;
