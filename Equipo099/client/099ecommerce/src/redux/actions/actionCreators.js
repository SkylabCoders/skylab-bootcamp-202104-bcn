/* eslint-disable no-unreachable */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2099/products';

export function loadItems() {
  debugger;
  try {
    return async (dispatch) => {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_ITEMS,
        items: data
      });
    };
  } catch(error){
    console.error(error);
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
  return async (dispatch) => {
    try{
      const {data} = await axios.delete(`${url}/${itemId}`);
      dispatch({
        type: actionTypes.DELETE_ITEM,
        itemId,
      });
    } catch(error) {
      dispatch({
        type: 'DELETE_ITEM_ERROR',
      })
    }
  };
}

export function updateItem(item) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/${item.id}`, item);
      dispatch({
        type: actionTypes.UPDATE_ITEM,
        item: data
      });
    } catch(error){
      dispatch({
        type: 'UPDATE_ITEM_ERROR'
      })
    }
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
