import actionTypes from '../actions/actionTypes';

const selectedHeroReducer = (heroe = {}, action) => {
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return action.hero;
    default:
      return heroe;
  }
};

export default selectedHeroReducer;
