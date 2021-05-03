import actionTypes from '../Actions/actionTypes';

const { LOAD_SWAPI } = actionTypes;

export default function loadSwapiReducer(state = [], { type, people }) {
  let result;

  switch (type) {
    case LOAD_SWAPI:
      result = [...state, people];
      break;
    default:
      result = state;
  }
  return result;
}
