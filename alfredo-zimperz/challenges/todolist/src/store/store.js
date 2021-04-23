/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import { GET_TASKS, DELETE_TASK } from '../actions/actionTypes.js';
import ACTIONS from '../actions/actions.js';
// import SERVICES from '../helpers/services.js';
import HTML_HELPERS from '../helpers/html.js';

const tasklist = document.querySelector('.todo-list');

const store = {

  tasks: [
    {
      id: 0,
      title: 'Tarea 1',
      description: 'Descripcion tarea 1',
      done: false,
    },
    {
      id: 1,
      title: 'Tarea 2',
      description: 'Descripcion tarea 2',
      done: true,
    },
  ],

  handleDelete(id) {
    this.dispatch(ACTIONS.deleteTask(id));
  },

  updateTaskList() {
    tasklist.innerHTML = '';
    this.tasks.forEach((task) => {
      HTML_HELPERS.createTaskListItem(
        task.id, task.title, task.description, task.done, tasklist, this.handleDelete,
      );
    });
  },

  tasksReducer(tasks = this.tasks, action) {
    let newTasks = [...tasks];

    switch (action.type) {
      case GET_TASKS:
        break;
      case DELETE_TASK:
        newTasks = newTasks.filter((task) => task.id !== action.taskId);
        break;

      default:
        break;
    }
    return newTasks;
  },

  dispatch(action) {
    this.tasks = this.tasksReducer(this.tasks, action);
    this.updateTaskList();
    return true;
  },

};
export default store;
