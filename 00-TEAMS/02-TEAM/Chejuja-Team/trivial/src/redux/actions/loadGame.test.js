// import axios from 'axios';
import { loadGame } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('./actionCreators');
jest.mock('axios');

describe('When invoked a loadGame function', () => {
  test('Should return a object with type and data', () => {
    const result = loadGame;
    expect(result.type).toBe(actionTypes.loadGame);
  });
  // test('loadGameAxios function', async () => {
  //   axios.mockResolvedValue({ data: ['Testeando bajo el sol'] });
  //   const diff = 'easy';
  //   const type = 'boolean';
  //   const dispatch = jest.fn();
  //   const testFn = await loadGame(diff, type);
  //   testFn(dispatch);
  //   expect(dispatch).toHaveBeenCalledWith({
  //     type: actionTypes.LOAD_GAME,
  //     data: ['Testeando bajo el sol']
  //   });
  // });
});
