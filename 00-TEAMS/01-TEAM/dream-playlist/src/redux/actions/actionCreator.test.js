import actionTypes from './actionTypes';
import { login, logout } from './actionCreator';

describe('Given a function creator', () => {
  const scenarios = [
    {
      callback: login,
      result: { type: actionTypes.AUTH_LOGIN }
    },
    {
      callback: logout,
      result: { type: actionTypes.AUTH_LOGOUT }
    }
  ];

  scenarios.forEach((scenario) => {
    describe('When invoked', () => {
      test(`Then return ${scenario.result}`, () => {
        const resultScenario = scenario.result;
        const result = scenario.callback();
        expect(resultScenario).toEqual(result);
      });
    });
  });
});
