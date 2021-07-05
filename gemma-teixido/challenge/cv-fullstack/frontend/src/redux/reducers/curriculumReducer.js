import actionTypes from '../actions/actionTypes';

function curriculumReducer(information = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CURRICULUM:
      return action.payload;
    default:
      return information;
  }
}

export default curriculumReducer;
