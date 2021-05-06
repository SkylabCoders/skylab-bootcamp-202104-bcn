import axios from 'axios';
import actionTypes from './actionTypes';
import URLS from '../Constants/Urls';

const {
  API_URL, PEOPLE_URL, PLANETS_URL, STARSHIPS_URL
} = URLS;
const {
  ADD_USER,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  CHANGE_FACTION,
  CREATE_TRAVEL,
  DELETE_WISH,
  LOAD_LOCAL_CHARACTERS,
  LOAD_SWAPI,
  LOAD_PEOPLE,
  LOAD_PLANETS,
  LOAD_STARSHIPS,
  LOAD_LOCAL_PLANETS,
  LOAD_LOCAL_STARSHIPS,
  MODIFY_USERNAME,
  MODIFY_WISH,
  RESET_PROFILE,
  SELECT_AVATAR,
  SET_CURRENT_PLANET,
  SET_CURRENT_STARSHIP,
  SHOW_PRICE
} = actionTypes;

export const addUser = (data) => ({
  type: ADD_USER,
  payload: data
});

export const login = () => ({
  type: AUTH_LOGIN
});

export const logout = () => ({
  type: AUTH_LOGOUT
});

export const changeFaction = (data) => ({
  type: CHANGE_FACTION,
  payload: data
});

export const createTravel = (data) => ({
  type: CREATE_TRAVEL,
  payload: data
});

export const deleteWish = (wishId) => ({
  type: DELETE_WISH,
  payload: wishId
});

export const loadLocalCharacters = () => ({
  type: LOAD_LOCAL_CHARACTERS
});

export const loadLocalPlanets = () => ({
  type: LOAD_LOCAL_PLANETS
});

export const loadLocalStarships = () => ({
  type: LOAD_LOCAL_STARSHIPS
});

export const loadAPI = () => async (dispatch) => {
  const { data } = await axios(`${API_URL}`);
  dispatch({
    type: LOAD_SWAPI,
    payload: data.results
  });
};

export const loadPeople = () => async (dispatch) => {
  const { data } = await axios(`${PEOPLE_URL}`);
  dispatch({
    type: LOAD_PEOPLE,
    payload: data.results
  });
};

export const loadPlanets = (page) => async (dispatch) => {
  const { data } = await axios(`${PLANETS_URL}${page}`);
  dispatch({
    type: LOAD_PLANETS,
    payload: data.results
  });
};

export const loadStarships = (page) => async (dispatch) => {
  const { data } = await axios(`${STARSHIPS_URL}${page}`);
  dispatch({
    type: LOAD_STARSHIPS,
    payload: data.results
  });
};

export const modifyUserName = (newUsername) => ({
  type: MODIFY_USERNAME,
  payload: newUsername
});

export const modifyWish = (newWish) => ({
  type: MODIFY_WISH,
  payload: newWish
});

export const resetProfile = () => ({
  type: RESET_PROFILE
});

export const selectAvatar = (data) => ({
  type: SELECT_AVATAR,
  payload: data
});

export const setCurrentPlanet = (planet) => ({
  type: SET_CURRENT_PLANET,
  payload: planet
});

export const setCurrentStarship = (starship) => ({
  type: SET_CURRENT_STARSHIP,
  payload: starship
});

export const showPrice = (data) => ({
  type: SHOW_PRICE,
  payload: data
});
