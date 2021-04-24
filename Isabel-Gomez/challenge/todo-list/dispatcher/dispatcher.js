import { ACTIONS } from '../actions/actionTypes';

export const addNewTask = (data) => ({ type: ACTIONS.ADD_TASK, data });

export const deleteTask = (id) => ({ type: ACTIONS.DELETE_TASK, id });

export const modifyTask = (id) => ({ type: ACTIONS.MODIFY_TASK, id });
