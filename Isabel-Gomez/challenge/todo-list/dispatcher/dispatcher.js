// const ACTIONS = require('../actions/actions');

// import { ACTIONS } from '../actions/actionTypes';

const addValueToNewTask = (value) => {
  const addTask = { type: 'ADD_TASK', data: value };
  console.log('object', addTask);
  dispatcherNewTask(addTask);
};

const dispatcherNewTask = (value) => {
  reducerToAdd(value);
};
// const deleteTask = (id) => ({ type: ACTIONS.DELETE_TASK, id });

// const modifyTask = (id) => ({ type: ACTIONS.MODIFY_TASK, id });

// module.exports = { addNewTask, deleteTask, modifyTask };
