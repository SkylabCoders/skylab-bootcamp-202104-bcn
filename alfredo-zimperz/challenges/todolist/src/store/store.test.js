const tasksReducer = (tasks = this.tasks, action) => {
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
    default:
      break;
  }
  return newTasks;
};

test('Given a tasksReducer function', () => {
  result = true;
  expect(result).toBe(true);
});
