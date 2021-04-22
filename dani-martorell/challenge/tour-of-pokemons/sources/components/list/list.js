const mainContent = document.querySelector('.content');

const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Pokemons' });
mainContent.append(headTitle);
const selectorGroup = generateElement({ type: 'div', classes: ['selector-group'] });
mainContent.append(selectorGroup);
const linkDashboard = generateElement({
  type: 'a', classes: ['selector-group__link-dasboard'], context: 'Dashboard', url: './../dashboard/dashboard.html',
});
selectorGroup.append(linkDashboard);
const linkPokemons = generateElement({
  type: 'a', classes: ['selector-group__link-pokemons'], context: 'Heroes', url: 'list.html',
});
selectorGroup.append(linkPokemons);

const mainTitle = generateElement({ type: 'h3', classes: [], context: 'My Pokemons' });
mainContent.append(mainTitle);

const pokemonsList = generateElement({ type: 'ul', classes: ['pokemons-list'] });
mainContent.append(pokemonsList);

const highlitedPokemon = generateElement({ type: 'div', classes: ['higlited-hero'] });
const highlightPokemonName = generateElement({ type: 'p', classes: ['highlighted-hero__name'], context: '' });

const getPokemonsLongList = async (num) => {
  const list = await fetchPokemons(num);
  return list;
};

getPokemonsLongList(20).then((list) => {
  list.results.forEach((poke) => {
    const li = generateElement({ type: 'li', classes: ['pokemons-list__element'] });
    getPokemonId(poke.name).then((id) => {
      const anchor = generateElement({
        type: 'a', classes: [], context: `${poke.name}`, url: `./../details/details.html?ID=${id}&NAME=${poke.name}`,
      });
      li.append(anchor);
      pokemonsList.append(li);
      mainContent.append(pokemonsList);
    });
  });
});
// BUTTONS
const buttonsWrapper = generateElement({ type: 'div', classes: ['buttons-wrapper'] });
const previous = generateElement({
  type: 'a', classes: ['buttons-wrapper__previous'], context: 'Previous', url: '',
});
const next = generateElement({
  type: 'a', classes: ['buttons-wrapper__next'], context: 'Next', url: '',
});
next.addEventListener('click', nextPagination);
buttonsWrapper.append(previous);
buttonsWrapper.append(next);
mainContent.append(buttonsWrapper);

highlitedPokemon.append(highlightPokemonName);

mainContent.append(highlitedPokemon);
