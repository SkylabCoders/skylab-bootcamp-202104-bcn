import actionTypes from '../actions/actionTypes';

const SingleHeroReducers = (hero = {}, action) => {
  switch (action.types) {
    case actionTypes.LOAD_HERO:
      return hero;
    default:
      return hero;
  }
};

export default SingleHeroReducers;
