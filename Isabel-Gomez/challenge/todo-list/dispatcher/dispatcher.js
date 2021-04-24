// const ACTIONS = require('../actions/actions');

// import { ACTIONS } from '../actions/actionTypes';

const addValueToNewTask = (value) => {
  const addTask = { type: 'ADD_TASK', data: value };
  return addTask;
};

const dispatcherNewTask = (value) => {
  reducerToAdd(objectItem);
};
dispatcherNewTask(addValueToNewTask);
// const deleteTask = (id) => ({ type: ACTIONS.DELETE_TASK, id });

// const modifyTask = (id) => ({ type: ACTIONS.MODIFY_TASK, id });

// module.exports = { addNewTask, deleteTask, modifyTask };
