import axios from 'axios';
import actionTypes from './actionTypes';
import URLS from '../Constants/Urls';

const {
  API_URL, PEOPLE_URL, PLANETS_URL, STARSHIPS_URL
} = URLS;
const {
  LOAD_SWAPI, LOAD_PEOPLE, LOAD_PLANETS, LOAD_STARSHIPS
} = actionTypes;

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

export const loadPlanets = () => async (dispatch) => {
  const { data } = await axios(`${PLANETS_URL}`);
  dispatch({
    type: LOAD_PLANETS,
    payload: data.results
  });
};

export const loadStarships = () => async (dispatch) => {
  const { data } = await axios(`${STARSHIPS_URL}`);
  dispatch({
    type: LOAD_STARSHIPS,
    payload: data.results
  });
};
