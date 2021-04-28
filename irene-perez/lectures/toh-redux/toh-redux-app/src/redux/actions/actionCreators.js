import HEROES from '../../constans/heroes';
import actionType from './actionTypes';

export function loadHeroes() {
  return {
    type: actionType.LOAD_HEROES
  };
}

export function addHero(hero) {
  return {
    type: actionType.ADD_HERO,
    hero
  };
}

export function deleteHero(heroId) {
  return {
    type: actionType.DELETE_HERO,
    heroId
  };
}

export function updateHero(hero) {
  return {
    type: actionType.UPDATE_HERO,
    hero
  };
}

export function loadHeroe(hero) {
  return {
    type: actionType.LOAD_HERO,
    hero
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((current) => current.id === +heroId);

  return {
    type: actionType.LOAD_HERO,
    hero
  };
}
