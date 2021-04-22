const mainContent = document.querySelector('.content');
const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Pokemons' });
mainContent.append(headTitle);
const selectorGroup = generateElement({ type: 'div', classes: ['selector-group'] });
mainContent.append(selectorGroup);
const linkDashboard = generateElement({
  type: 'a', classes: ['selector-group__link-dashboard'], context: 'Dashboard', url: './../dashboard/dashboard.html',
});
selectorGroup.append(linkDashboard);
const linkPokemons = generateElement({
  type: 'a', classes: ['selector-group__link-pokemons'], context: 'Pokemons', url: './../list/list.html',
});
selectorGroup.append(linkPokemons);

const pokemonTitle = generateElement({ type: 'h3', classes: ['pokemon-title'], context: paramName.toUpperCase() });
mainContent.append(pokemonTitle);

const pokemonId = generateElement({ type: 'p', classes: ['pokemon-data__id'], context: `ID: ${paramId}` });
mainContent.append(pokemonId);

const detailsWrapper = generateElement({ type: 'div', classes: ['details-wrapper'] });
mainContent.append(detailsWrapper);

getPokemonDetails(paramName)
  .then(({abilities, sprites, height, weight, base_experience}) => {
    const pokemonImage = generateElement({ type: 'img', classes: ['details__image'] });
    pokemonImage.setAttribute('src', `${sprites.front_default}`);
    detailsWrapper.append(pokemonImage);
    const ul = generateElement({ type: 'ul', classes: [] });
    detailsWrapper.append(ul);
    const l3 = generateElement({type: 'li', classes: [], context: 'Height: ' + height});
    ul.append(l3);
    const l4 = generateElement({type: 'li', classes: [], context: 'Weight: ' + weight});
    ul.append(l4);
    const l5 = generateElement({type: 'li', classes: [], context: 'Base Experience: ' + base_experience});
    ul.append(l5);
  });

