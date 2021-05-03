import actionTypes from '../Actions/actionTypes';
import CHARACTERS from '../Constants/Characters';
import PLANETS from '../Constants/Planets';
import STARSHIPS from '../Constants/Starships';

const {
  LOAD_LOCAL_CHARACTERS, LOAD_LOCAL_PLANETS, LOAD_LOCAL_STARSHIPS
} = actionTypes;

export default function localDataReducer(state = [], { type }) {
  let result;

  switch (type) {
    case LOAD_LOCAL_CHARACTERS:
      result = CHARACTERS;
      break;

    case LOAD_LOCAL_PLANETS:
      result = PLANETS;
      break;

    case LOAD_LOCAL_STARSHIPS:
      result = STARSHIPS;
      break;

    default:
      result = state;
  }
  return result;
}
