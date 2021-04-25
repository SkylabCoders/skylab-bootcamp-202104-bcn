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
  nextTaskId: 3,

  reducer(tasks = this.tasks, action) {
    let newTasks = [...tasks];

    switch (action.type) {
      case GET_TASKS:
        break;
      case DELETE_TASK:
        newTasks = newTasks.filter((task) => task.id !== action.taskId);
        break;
      case CREATE_TASK:
        newTasks = [
          ...newTasks,
          { ...action.taskData, done: false, id: this.nextTaskId },
        ];
        this.nextTaskId++;
        break;
      case MODIFY_TASK:
        newTasks = newTasks.map(
          (task) => {
            if (task.id === action.taskData.id) {
              return { ...action.taskData, done: false };
            } return task;
          },
        );

        break;
      case TOOGLE_TASK_STATE:
        newTasks = newTasks.map(
          (task) => {
            if (task.id === action.taskId) {
              return { ...task, done: !task.done };
            } return task;
          },
        );
        break;

        // case WAITING_TASK:
        //   this.waitingTask === true
        //     ? this.waitingTask = false
        //     : this.waitingTask = true;
        //   break
      default:
        break;
    }
    return newTasks;
  },

  dispatch(action) {
    this.tasks = this.reducer(this.tasks, action);
    updateTaskList();
  },

};
