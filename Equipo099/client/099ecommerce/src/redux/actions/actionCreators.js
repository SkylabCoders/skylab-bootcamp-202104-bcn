import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2022/';

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

export function addItem(item) {
  return async (dispatch) => {
    const { data } = await axios.post(url, item);
    dispatch({
      type: actionTypes.ADD_ITEM,
      hero: data,
    });
  };
}

export function deleteItem(itemId) {
  return async (dispatch) => {
    await axios.delete(`${url}/${itemId}`);
    dispatch({
      type: actionTypes.DELETE_ITEM,
      itemId,
    });
  };
}

export function updateHero(item) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${item.id}`, item);
    dispatch({
      type: actionTypes.UPDATE_ITEM,
      item: data,
    });
  };
}
