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

getAllHeroes('./../../store/superHeroData.json')
  .then((data) => {
    data.slice(0, 20).forEach((heroe) => {
      const li = generateElement({
        type: 'li',
        classes: ['pokemons-list__item'],
      });
      const anchor = generateElement({
        type: 'a',
        classes: [],
        context: heroe.name,
        url: [`./../details/details.html?heroeID=${heroe.id}&heroeNAME=${heroe.name}`],

      });
      li.append(anchor);
      pokemonsList.append(li);
    });
  });
const highlitedPokemon = generateElement({ type: 'div', classes: ['higlited-hero'] });
const highlightPokemonName = generateElement({ type: 'p', classes: ['highlighted-hero__name'], context: '' });
const highlightPokemonDetailsButton = generateElement({
  type: 'a',
  context: 'View Details',
  classes: ['highlighted-pokemon__details-btn', '--inactive'],
  url: './../details/details.html',
});

highlitedPokemon.append(highlightPokemonName);
highlitedPokemon.append(highlightPokemonDetailsButton);
mainContent.append(highlitedPokemon);
