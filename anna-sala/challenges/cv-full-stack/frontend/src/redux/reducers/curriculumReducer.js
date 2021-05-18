import actionTypes from '../actions/actionTypes';

function curriculumReducer(curriculum = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CURRICULUM:
      return action.curriculum;
    case actionTypes.LOAD_ERROR:
      return action.error;
    default:
      return curriculum;
  }
}

export default curriculumReducer;
