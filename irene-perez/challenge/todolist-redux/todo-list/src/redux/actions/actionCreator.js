import ActionType from './actionType';

export function loadTask() {
  return {
    type: ActionType.LOAD_TASKS
  };
}

export function addTask(newTask) {
  return {
    type: ActionType.ADD_TASK,
    newTask
  };
}

export function deleteTask(idTask) {
  return {
    type: ActionType.DELETE_TASK,
    idTask
  };
}

export function doneTask(idTask) {
  return {
    type: ActionType.ADD_TASK,
    idTask
  };
}
