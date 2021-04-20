const heroes = fetchHeroes('../../store/superHeroData.json');

const mainSection = document.querySelector('.container-heroes-details');

createElement('h1', mainSection, 'Tour of Heroes');
createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
createElement('a', mainSection, 'Heroes', null, './../heroes-details/heroes-details.html');
createElement('h3', mainSection, 'Details');

const getContainerInfo = createElement('div', mainSection, '');

createElement('div', getContainerInfo, 'ID:');
createElement('input', getContainerInfo);
createElement('a', mainSection, 'Back', null, './../dashboard/dashboard.html');
