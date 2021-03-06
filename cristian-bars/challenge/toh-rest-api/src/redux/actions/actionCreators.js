// import HEROES from '../../componentes/Constants/Heroes.mock';
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/heroes';

export function loadHeroes() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_HEROES,
        heroes: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_HEROES_ERROR'
      });
    }
  };
}

export function addHero(hero) {
  return {
    type: actionTypes.ADD_HERO,
    hero
  };
}

export function deleteHero(heroId) {
  return async (dispatch) => {
    await axios.delete(`${url}/${heroId.id}`);
    dispatch({
      type: actionTypes.DELETE_HERO,
      heroId
    });
  };
}

export function updateHero(hero) {
  return {
    type: actionTypes.UPDATE_HERO,
    hero
  };
}

export function loadHero(hero) {
  return {
    type: actionTypes.LOAD_HERO,
    hero
  };
}

export function getHeroById(heroId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${heroId}`);
    dispatch({
      type: actionTypes.LOAD_HERO,
      hero: data
    });
  };
}
