import HEROES from '../../constants/heroes.mocks';
import actionsTypes from './actionsTypes';

export function loadHeroes() {
  return {
    type: actionsTypes.LOAD_HEROS,
  };
}

export function getHeroById(heroId) {
    const hero = HEROES.find(current) => current.id === +heroId);
    return {
        type: actionsTypes.LOAD_HERO
    }
}