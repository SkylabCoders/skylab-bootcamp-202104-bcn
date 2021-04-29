// import { bindActionCreators } from 'redux';
// import rootReducer from '.';
import HEROES from '../../constants/heroes.mock';
import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return HEROES;
    case actionTypes.DELETE_HEAD:
      return heroes.filter((hero) => hero.id !== action.heroId);
    case actionTypes.ADD_HERO:
      return [
        ...heroes,
        action.hero
      ];
    case actionTypes.UPDATE_HERO:
      return heroes.map((hero) => (hero.id === action.hero.id ? { ...hero, ...action.hero }
        : hero));
    default:
      return heroes;
  }
}
export default heroesReducer;
