/* eslint-disable import/extensions */
import { GET_TASKS, DELETE_TASK } from '../actions/actionTypes.js';

// const actionTypes = require('../actions/actionTypes');

const store = {
  state: {
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
  },

  reducer(state = this.state, action) {
    const newTasks = [...state.tasks];

    switch (action) {
      case GET_TASKS:
        break;
      case DELETE_TASK:
        newTasks.filter((task) => task.id !== action.taskId);
        break;

      default:
        break;
    }
    return newTasks;
  },
};

export default store;
