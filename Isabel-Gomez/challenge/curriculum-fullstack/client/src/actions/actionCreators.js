import axios from 'axios';
import actionTypes from './actionTypes';

const { URL } = process.env;

export default function loadCurriculum() {
  return async (dispatch) => {
    try {
      const { data } = await axios(URL);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        cv: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_ERROR,
        error: 'ERROR',
      });
    }
  };
}
