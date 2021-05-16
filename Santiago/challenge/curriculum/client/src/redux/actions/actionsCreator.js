import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:3103/details';

export default function loadData() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_DATA,
        info: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_ERROR
      });
    }
  };
}
