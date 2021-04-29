import HEROES from '../../constants/heroes.mocks';
import actionsTypes from './actionsTypes';

export function loadHeroes() {
  return {
    type: actionsTypes.LOAD_HEROS,
  };
}

export function createHero(hero) {
  const indexes = HEROES.map((x) => x.id);
  const maxIndex = indexes.indexOf(Math.max(...indexes));
  const updatetedHeroes = [...]
  return {
    type: actionsTypes.CREATE_HERO,
    hero: { id: maxIndex + 1, name: hero },
  };
}

export function getHeroById(heroId) {
  const hero = HEROES.find((current) => current.id === +heroId);
  return {
    type: actionsTypes.LOAD_HERO,
    hero,
  };
}
