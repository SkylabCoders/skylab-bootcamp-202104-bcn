function heroesReducer(hero = {}, action) {
  switch (action.type) {
    case 'LOAD_HERO':
      return action.hero;

    default:
      return hero;
  }
}

export default heroesReducer;
