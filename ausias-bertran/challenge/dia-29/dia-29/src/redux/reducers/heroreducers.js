import HEROES from '../../constants/heroes.mocks';
import actionTypes from '../action/actionsTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return HEROES;
    case actionTypes.LOAD_HERO:
    default:
      return heroes;
  }
}

export default heroesReducer;
