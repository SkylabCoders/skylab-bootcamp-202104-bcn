// const actionType = require('./actionTypes');

// const {getTask, deleteTask, addTask, completedTask} = require('./action');

const GET_TASK = 'GET_TASK';
const DELETE_TASK = 'DELETE_TASK';
const ADD_TASK = 'ADD_TASK';
const COMPLETED_TASK = 'COMPLETED_TASK';

const actionType = {
  GET_TASK,
  DELETE_TASK,
  ADD_TASK,
  COMPLETED_TASK
};

test('Given a getTask function creator,', () => {
  const result = getTask();
  expect(result).toEqual({
    type: actionType.GET_TASK
  });
});

test('Given an addTask creator, when promise is fulfilled', () => expect(addTask('task')).resolves.toEqual({
  type: actionType.ADD_TASK,
  data: {
    title: 'task',
    complete: false
  }
}));

test('Given an addTask creator, when promise is rejected', () => {
  expect(addTask('task')).rejects.toEqual(
    { type: 'ERROR', message: 'An error has occurred, task was not created' }
  );
});

test('Given a deleteTask function creator,', () => {
  const result = deleteTask(1);
  expect(result).toEqual({
    type: actionType.DELETE_TASK,
    data: {
      id: 1
    }
  });
});

test('Given a completedTask function creator,', () => {
  const result = completedTask(1);
  expect(result).toEqual({
    type: actionType.COMPLETED_TASK,
    data: {
      id: 1,
      complete: true
    }
  });
});

/// ////-----------funciones a testear------------/////////

const getTask = () => (
  {
    type: actionType.GET_TASK
  }
);

const addTask = (title) => new Promise((resolve, reject) => {
  if (promiseResolve = true) {
    setTimeout(() => {
      resolve({
        type: actionType.ADD_TASK,
        data: {
          title,
          complete: false
        }
      });
    }, 1500);
  } else {
    reject({
      type: 'ERROR',
      message: 'An error has occurred, task was not created'
    });
  }
});

const deleteTask = (taskId) => ({
  type: actionType.DELETE_TASK,
  data: {
    id: taskId
  }
});

const completedTask = (taskId) => ({
  type: actionType.COMPLETED_TASK,
  data:
    {
      id: taskId,
      complete: true
    }
});
