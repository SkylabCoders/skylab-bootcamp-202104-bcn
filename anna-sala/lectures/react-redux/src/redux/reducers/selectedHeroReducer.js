function heroReducer(hero = [], action) {
  switch (action.type) {
    case 'LOAD_HEROES':
      return action.hero;
    default:
      return hero;
  }
}

export default heroReducer;
