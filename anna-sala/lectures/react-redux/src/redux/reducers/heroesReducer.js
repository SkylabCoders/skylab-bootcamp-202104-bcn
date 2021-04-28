// import heroes from '../../assets/heroes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case 'LOAD_HEROES':
      return heroes;
    case 'DELETE_HERO':
      return heroes.filter((hero) => hero.id !== action.heroId);
    case 'ADD_HERO':
      return [
        ...heroes,
        action.hero,
      ];
    case 'UPDATE_HERO':
      return heroes.map((hero) => (hero.id === action.hero.id
        ? { ...hero, ...action.hero }
        : hero));
    default:
      return heroes;
  }
}

export default heroesReducer;
