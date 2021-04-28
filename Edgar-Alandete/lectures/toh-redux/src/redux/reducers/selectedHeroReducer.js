function heroesReducer(hero = {}, action) {
  switch (action.type) {
    case 'LOAD_HEROES':
    case 'UPDATE_HERO':
      return action.hero;
    default:
      return hero;
  }
}

export default heroesReducer;
