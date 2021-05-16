import actionTypes from '../actions/actionTypes';
import listReducer from './listReducer';

describe('listReducer', () => {
  test('Should return default state', () => {
    const newState = listReducer(undefined, {});

    expect(newState).toEqual([]);
  });

  test('LOAD_LIST should return action.list', () => {
    const newState = listReducer(undefined, { type: actionTypes.LOAD_LIST, list: 'hola' });

    expect(newState).toEqual('hola');
  });

  test('DELETE_TASK should return an array without the element sent by its id', () => {
    const newState = listReducer([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Juan' }], { type: actionTypes.DELETE_TASK, taskId: 1 });

    expect(newState).toEqual([{ id: 2, name: 'Juan' }]);
  });

  test('ADD_TASK should add action.task to list', () => {
    const newState = listReducer([{ id: 1, name: 'Pepe' }], { type: actionTypes.ADD_TASK, task: { id: 2, name: 'Juan' } });

    expect(newState).toEqual([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Juan' }]);
  });

  test('UPDATE_TASK should update the matching task', () => {
    const newState = listReducer([{ id: 1, name: 'Pepe' }], { type: actionTypes.UPDATE_TASK, task: { id: 1, name: 'Juan' } });

    expect(newState).toEqual([{ id: 1, name: 'Juan' }]);
  });
});
