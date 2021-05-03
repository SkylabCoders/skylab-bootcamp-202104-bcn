import actionTypes from '../Actions/actionTypes';

const {
  LOAD_SWAPI, LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

export default function loadSwapiReducer(state = [], { type, payload }) {
  let result;

  switch (type) {
    case LOAD_SWAPI:
      result = [...state, payload];
      break;

    case LOAD_PEOPLE:
      result = [...state, payload];
      break;

    case LOAD_PLANETS:
      result = [...state, payload];
      break;

    case LOAD_STARSHIPS:
      result = [...state, payload];
      break;

    default:
      result = state;
  }
  return result;
}
