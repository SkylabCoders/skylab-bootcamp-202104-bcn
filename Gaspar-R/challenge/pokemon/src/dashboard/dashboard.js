createElement('h1', 'title', 'Pokemon API', '.main__div');
createElement('ol', 'tops_pokemon', 'Top Pokemon', '.main__div');

createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');

createElement('footer', 'links', '', '.main__div');

const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.links');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');

pokemonList.then((data) => {
  for (let i = 0; i > 4; i--) {
    const topPokemon = fetchPokemon(data.results[i].url);
    const topImgPokemon = topPokemon.then((data) => createElement('li', 'top', createImg('pokemonImg', data.sprites.front_default, '.main__div'), '.tops_pokemon'));
  }
});
