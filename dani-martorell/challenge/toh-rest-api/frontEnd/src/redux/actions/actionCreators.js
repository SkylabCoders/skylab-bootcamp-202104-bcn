import axios from 'axios';

import HEROES from '../../constants/heroes.mock';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/heroes';

export function loadHeroes() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: actionTypes.LOAD_HEROES,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_HEROES_ERROR',
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
        type: 'ADD_HEROES_ERROR',
      });
    }
  };
}

export function deleteHero(heroId) {
  return async(dispatch) => {
    try {
      const { data } = await axios.delete(`${url}/${heroId}`);
      dispatch({
        type: actionTypes.DELETE_HERO,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_HERO_ERROR',
      });
    }
  } 
}

export function updateHero(hero) {
  return async(dispatch) => {
    try {
      const { data } = await axios.delete(`${url}/${hero.id}`);
      dispatch({
        type: actionTypes.UPDATE_HERO,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_HERO_ERROR',
      });
    }
  }
}

export function loadHero(hero) {
  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((current) => current.id === +heroId);
  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}
