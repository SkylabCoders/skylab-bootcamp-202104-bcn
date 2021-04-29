import HEROES from '../../constants/heroes.mock';
import actionTypes from '../actions/actionTypes';

const HeroReducers = (heroes = [], action) => {
  switch (action.types) {
    case actionTypes.LOAD_HEROES:
      return HEROES;
    default:
      return heroes;
  }
};

export default HeroReducers;
