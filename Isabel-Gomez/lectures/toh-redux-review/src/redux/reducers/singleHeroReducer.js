import actionTypes from '../actions/actionTypes';

const singleHeroReducers = (hero = {}, action) => {
  switch (action.types) {
    case actionTypes.LOAD_HERO:
      return hero;
    default:
      return hero;
  }
};

export default singleHeroReducers;
