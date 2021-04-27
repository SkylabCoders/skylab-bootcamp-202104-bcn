/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const store = {

  allTasksDB: [
    {
      id: 1,
      description: 'pick up milk',
      status: 'pending',
    },
    {
      id: 2,
      description: 'learn backbone',
      status: 'pending',
    },
    {
      id: 3,
      description: 'go for a run',
      status: 'pending',
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

      case EDIT_TASK:
        this.editButtonOpened = null;
        store.allTasksDB = allTasksDB.map((task) => {
          if (task.id === payload.id) {
            return {
              id: payload.id,
              description: payload.newContent,
            };
          }
          return task;
        });
        break;

      case MARK_AS_DONE:
        store.allTasksDB = allTasksDB.map((task) => {
          if (task.id === payload) {
            return {
              id: task.id,
              description: task.description,
              status: 'done',
            };
          }
          return task;
        });
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
  const dataBase = store.allTasksDB;
  let nextId = 1;

  if (dataBase.length !== 0) {
    nextId = dataBase[dataBase.length - 1].id + 1;
  }

  if (tasksInput.value !== '') {
    const taskToAdd = {
      id: nextId,
      description: tasksInput.value,
    };
    store.dispatch(createTask(taskToAdd));
    tasksInput.value = '';
  }
};

const handleDelete = (id) => {
  store.dispatch(deleteTask(id));
};

const handleShowEditInput = (id) => {
  store.dispatch(showEditInput(id));
};

const handleEdit = (id) => {
  store.dispatch(editTask(id, editorInput));
};

const handleCompleted = (id) => {
  store.dispatch(markTaskAsDone(id));
};
