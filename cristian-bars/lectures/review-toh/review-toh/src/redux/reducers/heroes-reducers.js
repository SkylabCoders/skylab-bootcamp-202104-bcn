import HEROES from '../../constants/heroes.mock';
import actionTypes from '../actions/action-Types';

function heroesReducers(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return HEROES;
    default:
      return heroes;
  }
}

export default heroesReducers;
