import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://127.0.0.1:2021/heroes/';

export function loadHeroes() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url, {
        method: 'GET',
      });
      dispatch({
        type: actionTypes.LOAD_HEROES,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_HEROES_ERROR,
      });
    }
  };
}

export function addHero(hero) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, hero);
      dispatch({
        type: actionTypes.ADD_HERO,
        hero: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_HERO_ERROR,
      });
    }
  };
}

export function deleteHero(heroId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${url}${heroId}`, {
        heroId,
      });
      dispatch({
        type: actionTypes.DELETE_HERO,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_HERO_ERROR,
      });
    }
  };
}

export function updateHero(hero) {
  return {
    type: actionTypes.UPDATE_HERO,
    hero,
  };
}

export function loadHero(hero) {
  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}

export function getHeroById(heroId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${url}${heroId}`, {
        heroId,
      });
      dispatch({
        type: actionTypes.LOAD_HERO,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_HEROES_ERROR,
      });
    }
  };
}
