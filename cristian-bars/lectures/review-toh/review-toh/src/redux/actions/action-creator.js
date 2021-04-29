import HEROES from '../../constants/heroes.mock';
import actionTypes from './action-Types';

export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((current) => current.id === +heroId);
  return {
    type: actionTypes.LOAD_HERO,
    hero
  };
}
