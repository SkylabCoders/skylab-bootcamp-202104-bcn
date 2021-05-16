import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:1505/Presentation';

export default function loadInformation() {
  return async (dispatch) => {
    try {
      const { info } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_DATA,
        payload: info
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_DATA_ERROR'
      });
    }
  };
}
