import actionTypes from '../actions/actioTypes';
// import INITIALTASK from '../../constants/task.mock';

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

    default:
      return state;
  }
}

export default taskReducer;
