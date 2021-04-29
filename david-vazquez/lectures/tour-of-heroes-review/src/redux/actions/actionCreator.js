import HEROES from '../../constants/heroes.mock';
import actionTypes from './actionTypes';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES,
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((myhero) => myhero.id === +heroId);
  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}

export function createHero(hero) {
  const indexes = HEROES.map((x) => x.id);
  const maxIndex = indexes.indexOf(Math.max(...indexes));
  const updatedHeroes = [...HEROES, { id: maxIndex + 1, name: hero }];
  return {
    type: actionTypes.CREATE_HERO,
    updatedHeroes,
  };
}
