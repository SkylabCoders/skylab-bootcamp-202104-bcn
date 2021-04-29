import actionTypes from '../../actions/actionTypes';

function questionsReducer(questions = [], action) {
  let updatedQuestions = { ...questions };

  switch (action.type) {
    case actionTypes.LOAD_BOOKS:
      updatedQuestions = questions;
      break;
    default:
      updatedQuestions = questions;
      break;
  }
  return updatedQuestions;
}

export default questionsReducer;
