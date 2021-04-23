const mainContent = document.querySelector('.content');
const topLogo = generateElement({ type: 'img', classes: ['top-logo'] });
topLogo.setAttribute('src', 'https://www.freeiconspng.com/uploads/pokemon-png-23.png');
mainContent.append(topLogo);

const bottomImg = generateElement({ type: 'img', classes: ['bottom-img'] });
bottomImg.setAttribute('src', 'https://www.freeiconspng.com/uploads/pokemon-png-22.png');
mainContent.append(bottomImg);

const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Pokemons' });
mainContent.append(headTitle);
const selectorGroup = generateElement({ type: 'div', classes: ['selector-group'] });
mainContent.append(selectorGroup);
const linkDashboard = generateElement({
  type: 'a', classes: ['selector-group__link-dasboard'], context: 'Dashboard', url: 'dashboard.html',
});
selectorGroup.append(linkDashboard);
const linkPokemons = generateElement({
  type: 'a', classes: ['selector-group__link-heroes'], context: 'Pokemons', url: './../list/list.html',
});
selectorGroup.append(linkPokemons);
const mainTitle = generateElement({ type: 'h3', classes: [], context: 'Top Pokemons' });
mainContent.append(mainTitle);

const pokemonsList = generateElement({ type: 'ul', classes: ['pokemons-list'] });
mainContent.append(pokemonsList);

const getPokemons = async () => {
  const list = await fetchPokemons();
  const shortList = await list.results;
  const randomList = await shortList.sort(randomNum);
  return randomList.slice(0, 5);
};

getPokemons().then((list) => {
  list.forEach((poke) => {
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
