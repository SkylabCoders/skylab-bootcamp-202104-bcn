/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
// import INITIALTASK from '../../constants/task.mock';
import actionTypes from '../actions/actioTypes';

function taskReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        action.task];

    case actionTypes.LOAD_TASKS:
      return (
        action.task
      );

    case actionTypes.UPDATE_TASK:
      debugger;
      return state.map(
        (task) => (
          task._id === action.task._id
            ? { ...task, done: true }
            : task)
      );

    case actionTypes.DELETE_TASK:
      state.splice(state.indexOf(action.task), 1);
      return [...state];

    default:
      return state;
  }
}

export default taskReducer;
