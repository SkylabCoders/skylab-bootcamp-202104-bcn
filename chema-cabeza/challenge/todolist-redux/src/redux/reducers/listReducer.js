import LIST from '../../constants/list.mock';
import actionTypes from '../actions/actionTypes';

function listReducer(list = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      return LIST;

    case actionTypes.DELETE_TASK:
      return list.filter((element) => element.id !== action.taskId);

    case actionTypes.ADD_TASK:
      return [
        ...list,
        action.task,
      ];

    case actionTypes.UPDATE_TASK:
      return list.map(
        (task) => (task.id === action.taskId
          ? { ...task, ...action.title }
          : task),
      );

    default:
      return list;
  }
}

export default listReducer;
