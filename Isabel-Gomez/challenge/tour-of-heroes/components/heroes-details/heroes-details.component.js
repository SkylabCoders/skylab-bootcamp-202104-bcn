const heroes = fetchHeroes('../../store/superHeroData.json');

const mainSection = document.querySelector('.container-heroes-details');

const param = new URLSearchParams(location.search);
const paramID = new URLSearchParams(location.search);
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
