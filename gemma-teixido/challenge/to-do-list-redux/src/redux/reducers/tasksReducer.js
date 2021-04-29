import TASKS from '../constants/tasksList';
import actionType from '../actions/actionType';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionType.LOAD_TASKS:
      return TASKS;

    case actionType.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);

    case actionType.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];

    case actionType.MODIFY_TASK:
      return tasks.map(
        (task) => (task.id === action.task.id
          ? { ...task, ...action.task }
          : task)
      );

    default:
      return tasks;
  }
}

export default tasksReducer;
