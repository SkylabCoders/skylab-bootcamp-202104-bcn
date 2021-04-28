function selectedHeroReducer(hero = {}, action) {
  switch (action.type) {
    case 'LOAD_HEROES':
      return action.hero;
    default:
      return hero;
  }
}

export default selectedHeroReducer;
