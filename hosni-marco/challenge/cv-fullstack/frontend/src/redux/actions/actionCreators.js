/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const URL = process.env.REACT_APP_API;

export default function loadCv() {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({
      type: actionTypes.LOAD_CV,
      cv: data[0]
    });
  };
}
