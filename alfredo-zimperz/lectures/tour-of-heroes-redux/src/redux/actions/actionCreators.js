import actionTypes from './actionTypes';
import HEROES from '../../constants/heroes.mock';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES,
  };
}

export function addHero(heroName) {
  const nextId = HEROES.length;
  return {
    type: actionTypes.ADD_HERO,
    hero: { id: nextId, name: heroName },
  };
}

export function deleteHero(heroId) {
  return {
    type: actionTypes.DELETE_HERO,
    heroId,
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
  let hero;
  const targetHero = HEROES.find((current) => current.id === +heroId);
  if (targetHero) { hero = targetHero; } else { (hero = {}); }

  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}
