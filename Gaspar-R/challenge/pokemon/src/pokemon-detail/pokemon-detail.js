const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.main__div');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');

const dashboardBtn = createElement('a', 'dashboardBtn', 'Dashboard', '.main__div');
dashboardBtn.setAttribute('href', '../dashboard/dashboard.html');

const pokemonName = new URLSearchParams(window.location.search).get('name');
const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon';
const pokemonURL = `${pokemonApiUrl}/${pokemonName}`;

fetchPokemon(pokemonURL).then((pokemon) => {
  createElement('h1', null, `${pokemon.name} detail`, '.main__div');

  const pokeImg = createImg('pokemon__img', pokemon.sprites.front_default, '.main__div');
  const pokeImg2 = createImg('pokemon__img', pokemon.sprites.back_default, '.main__div');
  const pokeImg3 = createImg('pokemon__img', pokemon.sprites.other.dream_world.front_default, '.main__div');

  const pokeList = createElement('ol', 'pokemon__list', 'Poke Info', '.main__div');
  if (pokemon.types[1]) { createElement('li', 'pokemon__list-items', `type: ${pokemon.types[0].type.name} && ${pokemon.types[1].type.name}`, '.pokemon__list'); } else {
    createElement('li', 'pokemon__list-items', `type: ${pokemon.types[0].type.name}`, '.pokemon__list');
  }
  createElement('li', 'pokemon__list-items', `power: ${pokemon.base_experience}`, '.pokemon__list');
  createElement('li', 'pokemon__list-items', `weight: ${pokemon.weight}`, '.pokemon__list');
  createElement('li', 'pokemon__list-items', `best moves: ${pokemon.moves[3].move.name} & ${pokemon.moves[6].move.name}`, '.pokemon__list');
  fetchPokemon(pokemon.species.url).then((info) => {
    fetchPokemon(info.evolution_chain.url).then((evol) => {
      fetchPokemon(evol.chain.evolves_to[0].evolves_to[0].species.url).then((nextPoke) => {
        if (pokemon.name !== nextPoke.name) {
          createElement('li', 'pokemon__list-items', `Evolves to: ${nextPoke.name}`, '.pokemon__list');
        }
      });
    });
  });
});
