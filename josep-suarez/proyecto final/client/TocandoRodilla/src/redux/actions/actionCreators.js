import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/todos';

export function GetMotos() {
  return async dispatch => {
    const {data} = await axios(url);
    dispatch({
      type: actionTypes.GET_MOTOS,
      task: data,
    });
  };
}
