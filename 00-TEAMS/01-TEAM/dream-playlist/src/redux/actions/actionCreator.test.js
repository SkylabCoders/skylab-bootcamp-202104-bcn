import actionTypes from './actionTypes';
import { login, logout } from './actionCreator';

describe('Given a login function creator', () => {
  const scenarios = [
    {
      result: { type: actionTypes.AUTH_LOGIN }
    }
  ];

  scenarios.forEach((scenario) => {
    describe('When invoked', () => {
      test(`Then return ${scenario.result}`, () => {
        const resultScenario = scenario.result;
        const result = login();
        expect(resultScenario).toEqual(result);
      });
    });
  });
});

describe('Given a logout function creator', () => {
  const scenarios = [
    {
      result: { type: actionTypes.AUTH_LOGOUT }
    }
  ];

  scenarios.forEach((scenario) => {
    describe('When invoked', () => {
      test(`Then return ${scenario.result}`, () => {
        const resultScenario = scenario.result;
        const result = logout();
        expect(resultScenario).toEqual(result);
      });
    });
  });
});
