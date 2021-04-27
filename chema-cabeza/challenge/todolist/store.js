const store = {
  tasks: [],

  reducer(tasks, data) {
    const newTask = [...tasks];
    switch (data.type) {
      case 'ADD_TASK':
        newTask.push({
          id: data.id, title: data.title, done: data.done, editable: false,
        });
        break;
      case 'DELETE_TASK':
        newTask.splice(newTask.findIndex((element) => element.id === data.id), 1);
        break;
      case 'DONE_TASK':
        const currentTask = newTask[newTask.findIndex((element) => element.id === data.id)];
        currentTask.done = !currentTask.done;
        break;
      case 'EDIT_TASK':
        const currentEditTask = newTask[newTask.findIndex((element) => element.id === data.id)];
        currentEditTask.editable = !currentEditTask.editable;
        currentEditTask.title = data.editable;
        break;
      default:
        break;
    }
    return newTask;
  },
  dispatch(data) {
    this.tasks = this.reducer(this.tasks, data);
    printTasks(this.tasks);
  },
};
