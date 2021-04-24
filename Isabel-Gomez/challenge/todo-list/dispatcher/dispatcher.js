const ACTIONS = require('../actions/actionTypes');

// import { ACTIONS } from '../actions/actionTypes';

const addNewTask = (data) => ({ type: ACTIONS.ADD_TASK, data });

const deleteTask = (id) => ({ type: ACTIONS.DELETE_TASK, id });

const modifyTask = (id) => ({ type: ACTIONS.MODIFY_TASK, id });

module.exports = { addNewTask, deleteTask, modifyTask };
