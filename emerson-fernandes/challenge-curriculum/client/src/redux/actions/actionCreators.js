import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/curriculum';

function loadData() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_DATA,
        data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_DATA_ERROR
      });
    }
  };
}

export default loadData;
