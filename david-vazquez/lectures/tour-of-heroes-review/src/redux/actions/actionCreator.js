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
