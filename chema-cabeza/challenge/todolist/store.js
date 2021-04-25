const store = {
  tasks: [],

  reducer(tasks, action) {
    const newTask = [...tasks];
    switch (action.type) {
      case 'ADD_TASK':
        newTask.push({ id: action.id, title: action.title, done: action.done });
        //   printTasks(tasks);
        break;
      case 'DELETE_TASK':
        newTask.splice(newTask.findIndex((element) => element.id === action.id), 1);
        break;
      case 'DONE_TASK':
        const currentTask = newTask[newTask.findIndex((element) => element.id === action.id)];
        currentTask.done = !currentTask.done;
        break;
      default:
        break;
    }
    return newTask;
  },
  dispatch(action) {
    this.tasks = this.reducer(this.tasks, action);
    printTasks(this.tasks);
  },
};
