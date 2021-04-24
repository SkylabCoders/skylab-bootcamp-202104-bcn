import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actionTypes';

function todoChanges(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return 'TASK ADDED';
    case EDIT_TASK:
      return 'TASK EDITED';
    case DELETE_TASK:
      return 'TASK DELETED';
    default:
      return state;
  }
}
