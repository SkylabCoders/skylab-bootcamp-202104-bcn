import axios from 'axios';
import actionTypes from './actionTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const loadCv = (url = BASE_URL) => async (dispatch) => {
  try {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_CV,
      cv: data[0],
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default loadCv;
