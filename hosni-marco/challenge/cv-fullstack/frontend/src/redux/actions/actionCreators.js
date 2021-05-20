import axios from 'axios';
import actionTypes from './actionTypes';
// import cv from '../../cv.json';

const URL = process.env.REACT_APP_API_BASE_URL;
// const URL = cv;
export default function loadCv() {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({
      type: actionTypes.LOAD_CV,
      cv: data[0]
    });
  };
}
