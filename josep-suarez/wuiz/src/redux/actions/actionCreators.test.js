import axios from 'axios';
import PrintTask from './actionCreators';

jest.mock('axios');
jest.mock('./actionTypes')

describe('When invoked a printask func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    const loadTask = PrintTask();
    await loadTask(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
