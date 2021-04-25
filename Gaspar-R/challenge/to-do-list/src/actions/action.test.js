// const actionType = require('./actionTypes');

const {
  getTask, deleteTask, addTask, completedTask
} = require('./action');

test('Given a getTask function creator,', () => {
  const result = getTask();
  expect(result).toEqual({
    type: actionType.GET_TASK
  });
});

test('Given a addTask function creator,', () => {
  const result = addTask(2, 'compras');
  expect(result).toEqual({
    type: actionType.ADD_TASK,
    data: {
      taskId: 2,
      title: 'compras',
      complete: false
    }
  });
});

test('Given a deleteTask function creator,', () => {
  const result = deleteTask(1);
  expect(result).toEqual({
    type: actionType.DELETE_TASK,
    data: {
      taskId: 1
    }
  });
});

test('Given a completedTask function creator,', () => {
  const result = completedTask(1);
  expect(result).toEqual({
    type: actionType.COMPLETED_TASK,
    data: {
      taskId: 1,
      complete: true
    }
  });
});
