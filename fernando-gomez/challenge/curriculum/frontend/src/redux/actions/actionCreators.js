/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const curriculumUrl = 'http://localhost:2021/curriculums';

export default function loadCurriculum() {
  return async (dispatch) => {
    try {
      const { data } = await axios(curriculumUrl);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        curriculum: data[0]
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CURRICULUM_ERROR
      });
    }
  };
}
