/* eslint-disable consistent-return */
// import ANSWER from '';
import actionTypes from '../actions/actionTypes';

function questionReducer(questions = [], action) {
  switch (action.type) {
    case actionTypes.PRINT_QUESTION:
      questions.forEach((question) => question);
      break;
    default:
      return questions;
  }
}
export default questionReducer;
