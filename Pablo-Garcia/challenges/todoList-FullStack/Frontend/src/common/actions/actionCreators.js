import axios from 'axios';
import actionsTypes from './actionType';

const url = 'http://localhost:2022/tasks';

export function getTask() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionsTypes.GET_TASK,
        tasks: data
      });
    } catch (error) {
      dispatch({
        type: 'GET_TASK'
      });
    }
  };
}

export function deleteTask(taskId) {
  return async (dispatch) => {
    await axios.delete(`${url}/${taskId}`);
    dispatch({
      type: actionsTypes.DELETE_TASK,
      taskId
    });
  };
}
