import actionTypes from '../Actions/actionTypes';
import CHARACTERS from '../Constants/Characters';
import PLANETS from '../Constants/Planets';
import STARSHIPS from '../Constants/Starships';

const {
  LOAD_SWAPI, LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

export default function loadSwapiReducer(state = [], { type, payload }) {
  let result;
  let newPayload;

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

  switch (type) {
    case LOAD_SWAPI:
      result = [...state, payload];
      break;

    case LOAD_PEOPLE:
      newPayload = combineObjectsArrays(payload, CHARACTERS);
      result = [...state, newPayload];
      break;

    case LOAD_PLANETS:
      newPayload = combineObjectsArrays(payload, PLANETS);
      result = [...state, newPayload];
      break;

    case LOAD_STARSHIPS:
      newPayload = combineObjectsArrays(payload, STARSHIPS);
      result = [...state, newPayload];
      break;

    default:
      result = state;
  }
  return result;
}
