let offset = 0;
const limit = 20;
const url = window.location.search;

getList = async (offset, limit) => {
  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => data.results.forEach((pokemon) => callBack(pokemon)));
  } catch (error) {
    console.error('-', error);
  }
};
getList(offset, limit);

function callBack(pokemon) {
  const pokeName = pokemon.name;
  const pokeItem = createElementHtml('a', pokeName, 'id', pokeName, 'pokemon__item--a', `../details/details.html?pokeName=${pokeName}`);
  const listLi = createElementHtml('li', '', 'id', pokeName, 'pokemon__item', link = null);
  listLi.appendChild(pokeItem);
  contentSectionList.appendChild(listLi);
}

function moreItems() {
  const li = document.getElementsByTagName('li');
  const numLi = li.length;
  for (let i = numLi; i > 0; i--) {
    const parent = li[i - 1].parentNode;
    parent.removeChild(li[i - 1]);
  }
  offset += 20;
  getList(offset, limit);
}

function lessItems() {
  const li = document.getElementsByTagName('li');
  const numLi = li.length;
  for (let i = numLi; i > 0; i--) {
    const parent = li[i - 1].parentNode;
    parent.removeChild(li[i - 1]);
  }
  offset -= 20;
  getList(offset, limit);
}
