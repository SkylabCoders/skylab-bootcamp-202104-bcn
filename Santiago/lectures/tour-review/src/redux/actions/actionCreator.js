import HEROES from '../../constants/heroes-mock';
import actionTypes from './actionTypes';

// SE LAS PASAMOS AL REDUCER Y ALLI SE HACE EL SWITCH, EL REDUCER SE COMUNICA COM EL STORE
export function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES
  };
}

export function getHeroById({ heroId }) {
  const hero = HEROES.find((current) => current.id === +heroId);
  return {
    type: actionTypes.LOAD_HERO,
    hero
  };
}
