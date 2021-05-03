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
// https://api.spotify.com/v1/users/${userId}/collection/tracks`
export function loadSongs(token, userId) {
  return async (dispatch) => {
    const response = await axios.get(urls.user + userId + urls.collection);
    dispatch({
      type: actionTypes.LOAD_SONGS,
      songs: response.data
    });
  };
}
