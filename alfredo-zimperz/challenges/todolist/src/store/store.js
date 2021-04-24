/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

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

  handleDelete(id) {
    this.dispatch(deleteTask(id));
  },

  updateTaskList() {
    tasklist.innerHTML = '';
    this.tasks.forEach((task) => {
      createTaskListItem(
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
      case CREATE_TASK:
        newTasks = [
          ...newTasks,
          { ...action.taskData, done: false, id: this.nextTaskId },
        ];
        this.nextTaskId++;
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
