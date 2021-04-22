const mainContent = document.querySelector('.content');
const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Heroes' });
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

const getPokemons = async() => {
  const response = await fetchPokemons(5);
  const list = await response.json();
  console.log(list);


}

getPokemons();
  // await getPokemons().results.sort(randomNum.slice(0,5));
  //   randomList.forEach((poke) => {
  //     getPokemonId(poke.name).then((id) => {
  //       const li = generateElement({ type: 'li', classes: ['pokemons-list__element'] });
  //       const anchor = generateElement({
  //         type: 'a', classes: [], context: `${poke.name}`, url: `./../details/details.html?ID=${id}&NAME=${poke.name}`,
  //       });
  //       li.append(anchor);
  //       mainContent.append(li);
  //     });
  //   });
  // });
