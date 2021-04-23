createElement('h1', 'title', 'Pokemon List', '.main__div');
createElement('div', 'links', '', '.main__div');

const listPag = { offset: 0, limit: 50 };

const dashboard = createElement('a', 'dashboardBtn', 'Dashboard', '.links');
dashboard.setAttribute('href', '../dashboard/dashboard.html');
const detailBtn = createElement('a', 'detailBtn', 'Details', '.links');
detailBtn.setAttribute('href', '../pokemon-detail/pokemon-detail.html');

// pokemonList.then((data) => data.results.forEach((element) => { console.log(element.name); }));

// pokemonList.then((data) => data.results.forEach((element) => {
//   createList(element.name, 'lista', '.main__div');
// }));

// pokemonList.then((data) => data.results.forEach((element) => {
//   const pokemonUrlDetails = fetchPokemon(element.url);

//   pokemonUrlDetails.then((data) => {
//     createAnchor(`${data.name}`, '../pokemon-list/pokemon-list.html', `${data.name}`, '.lista');
//     console.log(data);
//     createImg('pokemonImg', data.sprites.other.dream_world.front_default, `.${data.name}`);
//     console.log(`name: ${data.name}`);
//   });
// }));

const pokemonListUl = createElement('ol', 'pokemon_list', null, '.main__div');

// function createElement(tag, className = null, text = null, parent = null) {
const pokeOl = createElement('ul', 'pokemon_list', null, '.main__div');

function getPokemonList(offset, limit) {
  const pagUrl = `https://pokeapi.co/api/v2/pokemon?limit=${listPag.limit}&offset=${listPag.offset}`;

  pokemonListUl.innerHTML = '';

  fetchPokemon(urlList).then((data) => {
    data.results.forEach((element) => {
      fetchPokemon(element.url).then((pokemon) => {
        const pokeLi = createElement('li', 'pokemon_list-item', null, '.pokemon_list');

        const pokeImg = createImg('pokemon__list-img', pokemon.sprites.front_default, '.pokemon_list');

        const pokeA = createElement('a', 'pokemon_list-item-link', `.${pokemon.name}`);
        pokeA.href = `./../pokemon-detail/pokemon-detail.html?name=${pokemon.name}`;
        // ../pokemon-detail/pokemon-detail.html
        pokeLi.appendChild(pokeA);
        pokeOl.appendChild(pokeLi);
        pokeA.appendChild(pokeImg);
      });
    });
  });
}

getPokemonList(listPag.offset, listPag.limit);

// const getElementByClassName = (className) => document.querySelector(`.${className}`);

createElement('footer', 'footer', null, '.main__div');
createElement('button', 'footer_button--back', 'back', '.footer');

const backButton = getElementByClassName('footer_button--back');
backButton.onclick = () => {
  if (listPag.offset >= 50) {
    listPag.offset -= 50;
    getPokemonList(listPag.offset, listPag.limit);
  }
};
createElement('button', 'footer_button--next', 'next', '.footer');
const nextButton = getElementByClassName('footer_button--next');
nextButton.onclick = () => {
  listPag.offset += 50;
  getPokemonList(listPag.offset, listPag.limit);
};
