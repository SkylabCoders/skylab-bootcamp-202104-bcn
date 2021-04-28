import actionTypes from './actionTypes';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES
  };
}

export function addHeroe(hero) {
  return {
    type: actionTypes.ADD_HEROES,
    hero
  };
}

export function deleteHero(heroId) {
  return {
    type: actionTypes.DELETE_HEROES,
    heroId
  };
}

export function updateHero(hero) {
  return {
    type: actionTypes.UPDATE_HEROES,
    hero
  };
}

export function loadHero(hero) {
  return {
    type: actionTypes.LOAD_HEROES,
    hero
  };
}
