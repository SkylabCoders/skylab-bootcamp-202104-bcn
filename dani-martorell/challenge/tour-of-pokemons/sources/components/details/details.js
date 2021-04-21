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
  type: 'a', classes: ['selector-group__link-pokemons'], context: 'Pokemons', url: './../list/list.html',
});
selectorGroup.append(linkPokemons);

const paramId = getHeroe('heroeID', location.search);
const paramName = getHeroe('heroeNAME', location.search);

const pokemonTitle = generateElement({ type: 'h3', classes: ['pokemon-title'], context: paramName });
mainContent.append(heroeTitle);
const pokemonInfo = generateElement({ type: 'div', classes: ['pokemon-data'] });
mainContent.append(heroeInfo);
const pokemonLabel = generateElement({ type: 'label', classes: [], context: 'Name' });
pokemonLabel.setAttribute('for', 'hname');

const pokemonId = generateElement({ type: 'p', classes: ['pokemon-data__id'], context: `ID: ${paramId}` });
const pokemonName = generateElement({ type: 'input', classes: ['pokemon-data__name'] });

pokemonName.setAttribute('type', 'text');
pokemonName.setAttribute('id', 'hname');
pokemonName.setAttribute('name', 'hname');
pokemonName.append(pokemonId);
pokemonName.append(pokemonLabel);
pokemonName.append(pokemonName);

pokemonInfo.append(pokemonLabel);
mainContent.append(pokemonInfo);

const someDetailsUl = generateElement({ type: 'ul', classes: [] });
getAllPokemons('./../../store/superHeroD');

mainContent.append(someDetailsUl);
