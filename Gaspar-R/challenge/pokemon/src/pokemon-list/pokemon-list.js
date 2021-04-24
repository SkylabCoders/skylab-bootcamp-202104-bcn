createElement('h1', 'title', 'Pokemon List', '.main__div');
createElement('div', 'links', '', '.main__div');

const listPag = { offset: 0, limit: 50 };

const dashboardBtn = createElement('a', 'dashboardBtn', 'Dashboard', '.links');
dashboardBtn.setAttribute('href', '../dashboard/dashboard.html');

const pokeOl = createElement('ul', 'pokemon_list', null, '.main__div');

function getPokemonList(offset, limit) {
  const pagUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  pokeOl.innerHTML = '';

  fetchPokemon(pagUrl).then((data) => {
    data.results.forEach((element) => {
      fetchPokemon(element.url).then((pokemon) => {
        const pokeLi = createElement('li', 'pokemon_list-item', null, '.pokemon_list');

        const pokeImg = createImg('pokemon__list-img', pokemon.sprites.front_default, '.pokemon_list');

        const pokeA = createElement('a', 'pokemon_list-item-link', `.${pokemon.name}`);
        pokeA.href = `./../pokemon-detail/pokemon-detail.html?name=${pokemon.name}`;
        pokeLi.appendChild(pokeA);
        pokeOl.appendChild(pokeLi);
        pokeA.appendChild(pokeImg);
      });
    });
  });
}

getPokemonList(listPag.offset, listPag.limit);

createElement('footer', 'footer', null, '.main__div');
createElement('button', 'footer_button--back', 'back', '.footer');

const backButton = getElementByClassName('footer_button--back');
backButton.onclick = () => {
  if (listPag.offset > 50) {
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
