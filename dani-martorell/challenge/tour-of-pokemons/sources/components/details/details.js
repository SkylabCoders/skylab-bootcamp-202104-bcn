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
const pokemonInfo = generateElement({ type: 'div', classes: ['pokemon-data'] });
mainContent.append(pokemonInfo);

const pokemonId = generateElement({ type: 'p', classes: ['pokemon-data__id'], context: `ID: ${paramId}` });
const pokemonName = generateElement({ type: 'input', classes: ['pokemon-data__name'] });

const someDetailsUl = generateElement({ type: 'ul', classes: [] });

mainContent.append(someDetailsUl);
