import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export default function loadInformation() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_ERROR
      });
    }
  };
}
