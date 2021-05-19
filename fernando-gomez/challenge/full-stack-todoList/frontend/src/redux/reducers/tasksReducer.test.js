import actionTypes from '../actions/actionTypes';
import tasksReducer from './tasksReducer';

// jest.mock('./tasksReducer');

describe('Given a tasks reducer', () => {
  test('should handle LOAD_TASKS', () => {
    expect(
      tasksReducer([{ a: 'a' }], {
        type: actionTypes.LOAD_TASKS
      })
    ).toEqual(undefined);
  });

  test('should handle ADD_TASK', () => {
    expect(
      tasksReducer([{ a: 'a' }, { b: 'b' }], {
        type: actionTypes.ADD_TASK,
        task: { c: 'c' }
      })
    ).toEqual([{ a: 'a' }, { b: 'b' }, { c: 'c' }]);
  });

  test('should handle UPDATE_TASK', () => {
    expect(
      tasksReducer([{ a: 'a' }, { b: 'b', _id: '1' }], {
        type: actionTypes.UPDATE_TASK,
        task: { b: 'c', _id: '1' }
      })
    ).toEqual([{ a: 'a' }, { b: 'c', _id: '1' }]);
  });

  test('should handle DELETE_TASK', () => {
    expect(
      tasksReducer([{ a: 'a' }, { b: 'b', _id: 1 }], {
        type: actionTypes.DELETE_TASK,
        taskId: 1
      })
    ).toEqual([{ a: 'a' }]);
  });
});
