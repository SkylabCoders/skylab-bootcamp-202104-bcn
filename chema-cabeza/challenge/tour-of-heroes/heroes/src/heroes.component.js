let currentHeroID = '';

const bodyTag = document.getElementById('body-id');
generateTopMenu();

const heroesListDiv = createElement('div', 'heroesListDiv');
bodyTag.appendChild(heroesListDiv);

heroesListDiv.appendChild(createElement('h2', 'h2DashboardTitle', 'My Heroes'));
const heroesListUL = createElement('ul', 'heroesListUL');
heroesListDiv.appendChild(heroesListUL);

const heroesSelection = firstTenSuperHeroes('../../assets/superHeroData.json');

heroesSelection.then((element) => {
  element.forEach((superHeroes) => {
    const currentLI = createElement('li', 'heroesListLI');
    heroesListUL.appendChild(currentLI);
    const newSuperHeroID = createElement('span', 'heroID', superHeroes.id);
    currentLI.appendChild(newSuperHeroID);
    const newSuperHeroName = createElement('a', 'heroName', superHeroes.name);
    currentLI.appendChild(newSuperHeroName);
    newSuperHeroName.onclick = function () {
      currentHeroID = superHeroes.id;
      document.getElementsByClassName('heroesBottomButton')[0].setAttribute('href', `./../../details/index/details.html?SuperHeroID=${currentHeroID}`);
      document.getElementsByClassName('h2BottomTitle')[0].innerText = `${superHeroes.name} is my Heroe`;
    };
  });
});

const heroesBottomDiv = createElement('div', 'heroesBottomDiv');
bodyTag.appendChild(heroesBottomDiv);

heroesBottomDiv.appendChild(createElement('h2', 'h2BottomTitle'));

const heroesBottomButton = createElement('a', 'heroesBottomButton', 'View Details');
heroesBottomDiv.appendChild(heroesBottomButton);
heroesBottomButton.setAttribute('href', './../../details/index/details.html');
