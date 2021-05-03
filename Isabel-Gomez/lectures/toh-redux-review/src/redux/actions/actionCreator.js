import HEROES from '../../constants/heroes.mock';
import actionTypes from './actionTypes';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES,
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((current) => current.id === +heroId);
  return {
    type: actionTypes.LOAD_HEROES,
    hero,
  };
}

export function createHero(hero) {
  const indexes = HEROES.map((x) => (x.id));
  const maxIndex = indexes.indexOf(Math.max(...indexes));
  const upDateHeroes = [...HEROES, { id: maxIndex + 1, hero }];
  return {
    type: actionTypes.CREATE_HERO,
    heroes: upDateHeroes,
  };
}
