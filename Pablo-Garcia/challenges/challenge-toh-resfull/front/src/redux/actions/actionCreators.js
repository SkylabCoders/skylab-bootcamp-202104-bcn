import { getHeroes, getById } from '../../services/hero';

import actionTypes from './actionTypes';

export function loadHeroes() {
  return async (dispatch) => {
    try {
      const { data } = await getHeroes();
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
  return {
    type: actionTypes.DELETE_HERO,
    heroId
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

export async function getHeroById(heroId) {
  const { data: hero } = await getById(heroId);

  return {
    type: actionTypes.LOAD_HERO,
    hero
  };
}

export function login(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
