const heroes = fetchHeroes('../../store/superHeroData.json');

const mainSection = document.querySelector('.container-heroes-details');

const param = new URLSearchParams(location.search);
const paramID = param;
console.log('url', param);
const heroeName = param.get('heroeName');
console.log('heroName', heroeName);

const heroeID = paramID.get('heroeID');

createElement('h1', mainSection, 'Tour of Heroes');
createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
createElement('a', mainSection, 'Heroes', null, './../heroes-details/heroes-details.html');
createElement('h3', mainSection, `${heroeName} details!`);

const getContainerInfo = createElement('div', mainSection, '');

createElement('div', getContainerInfo, `${heroeID}`);
createElement('input', getContainerInfo);
createElement('a', mainSection, 'Back', null, './../dashboard/dashboard.html');

// pendiente cambiar esta funcion para mostrar el detalle de los superheroes //

heroes.then((info) => {
  const getDashboardList = createElement('ul', mainSection, '');
  info.slice(0, 4).forEach((element) => {
    const newElementLi = createElement('li', getDashboardList, '', 'heroe-item');
    const firstHeroesNames = createElement('a', newElementLi, `${element.name}`);
    firstHeroesNames.setAttribute('href', `http://127.0.0.1:49629/Isabel-Gomez/challenge/tour-of-heroes/components/heroes-details/heroes-details.html?heroeName=${element.name}&heroeID=${element.id}`);
  });
});
