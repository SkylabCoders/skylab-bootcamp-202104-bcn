import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/ecommerce';

export function loadItems() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_ITEMS,
        items: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ITEMS_ERROR',
      });
    }
  };
}
