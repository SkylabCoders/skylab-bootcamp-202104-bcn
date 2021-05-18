import Types from '../actions/actionTypes';

const initialState = {
  popular: [],
  upcoming: [],
  top_rated: []
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_MOVIES:
      return { ...state, [action.moviesType]: action.movies };
    default:
      break;
  }
  return state;
}

export default moviesReducer;
