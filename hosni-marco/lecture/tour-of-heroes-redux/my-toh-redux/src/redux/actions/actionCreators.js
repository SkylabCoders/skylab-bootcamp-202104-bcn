import actionTypes from './actionTypes';

export function loadHeros() {
  return {
    type: actionTypes.LOAD_HEROE
  };
}

export function addHero(hero) {
  return {
    type: actionTypes.ADD_HERO,
    hero
  };
}

export function delateHero(heroId) {
  return {
    type: actionTypes.DELETE_HEAD,
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
    type: actionTypes.LOAD_HEROE,
    hero
  };
}
