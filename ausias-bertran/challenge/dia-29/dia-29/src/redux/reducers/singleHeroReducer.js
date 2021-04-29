function getSingleReducer(hero = {}, action) {
  switch (action.type) {
    case action.type.LOAD_HERO:
      return hero;
    case action.type.LOAD_HERO:
      return hero;

    default:
      return hero;
  }
}

export default getSingleReducer;
