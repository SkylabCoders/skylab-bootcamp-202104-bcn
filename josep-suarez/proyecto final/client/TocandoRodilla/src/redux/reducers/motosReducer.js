import actionTypes from '../actions/actionTypes';

function motosReducer(motos = [], action) {
  switch (action.type) {
    case actionTypes.GET_MOTOS:
      return action.data;
    default:
      return motos;
  }
}
export default motosReducer;
