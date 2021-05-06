import { loadGame } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('./actionCreators');
describe('When invoked a loadGame function', () => {
  test('Should return a object with type and data', () => {
    const result = loadGame;
    expect(result.type).toBe(actionTypes.loadGame);
  });
  test.only('loadGame function', async () => {
    const dispatch = jest.fn();
    const newfunction = loadGame();
    await newfunction(dispatch);
    expect(dispatch).toHaveBeenCall();
  });
});
