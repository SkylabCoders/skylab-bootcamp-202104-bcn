import actionTypes from '../Actions/actionTypes';

const { LOAD_SWAPI } = actionTypes;

export default function loadSwapiReducer(state = [], { type, data }) {
  let result;

  switch (type) {
    case LOAD_SWAPI:
      result = [...state, data];
      break;
    default:
      result = state;
  }
  return result;
}
