/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export function PRINT_QUESTION(question) {
  return {
    type: actionTypes.PRINT_QUESTION,
    question
  };
}
