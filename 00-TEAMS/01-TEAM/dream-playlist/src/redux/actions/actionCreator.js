/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';
import credentials from '../../assets/credentials';
import urls from '../../assets/urls';

export function getToken() {
  return async (dispatch) => {
    const token = await axios(urls.token, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${credentials.clientId}:${credentials.clientSecret}`)}`
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    });
    dispatch({
      type: actionTypes.GET_TOKEN,
      newToken: token.data.access_token
    });
  };
}

export function getUserData(token) {
  return async (dispatch) => {
    const user = await axios(`${urls.user}xengue`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true,
      method: 'GET'
    });
    dispatch({
      type: actionTypes.GET_USER,
      newUser: user.data
    });
  };
}
export function loadSongs(token, userId) {
  debugger;
  return async (dispatch) => {
    const response = await axios(urls.user + userId + urls.collection, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true,
      method: 'GET'
    });
    dispatch({
      type: actionTypes.LOAD_SONGS,
      newSongs: response.data
    });
  };
}
