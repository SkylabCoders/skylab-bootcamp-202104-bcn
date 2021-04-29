import HEROES from '../../constants/heroes-mock';
import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return HEROES;
    default:
      return heroes;
  }
}

export default heroesReducer;
