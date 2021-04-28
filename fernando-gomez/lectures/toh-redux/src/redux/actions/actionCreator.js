import HEROES from '../../Constants/heroes.mock';
import actionTypes from './actionTypes';

export const loadHeroes = () => ({
  type: actionTypes.LOAD_HEROES,
});

export const addHero = (hero) => ({
  type: actionTypes.ADD_HERO,
  hero,
});

export const deleteHero = (heroId) => ({
  type: actionTypes.DELETE_HERO,
  heroId,
});

export const getHeroById = (heroId) => {
  let hero;
  const targetHero = HEROES.find((current) => current.id === +heroId);

  if (targetHero) {
    hero = targetHero;
  } else {
    hero = {};
  }

  return ({
    type: actionTypes.LOAD_HERO,
    hero,
  });
};

export const updateHero = (hero) => ({
  type: actionTypes.UPDATE_HERO,
  hero,
});

export const loadHero = (hero) => ({
  type: actionTypes.LOAD_HERO,
  hero,
});
