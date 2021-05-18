import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:3535/curriculum';

export default function loadCurriculum() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        curriculum: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_ERROR,
        error,
      });
    }
  };
}
