import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2022/';

export function loadItems() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_ITEMS,
      items: data,
    });
  };
}

export function addItem(item) {
  return async (dispatch) => {
    const { data } = await axios.post(url, item);
    dispatch({
      type: actionTypes.ADD_ITEM,
      item: data,
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

export function updateItem(item) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${item.id}`, item);
    dispatch({
      type: actionTypes.UPDATE_ITEM,
      item: data,
    });
  };
}

export function loadItemById(itemId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${itemId}`);
    dispatch({
      type: actionTypes.LOAD_ITEM,
      item: data,
    });
  };
}
