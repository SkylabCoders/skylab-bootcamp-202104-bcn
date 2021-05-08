import { loadSwapiPeople, loadSwapiPlanets, loadSwapiStarships } from '../../redux/Reducers/swapireducer';
import actionTypes from '../../redux/Actions/actionTypes';

const { LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS } = actionTypes;

const scenarioPeople = [

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
    scenarioPeople.state, scenarioPeople[0].action,
    scenarioPeople[0].action.payload
  );
  expect(result).toEqual(scenarioPeople[0].result);
});

const scenariosPlanets = [

  {
    action: {
      type: LOAD_PLANETS,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  }
];

test.only('Should return a new array', () => {
  const result = loadSwapiPlanets(
    scenariosPlanets.state, scenariosPlanets[0].action,
    scenariosPlanets[0].action.payload
  );
  expect(result).toEqual(scenariosPlanets[0].result);
});

const scenarioStarship = [

  {
    action: {
      type: LOAD_STARSHIPS,
      payload: [{ name: 'a', url: 'b' }]
    },
    result: [[{ name: 'a', url: 'b' }]]
  }
];

test.only('Should return a new array', () => {
  const result = loadSwapiStarships(
    scenarioStarship.state, scenarioStarship[0].action,
    scenarioStarship[0].action.payload
  );
  expect(result).toEqual(scenarioStarship[0].result);
});
