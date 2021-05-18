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

  describe('When actionType DELETE_TASK', () => {
    test('Then return action.task', () => {
      const action = {
        type: actionTypes.DELETE_TASK,
        task: { _id: 1 }
      };

      expect(taskReducer([{ _id: 1 }, { _id: 2 }], action)).toEqual(
        [{ _id: 2 }]
      );
    });
  });

  describe('When actionTypes LOAD_TASKS', () => {
    test('Then return action.task', () => {
      const action = {
        type: actionTypes.LOAD_TASKS,
        task: [{ task: 'Buy milk' }, { task: 'Buy eggs' }]
      };

      expect(taskReducer([], action)).toEqual(
        [{ task: 'Buy milk' }, { task: 'Buy eggs' }]
      );
    });
  });
});
