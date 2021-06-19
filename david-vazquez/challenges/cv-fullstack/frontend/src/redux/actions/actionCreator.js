/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2500/curriculums/60a62733ac9b213ed890bf4d';

export default function loadCurriculum() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        curriculum: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_ERROR,
      });
    }
  };
}
