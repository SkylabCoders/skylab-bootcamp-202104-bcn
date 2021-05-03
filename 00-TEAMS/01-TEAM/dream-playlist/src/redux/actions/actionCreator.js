/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';
import credentials from '../../assets/credentials';

export function getToken() {
  debugger;
  return async (dispatch) => {
    const token = await axios('https://accounts.spotify.com/api/token', {
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
  debugger;
  return async (dispatch) => {
    const user = await axios('https://api.spotify.com/v1/users/xengue', {
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

export function loadSongs(url = URL) {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_SONGS,
      songs: response.data
    });
  };
}
