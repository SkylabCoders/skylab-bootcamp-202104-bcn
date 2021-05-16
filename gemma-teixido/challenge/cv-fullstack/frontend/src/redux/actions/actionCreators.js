/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:1505/Presentations/609ff0f29c7ae37e7c99ed3b';

export default function loadInformation() {
  return async (dispatch) => {
    debugger;
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
