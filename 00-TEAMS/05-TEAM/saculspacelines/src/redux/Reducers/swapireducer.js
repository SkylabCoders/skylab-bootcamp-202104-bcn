import actionTypes from '../Actions/actionTypes';
import CHARACTERS from '../Constants/Characters';
import PLANETS from '../Constants/Planets';
import STARSHIPS from '../Constants/Starships';

const {
  LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

const combineObjectsArrays = (apiArray, localArray) => {
  const newArray = apiArray.map((item) => {
    const local = localArray
      .find((localItem) => localItem.name.toLowerCase() === item.name.toLowerCase());
    return {
      ...item,
      ...local
    };
  });

  return newArray;
};

export function loadSwapiPeople(state = [], { type, payload }) {
  let result;
  let newPayload;

  switch (type) {
    case LOAD_PEOPLE:
      newPayload = combineObjectsArrays(payload, CHARACTERS);
      result = [...state, newPayload];
      break;

    default:
      result = state;
  }
  return result;
}

// eslint-disable-next-line no-console
console.log(loadSwapiPeople);

export function loadSwapiPlanets(state = [], { type, payload }) {
  let result;
  let newPayload;

  switch (type) {
    case LOAD_PLANETS:
      newPayload = combineObjectsArrays(payload, PLANETS);
      result = [...state, newPayload];
      break;

    default:
      result = state;
  }
  return result;
}

export function loadSwapiStarships(state = [], { type, payload }) {
  let result;
  let newPayload;

  switch (type) {
    case LOAD_STARSHIPS:
      newPayload = combineObjectsArrays(payload, STARSHIPS);
      result = [...state, newPayload];
      break;

    default:
      result = state;
  }
  return result;
}
