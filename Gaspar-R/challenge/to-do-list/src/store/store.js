const actionTypes = require('../actions/actionTypes');

const store = {
  state: {
    tasks: [
      {
        id: 0,
        title: 'Tarea 1',
        description: 'Descripcion tarea 1',
        done: false
      },
      {
        id: 1,
        title: 'Tarea 2',
        description: 'Descripcion tarea 2',
        done: true
      }
    ]
  },
  todolistReducer: function() => {(state = this.state, action) 
    const newTasks = [...state.tasks];

    switch (action) {
      case actionTypes.GET_TASKS:
        break;
      case actionTypes.DELETE_TASK:
        newTasks.filter((task) => task.id !== action.taskId);
        break;
      default:
        break;

        return newTasks;
    }
  }
};

module.exports = {
  store,
};
