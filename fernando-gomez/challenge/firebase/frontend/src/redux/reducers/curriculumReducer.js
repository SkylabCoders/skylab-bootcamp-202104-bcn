/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function curriculumReducer(curriculum = [], action) {
  const updatedcurriculum = [...curriculum];

  if (action.type === actionTypes.LOAD_CURRICULUM) {
    return action.curriculum;
  }
  return updatedcurriculum;
}

export default curriculumReducer;
