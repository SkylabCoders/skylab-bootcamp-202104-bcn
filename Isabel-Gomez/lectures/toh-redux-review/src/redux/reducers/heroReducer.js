import HEROES from '../../constants/heroes.mock';
import actionTypes from '../actions/actionTypes';

const HeroReducers = (heroes = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return HEROES;
    case actionTypes.CREATE_HERO:
      return heroes;
    default:
      return heroes;
  }
};

export default HeroReducers;
