// createElement('h1', 'title', 'Pokemon Pics', '.div__main');

// function createElement(tag, className = null, text = null, parent) {
// const mainDiv = document.querySelector('.main__div');

const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.main__div');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');

const dashboard = createElement('a', 'dashboardBtn', 'Dashboard', '.main__div');
dashboard.setAttribute('href', '../dashboard/dashboard.html');

// pokemonList.then((data) => data.results.forEach((element) => {
//   const pokemonUrlDetails = fetchPokemon(element.url);

//   pokemonUrlDetails.then((data) => {
//     createAnchor(`${data.name}`, '../pokemon-list/pokemon-list.html', `${data.name}`, 'main');
//     console.log(data);
//     createImg('pokemonImg', data.sprites.other.dream_world.front_default, `.${data.name}`);
//     console.log(`name: ${data.name}`);
//   });
// }));

const pokemonName = new URLSearchParams(window.location.search).get('name');

const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon';

const pokemonURL = `${pokemonApiUrl}/${pokemonName}`;

fetchPokemon(pokemonURL).then((pokemon) => {
  createElement('h1', null, `${pokemon.name} detail`, '.main__div');

  const pokeImg = createElement('img', 'pokemon__img', null);
  pokeImg.src = pokemon.sprites.front_default;
  const newParent = document.querySelector('.main__div');
  newParent.appendChild(pokeImg);
  const pokeImg2 = createElement('img', 'pokemon__img', null);
  pokeImg2.src = pokemon.sprites.back_default;
  newParent.appendChild(pokeImg2);
  const pokeImg3 = createElement('img', 'pokemon__img', null);
  pokeImg3.src = pokemon.sprites.other.dream_world.front_default;
  newParent.appendChild(pokeImg3);

  // console.log(pokemon.types[0].type.name);
  const pokeList = createElement('ol', 'pokemon__list', 'Poke Info', '.main__div');
  if (pokemon.types[1]) { createElement('li', 'pokemon__list-items', `type: ${pokemon.types[0].type.name} && ${pokemon.types[1].type.name}`, '.pokemon__list'); } else {
    createElement('li', 'pokemon__list-items', `type: ${pokemon.types[0].type.name}`, '.pokemon__list');
  }
  createElement('li', 'pokemon__list-items', `power: ${pokemon.base_experience}`, '.pokemon__list');
  createElement('li', 'pokemon__list-items', `weight: ${pokemon.weight}`, '.pokemon__list');
  createElement('li', 'pokemon__list-items', `best moves: ${pokemon.moves[3].move.name} & ${pokemon.moves[6].move.name}`, '.pokemon__list');
  fetchPokemon(pokemon.species.url).then((info) => {
    console.log(info);
    fetchPokemon(info.evolution_chain.url).then((evol) => {
      fetchPokemon(evol.chain.evolves_to[0].evolves_to[0].species.url).then((nextPoke) => {
        console.log(nextPoke.name);

        // const pokeImg4 = createElement('img', 'pokemon__img', '.pokemon__list');
        // pokeImg4.src = evoPoke.sprites.front_default;
        // console.log(evoPoke);
      });
    });
  });
  // document.querySelector('.pokemon__list').appendChild(pokeImg4)
});

// function createElement(tag, className = null, text = null, parent = null) {
// function createList(text, className = null, parent = null)
