// createElement('h1', 'title', 'Pokemon Pics', '.div__main');

const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.div__main');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');

const dashboard = createElement('a', 'dashboardBtn', 'Dashboard', '.div__main');
dashboard.setAttribute('href', '../dashboard/dashboard.html');

pokemonList.then((data) => data.results.forEach((element) => {
  const pokemonUrlDetails = fetchPokemon(element.url);

  pokemonUrlDetails.then((data) => {
    createAnchor(`${data.name}`, '../pokemon-list/pokemon-list.html', `${data.name}`, 'main');
    console.log(data);
    createImg('pokemonImg', data.sprites.front_default, `.${data.name}`);
    console.log(`name: ${data.name}`);
  });
}));
