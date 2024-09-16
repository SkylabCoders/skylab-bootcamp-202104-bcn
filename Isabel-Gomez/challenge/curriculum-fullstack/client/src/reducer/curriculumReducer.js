import actionTypes from '../actions/actionTypes';

const curriculumReducer = (curriculums = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_CURRICULUM:
      return action.cvs;
    default:
      break;
  }
  return curriculums;
};

export default curriculumReducer;
