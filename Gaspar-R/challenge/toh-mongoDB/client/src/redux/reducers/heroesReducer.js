import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return action.heroes;

    case actionTypes.DELETE_HERO:
      return heroes;
    // heroes.filter((hero) => hero.id !== action.heroId);
    case actionTypes.ADD_HERO:
      // [
      //   ...heroes,
      //   action.hero      //no hace falta ya que devuelvo direcamente de backend lo que necesito
      // ];
      return action.hero;

    case actionTypes.UPDATE_HERO:
      return heroes.map(
        (hero) => (hero.id === action.hero.id
          ? { ...hero, ...action.hero }
          : hero)
      );

    default:
      return heroes;
  }
}

export default heroesReducer;
