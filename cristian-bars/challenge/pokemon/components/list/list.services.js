const min = 0;
const max = 10;

getList = async (min, max) => {
  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${min}&limit=${max}`)
      .then((response) => response.json())
      .then((data) => data.results.forEach((pokemon) => callBack(pokemon)));
  } catch (error) {
    console.error('-', error);
  }
};
getList(min, max);

function callBack(pokemon) {
  const heroName = pokemon.name;
  const liText = document.createTextNode(heroName);
  const actionLiHero = document.createElement('a');
  actionLiHero.href = (`../details/details.html?pokeName=${heroName}`);
  const listLi = document.createElement('li');
  actionLiHero.appendChild(liText);
  listLi.appendChild(actionLiHero);
  contentSectionList.appendChild(listLi);
}

function moreItems(max, min) {
  min = 20;
  max = 20;
  getList(min, max);
}
