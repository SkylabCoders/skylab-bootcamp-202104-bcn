const main = document.querySelector('.details');

function createDashboard() {
  const header = createElementHtml('header', null, null, main);
  const logoPoke = createElementHtml('img', null, null, header);
  logoPoke.setAttribute('src', './../../img/pokeballs.png');
  const prevButton = createElementHtml('button', 'Main Menu', null, header);
  createElementHtml('h2', 'Pokemon details:', null, header);
  const ul = createElementHtml('ul', null, null, header);
  createPokeList(ul);
}
createDashboard();
