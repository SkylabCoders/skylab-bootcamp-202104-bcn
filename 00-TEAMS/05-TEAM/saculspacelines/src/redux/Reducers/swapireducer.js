import actionTypes from '../Actions/actionTypes';
import CHARACTERS from '../Constants/Characters';

const {
  LOAD_SWAPI, LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

export default function loadSwapiReducer(state = [], { type, payload }) {
  let result;
  let newPayload;

  const combineObjectsArrays = (APIarray, localArray) => {
    const localData = APIarray.map(
      (APIarrayElement) => ({
        ...APIarrayElement,
        ...localArray
          .filter((localArrayElement) => APIarrayElement.name === localArrayElement.name)
      })
    );

    console.log(localData);

    return localData;
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
