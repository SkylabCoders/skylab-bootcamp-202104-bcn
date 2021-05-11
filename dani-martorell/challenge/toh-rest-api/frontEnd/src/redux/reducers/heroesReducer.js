// import HEROES from '../../constants/heroes.mock';
import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return action.heroes;

    case actionTypes.DELETE_HERO:
      return action.heroes;

    case actionTypes.ADD_HERO:
      return action.hero;

    case actionTypes.UPDATE_HERO:
      return actionTypes.heroes;
  
    default:
      return heroes;
  }
}

export default heroesReducer;
