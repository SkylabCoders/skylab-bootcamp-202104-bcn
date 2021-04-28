import actionTypes from './actionTypes';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES,
  };
}

export function addHero(hero) {
  return {
    type: actionTypes.UPDATE_HERO,
    data: hero,
  };
}

export function deleteHero(heroId) {
  return {
    type: actionTypes.DELETE_HERO,
    data: heroId,
  };
}

export function updateHero(hero) {
  return {
    type: actionTypes.UPDATE_HERO,
    data: hero,
  };
}

export function loadHero(hero) {
  return {
    type: actionTypes.LOAD_HERO,
    data: hero,
  };
}
