import actionTypes from './actionTypes';
import HEROES from '../../constants/heroes.mock';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES
  };
}

export function createHero(hero) {
  const index = HEROES.map((x) => x.id);
  const maxIndex = index.indexOf(Math.max(index));
  return {
    type: actionTypes.createHero,
    hero: { id: maxIndex + 1, name: hero }
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((current) => current.id === +heroId);
  return {
    type: actionTypes.LOAD_HERO,
    hero
  };
}
