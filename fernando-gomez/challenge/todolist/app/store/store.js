const store = {

  allTasksDB: [
    {
      id: 1,
      description: 'pick up milk',
    },
    {
      id: 2,
      description: 'learn backbone',
    },
    {
      id: 3,
      description: 'go for a run',
    },
  ],

  editButtonOpened: null,

  reducer({ type, payload }, allTasksDB = this.allTasksDB) {
    switch (type) {
      case CREATE_TASK:
        allTasksDB.push(payload);
        break;

      case DELETE_TASK:
        store.allTasksDB = allTasksDB.filter((task) => payload !== task.id);
        break;

      case SHOW_EDIT_TASK_BUTTON:
        this.editButtonOpened = payload;
        break;

      default:
        break;
    }
  },

  dispatch(action) {
    store.reducer(action);
    updateTaskList();
  },
};

const handleCreate = () => {
  const taskToAdd = {
    id: store.allTasksDB.length + 1,
    description: tasksInput.value,
  };
  store.dispatch(createTask(taskToAdd));
};

const handleDelete = (id) => {
  store.dispatch(deleteTask(id));
};

const handleShowEditInput = (id) => {
  store.dispatch(showEditInput(id));
};

// const handleEdit = (id) => {
//   store.dispatch(editTask(id));
// };
