import actionTypes from '../../redux/Actions/actionTypes';
import loadSwapiReducer from '../../redux/Reducers/swapireducer';

const {
  LOAD_SWAPI, LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

const scenarios = [
  {
    state: [],
    action: {
      type: LOAD_SWAPI,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  },
  {
    state: [],
    action: {
      type: LOAD_PEOPLE,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  },
  {
    state: [],
    action: {
      type: LOAD_PLANETS,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  },
  {
    state: [],
    action: {
      type: LOAD_STARSHIPS,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  }

];

scenarios.forEach((scenario) => describe('Given a Swapi reducer function', () => {
  test('Should return a new array', () => {
    const result = loadSwapiReducer(scenario.state, scenario.action);
    expect(result).toEqual(scenario.result);
  });
}));
