// const actionTypes = require('../actions/actionTypes');
const GET_TASK = 'GET_TASK';
const GET_TASKS = 'GET_TASKS';

// const tasksLoaded = require('./tasks.json');

let appState = {
  tasks: [],
  selectedTask: null,
};

function setContent(data) {
  drawTodoList(data);
}

function setEnv(state, data) {
  appState = state;
  setContent(data);
}

function tasksReducer(data, action) {
  const newState = { ...appState };
  switch (action) {
    case GET_TASK:
      newState.selectedTask = data;
      break;
    case GET_TASKS:
      newState.tasks = data;
      break;
    default:
  }

  return setEnv(newState, data);
}
