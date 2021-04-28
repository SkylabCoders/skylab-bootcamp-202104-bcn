import HEROES from '../../constants/heroes.mock';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case 'LOAD_HEROES':
      return HEROES;
    case 'DELETE_HERO':
      return heroes.filter((hero) => hero.id !== action.action.heroId);
    case 'ADD_HERO':
      return [
        ...heroes,
        action.hero,
      ];
    case 'UPDATE_HERO':
      return heroes.map((hero) => (hero.id === action.hero.id
        ? { ...hero, ...action.hero } : hero));
    default:
      return heroes;
  }
}

export default heroesReducer;
