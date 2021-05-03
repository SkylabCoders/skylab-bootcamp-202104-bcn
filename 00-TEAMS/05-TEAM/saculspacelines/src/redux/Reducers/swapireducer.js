import actionTypes from '../Actions/actionTypes';

const { LOAD_SWAPI } = actionTypes;

export default function loadSwapiReducer(people = [], { type, data }) {
  let result;

  // eslint-disable-next-line no-debugger
  debugger;

  switch (type) {
    case LOAD_SWAPI:
      result = [...people, data];
      break;
    default:
      result = people;
  }
  return result;
}
