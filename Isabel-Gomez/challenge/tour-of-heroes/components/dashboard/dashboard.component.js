const heroes = fetchHeroes('../../store/superHeroData.json');

const mainSection = document.querySelector('.container-dashboard');

createElement('h1', 'Tour of Heroes', mainSection);
createElement('a', 'Dashboard', mainSection);
createElement('a', 'Heroes', mainSection, './../heroes/heroes.html');
createElement('h3', 'Top Heroes', mainSection);

heroes.then((info) => {
  info.splice(1, 4).forEach((element) => {
    createElement('a', `${element.name}`, mainSection, '../../heroes-details/heroes-details.html');
  });
});
