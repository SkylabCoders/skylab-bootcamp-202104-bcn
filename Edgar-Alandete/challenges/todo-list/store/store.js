// const actionTypes = require('../actions/actionTypes');
const GET_TASK = 'GET_TASK';
const LOAD_TASKS = 'LOAD_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

// const tasksLoaded = require('./tasks.json');

let appState = {
  tasks: [{ taskId: '1', value: 'Sacar al perro', isFinished: false }, { taskId: '2', value: 'Aprender CSS con Dani', isFinished: false }],
  selectedTask: null,
  tasksNum: 2,
};

function setContent(data) {
  drawTodoList(data);
}

function setEnv(state) {
  appState = state;
  setContent(appState.tasks);
}

function updateTaskStore(data) {
  debugger;
  const { tasks } = { ...appState };
  const newTasks = tasks.map(({ taskId, isFinished, value }) => {
    if (taskId === data) {
      isFinished = true;
    }

    return { taskId, isFinished, value };
  });

  return newTasks;
}

function deleteTaskStore(data) {
  const { tasks } = { ...appState };
  const newTasks = tasks.filter(({ taskId }) => taskId !== data);
  return newTasks;
}

function createTaskStore(data) {
  const { tasks } = { ...appState };
  data.taskId = appState.tasksNum + 1;
  const newTasks = [...tasks, data];
  return newTasks;
}

function tasksReducer(data, action) {
  const newState = { ...appState };
  switch (action) {
    case CREATE_TASK:
      newState.tasks = createTaskStore(data);
      newState.tasksNum += 1;
      break;
    case GET_TASK:
      newState.selectedTask = data;
      break;
    case LOAD_TASKS:
      break;
    case DELETE_TASK:
      newState.tasks = deleteTaskStore(data);
      break;
    case UPDATE_TASK:
      newState.tasks = updateTaskStore(data);
      break;
    default:
  }
  return setEnv(newState);
}
