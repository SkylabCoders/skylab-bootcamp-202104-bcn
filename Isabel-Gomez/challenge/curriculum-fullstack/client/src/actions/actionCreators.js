import axios from 'axios';
import actionTypes from './actionTypes';

// const url = process.env.URL;
const URL = 'http://localhost:1905/curriculums';

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
