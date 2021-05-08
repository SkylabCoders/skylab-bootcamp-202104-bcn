import { loadSwapiPeople } from '../../redux/Reducers/swapireducer';
import actionTypes from '../../redux/Actions/actionTypes';

const { LOAD_PEOPLE } = actionTypes;

const scenarios2 = [

  {
    action: {
      type: LOAD_PEOPLE,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  }
];

test.only('Should return a new array', () => {
  const result = loadSwapiPeople(
    scenarios2.state, scenarios2[0].action,
    scenarios2[0].action.payload
  );
  expect(result).toEqual(scenarios2[0].result);
});
