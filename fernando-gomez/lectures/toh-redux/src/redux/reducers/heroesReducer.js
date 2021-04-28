import HEROES from '../../Constants/heroes.mock';

const heroesReducer = (heroes = {}, action) => {
  let heroesUpdated;

  switch (action) {
    case 'LOAD_HEROES':
      heroesUpdated = HEROES;
      break;
    case 'DELETE_HEROES':
      heroesUpdated = heroes.filter((hero) => hero.id !== action.heroId);
      break;
    case 'ADD_HERO':
      heroesUpdated = [
        ...heroes,
        action.hero,
      ];
      break;
    case 'EDIT_HERO':
      heroesUpdated = heroes.map((hero) => (hero.id === action.hero.id
        ? { ...hero, ...action.hero }
        : hero));
      break;

    default:
      heroesUpdated = heroes;
      break;
  }
  return heroesUpdated;
};

export default heroesReducer;
