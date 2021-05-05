import actionTypes from '../../redux/Actions/actionTypes';
import localDataReducer from '../../redux/Reducers/localDataReducer';
import CHARACTERS from '../../redux/Constants/Characters';
import PLANETS from '../../redux/Constants/Planets';
import STARSHIPS from '../../redux/Constants/Starships';

const {
  LOAD_LOCAL_CHARACTERS, LOAD_LOCAL_PLANETS, LOAD_LOCAL_STARSHIPS
} = actionTypes;
const scenarios = [
  {
    state: [],
    action: {
      type: LOAD_LOCAL_CHARACTERS

    },
    result: [...CHARACTERS]
  },
  {
    state: [],
    action: {
      type: LOAD_LOCAL_PLANETS

    },
    result: [...PLANETS]
  },
  {
    state: [],
    action: {
      type: LOAD_LOCAL_STARSHIPS

    },
    result: [...STARSHIPS]
  }
];
scenarios.forEach((scenario) => describe('Given a local data reducer function', () => {
  test('Should return a new array', () => {
    const result = localDataReducer(scenario.state, scenario.action);
    expect(result).toEqual(scenario.result);
  });
}));
