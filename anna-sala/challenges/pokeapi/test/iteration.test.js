function iterationList(obj) {
  obj.results.forEach((element) => {
    printOnListPage('a', element.name, 'pokemons__list--item', `./../detail/detail.html?pokemonName=${element.name}`);
  });
}
