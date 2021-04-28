import actionTypes from './actionTypes';
import HEROES from '../../constants/heroes.mock';

function loadHeroes() {
  return {
    type: actionTypes.LOAD_HEROES,
  };
}

function addHero(hero) {
  return {
    type: actionTypes.ADD_HERO,
    hero,
  };
}

function deleteHero(heroId) {
  return {
    type: actionTypes.DELETE_HERO,
    heroId,
  };
}

function updateHero(hero) {
  return {
    type: actionTypes.UPDATE_HERO,
    hero,
  };
}

function loadHero(hero) {
  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}

function getHeroById(heroId) {
  // eslint-disable-next-line no-debugger
  debugger;
  const hero = HEROES.find((selectedHero) => selectedHero.id === +heroId);
  return {
    type: actionTypes.LOAD_HERO,
    hero,
  };
}

export {
  loadHeroes,
  deleteHero,
  updateHero,
  addHero,
  loadHero,
  getHeroById,
};
