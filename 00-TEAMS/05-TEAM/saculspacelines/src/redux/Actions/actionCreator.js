import axios from 'axios';
import actionTypes from './actionTypes';

export const loadSwapi = () => async (dispatch) => {
  const { data } = await axios('https://swapi.dev/api/');
  dispatch({
    type: actionTypes.LOAD_SWAPI,
    data
  });
};

export const loadPlanets = () => ({
  type: actionTypes.LOAD_PLANETS
});
