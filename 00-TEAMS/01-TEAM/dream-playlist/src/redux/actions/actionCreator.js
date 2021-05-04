/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';
import credentials from '../../assets/credentials';
import urls from '../../assets/urls';
// eslint-disable-next-line spaced-comment
//https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback'
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
export function loadPlaylists(token, userId) {
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
      newPlaylists: response.data
    });
  };
}
