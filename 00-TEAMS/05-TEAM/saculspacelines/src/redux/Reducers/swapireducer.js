import actionTypes from '../Actions/actionTypes';
import CHARACTERS from '../Constants/Characters';
import PLANETS from '../Constants/Planets';
import STARSHIPS from '../Constants/Starships';

const {
  LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

const combineObjectsArrays = (apiArray, localArray) => apiArray.map((item) => {
  const local = localArray
    .find((localItem) => localItem.name.toLowerCase() === item.name.toLowerCase());
  return {
    ...item,
    ...local
  };
});

export function loadSwapiPeople(state = [], { type, payload }) {
  let result;
  let newPayload;

  if (type === LOAD_PEOPLE) {
    newPayload = combineObjectsArrays(payload, CHARACTERS);
    result = [...state, newPayload];
  } else {
    result = state;
  }
  return result;
}

export function loadSwapiPlanets(state = [], { type, payload }) {
  let result;
  let newPayload;

  if (type === LOAD_PLANETS) {
    newPayload = combineObjectsArrays(payload, PLANETS);
    result = [...state, newPayload];
  } else {
    result = state;
  }
  return result;
}

export function loadSwapiStarships(state = [], { type, payload }) {
  let result;
  let newPayload;

  if (type === LOAD_STARSHIPS) {
    newPayload = combineObjectsArrays(payload, STARSHIPS);
    result = [...state, newPayload];
  } else {
    result = state;
  }
  return result;
}
