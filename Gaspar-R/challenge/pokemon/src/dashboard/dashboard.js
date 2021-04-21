createElement('h1', 'title', 'Pokemon API', '.div__main');

createElement('ol', 'tops_pokemon', 'Top Pokemon', '.div__main');

createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');

createElement('footer', 'links', '', '.div__main');

const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.links');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');

const detailBtn = createElement('a', 'detailBtn', 'Pics of Pokemons', '.links');
detailBtn.setAttribute('href', '../pokemon-detail/pokemon-detail.html');

// pokemonList.then((data) => data.results.forEach((element) => {
//   const pokemonUrlDetails = fetchPokemon(element.url);
//   pokemonUrlDetails.then((data) => createImg('pokemonImg', data.sprites.front_default, 'main'));
// }));

pokemonList.then((data) => {
  for (let i = 149; i > 145; i--) {
    const topPokemon = fetchPokemon(data.results[i].url);
    const topImgPokemon = topPokemon.then((data) => createElement('li', 'top', createImg('pokemonImg', data.sprites.front_default, 'main'), '.tops_pokemon'));
  }
});
