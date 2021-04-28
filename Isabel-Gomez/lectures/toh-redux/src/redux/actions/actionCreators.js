import actionTypes from './actionTypes';

export const loadHeroes = () => (
  {
    type: actionTypes.LOAD_HEROES,
  }
);

export const addHeroe = (hero) => (
  {
    type: actionTypes.ADD_HERO,
    hero,
  }
);

export const deleteHeroe = (heroId) => (
  {
    type: actionTypes.DELETE_HEROE,
    heroId,
  }
);

export const updateHeroe = (hero) => (
  {
    type: actionTypes.UPDATE_HERO,
    hero,
  }
);

export const loadHeroe = (hero) => (
  {
    type: actionTypes.LOAD_HERO,
    hero,
  }
);
