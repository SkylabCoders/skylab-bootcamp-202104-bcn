import axios from 'axios';
import actionTypes from './actionTypes';

const URL = process.env.REACT_APP_URL;

const loadCurriculum = () => async (dispatch) => {
  try {
    const { data } = await axios(URL);
    dispatch({
      type: actionTypes.LOAD_CURRICULUM,
      cvs: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_ERROR,
      error: 'ERROR',
    });
  }
};

export default loadCurriculum;
