import actionTypes from '../actions/actionTypes';
import taskReducer from './tasksReducer';

describe('Given a tasks reducer', () => {
  describe('When actionType LOAD_TASKS', () => {
    test('Then return action.tasks', () => {
      const action = {
        type: actionTypes.LOAD_TASKS,
        tasks: [{ task: 1 }, { task: 2 }],
      };
      expect(taskReducer([], action)).toEqual(
        [{ task: 1 }, { task: 2 }],
      );
    });
  });

  describe('When actionType DELETE_TASK', () => {
    test('Then return action.task', () => {
      const action = {
        type: actionTypes.DELETE_TASK,
        task: { _id: 1 },
      };
      expect(taskReducer([{ _id: 1 }, { _id: 2 }], action)).toEqual(
        [{ _id: 2 }],
      );
    });
  });

  describe('When actionType ADD_TASK', () => {
    test('Then return action.task', () => {
      const action = {
        type: actionTypes.ADD_TASK,
        task: { newTask: 1 },
      };
      expect(taskReducer([], action)).toEqual(
        [{ newTask: 1 }],
      );
    });
  });

  describe('When actionType UPDATE_TASK', () => {
    test('Then return action.task', () => {
      const action = {
        type: actionTypes.UPDATE_TASK,
        task: { _id: 1, name: 'Anna Sala' },
      };
      expect(taskReducer([{ _id: 1, name: 'Anna' }, { _id: 2 }], action)).toEqual(
        [{ _id: 1, name: 'Anna Sala' }, { _id: 2 }],
      );
    });
  });
});
