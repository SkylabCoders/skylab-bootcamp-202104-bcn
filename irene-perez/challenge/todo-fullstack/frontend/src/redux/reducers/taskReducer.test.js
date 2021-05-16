import actionTypes from '../actions/actionTypes';
import taskReducer from './taskReducer';

describe('Given a task reducer', () => {
  describe('When actionType ADD_TASK', () => {
    test('Then return action.task', () => {
      const action = {
        type: actionTypes.ADD_TASK,
        task: { newTask: 'Buy milk' }
      };

      expect(taskReducer([], action)).toEqual(
        [{ newTask: 'Buy milk' }]
      );
    });
  });
});
