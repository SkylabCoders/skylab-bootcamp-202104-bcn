import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2020/tasks'; // TODO: use ENV VARIABLE

function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.TASKS,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_TASKS_ERROR',
      });
    }
  };
}

export default loadTasks;
