const bodyTag = document.getElementById('body-id');
generateTopMenu();

/// //

const topHeroesDiv = createElement('div', 'topHeroesDiv');
bodyTag.appendChild(topHeroesDiv);

topHeroesDiv.appendChild(createElement('h2', 'h2DashboardTitle', 'Top Heroes'));

const topHeroesUL = createElement('ul', 'topHeroesUL');
topHeroesDiv.appendChild(topHeroesUL);

const fourSuperHeroes = firstFourSuperHeroes('../../assets/superHeroData.json');

fourSuperHeroes.then((element) => {
  element.forEach((superHeroe) => {
    const currentLI = createElement('li', 'heroesLI');
    topHeroesUL.appendChild(currentLI);
    const newElement = createElement('a', 'heroA', superHeroe.name);
    currentLI.appendChild(newElement);
    newElement.setAttribute('href', `./../../details/index/details.html?SuperHeroID=${superHeroe.id}`);
  });
});
// const topHeroes = heroes.slice(0, 4);
// topHeroes.forEach((element) => {
//   const currentLI = createElement('li', 'heroesLI');
//   topHeroesUL.appendChild(currentLI);
//   const newElement = createElement('a', 'heroA', element.name);
//   currentLI.appendChild(newElement);
//   newElement.setAttribute('href', `./../../details/index/details.html?${element.id}`);
// });
