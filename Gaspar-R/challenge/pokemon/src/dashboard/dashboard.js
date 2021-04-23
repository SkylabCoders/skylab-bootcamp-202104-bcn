// const mainDiv = document.querySelector('.main__div');

createElement('h1', 'title', 'Pokemon API', '.main__div');
createElement('ol', 'tops_pokemon', 'Top Pokemon', '.main__div');

createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');

createElement('footer', 'links', '', '.main__div');

const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.links');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');

const detailBtn = createElement('a', 'detailBtn', 'Pics of Pokemons', '.links');
detailBtn.setAttribute('href', '../pokemon-detail/pokemon-detail.html');

// pokemonList.then((data) => data.results.forEach((element) => {
//   const pokemonUrlDetails = fetchPokemon(element.url);
//   pokemonUrlDetails.then((data) => createImg('pokemonImg', data.sprites.front_default, 'main'));
// }));

pokemonList.then((data) => {
  for (let i = 0; i > 4; i--) {
    const topPokemon = fetchPokemon(data.results[i].url);
    const topImgPokemon = topPokemon.then((data) => createElement('li', 'top', createImg('pokemonImg', data.sprites.front_default, '.main__div'), '.tops_pokemon'));
  }
});
