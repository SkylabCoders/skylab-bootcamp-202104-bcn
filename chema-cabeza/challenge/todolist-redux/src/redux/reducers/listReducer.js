import LIST from '../../constants/list.mock';
import actionTypes from '../actions/actionTypes';

function listReducer(list = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      return LIST;

      // case actionTypes.DELETE_HERO:
      //   return heroes.filter((hero) => hero.id !== action.heroId);

      // case actionTypes.ADD_HERO:
      //   return [
      //     ...heroes,
      //     action.hero,
      //   ];

      // case actionTypes.UPDATE_HERO:
      //   return heroes.map(
      //     (hero) => (hero.id === action.hero.id
      //       ? { ...hero, ...action.hero }
      //       : hero),
      //   );

    default:
      return list;
  }
}

export default listReducer;
