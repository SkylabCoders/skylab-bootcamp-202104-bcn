import actionTypes from '../../redux/Actions/actionTypes';
import localDataReducer from '../../redux/Reducers/localDataReducer';

const {
  LOAD_LOCAL_CHARACTERS, LOAD_LOCAL_PLANETS, LOAD_LOCAL_STARSHIPS
} = actionTypes;
const scenarios = [
  {
    state: [],
    action: {
      type: LOAD_LOCAL_CHARACTERS

    },
    result: [[{ name: 'a', url: 'b' }]]
  },
  {
    state: [],
    action: {
      type: LOAD_LOCAL_PLANETS

    },
    result: [[{ name: 'a', url: 'b' }]]
  },
  {
    state: [],
    action: {
      type: LOAD_LOCAL_STARSHIPS

    },
    result: [[{ name: 'a', url: 'b' }]]
  }
];
scenarios.forEach((scenario) => describe('Given a local data reducer function', () => {
  test('Should return a new array', () => {
    const result = localDataReducer(scenario.state, scenario.action);
    expect(result).toEqual(scenario.result);
  });
}));
