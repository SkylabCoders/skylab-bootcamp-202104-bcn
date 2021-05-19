/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const localhostUrl = process.env.REACT_APP_URL;

function loadInfo() {
  return async (dispatch) => {
    try {
      const { data } = await axios(localhostUrl);
      dispatch({
        type: actionTypes.LOAD_INFO,
        info: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_INFO_ERROR
      });
    }
  };
}

export default loadInfo();
