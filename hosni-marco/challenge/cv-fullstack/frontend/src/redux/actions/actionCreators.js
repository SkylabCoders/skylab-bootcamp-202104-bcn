import axios from 'axios';
import actionTypes from './actionTypes';

const URL = process.env.REACT_APP_API_BASE_URL;

export default function loadCv() {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({
      type: actionTypes.LOAD_CV,
      data
    });
  };
}
