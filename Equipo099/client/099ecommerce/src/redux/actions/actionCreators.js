/* eslint-disable no-unreachable */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2099/products';

export function loadItems() {
  debugger;
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_ITEMS,
        items: data
      });
    } catch(error){
      dispatch({
        type: 'LOAD_ITEMS_ERROR',
      })
    }
  }
}

export function addItem(item) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, item);
      dispatch({
        type: actionTypes.ADD_ITEM,
        item: data
      });
    } catch(error){
      dispatch({
        type: 'ADD_ITEM_ERROR',
      })
    }
  };
}

export function deleteItem(itemId) {
    return {
      type: actionTypes.DELETE_ITEM,
      itemId
    };
  };

export function updateItem(item) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${item.id}`, item);
    dispatch({
      type: actionTypes.UPDATE_ITEM,
      item: data
    });
  };
}

export function loadItemById(item) {
  debugger
    return {
      type: actionTypes.ADD_ITEM,
      item
    };
}

export function loadCart() {
  return {
    type: actionTypes.LOAD_ITEM,
  };
}
