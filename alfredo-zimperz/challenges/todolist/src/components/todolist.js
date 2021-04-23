/* eslint-disable import/extensions */
import STORE from '../store/store.js';
import HTML_HELPERS from '../helpers/html.js';
import ACTIONS from '../actions/actions.js';
import SERVICES from '../helpers/services.js';

const tasklist = document.querySelector('.todo-list');
const newTaskInput = document.querySelector('.addtask__input');

SERVICES.updateTaskList();

// const stateUpdated = STORE.dispatch(ACTIONS.deleteTask(1));
// console.log(stateUpdated);
// updateTaskList();
