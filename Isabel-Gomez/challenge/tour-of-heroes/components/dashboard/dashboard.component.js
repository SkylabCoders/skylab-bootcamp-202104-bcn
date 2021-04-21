const heroes = fetchHeroes('../../store/superHeroData.json');

const mainSection = document.querySelector('.container-dashboard');

createElement('h1', mainSection, 'Tour of Heroes');
createElement('a', mainSection, 'Dashboard');
createElement('a', mainSection, 'Heroes', null, './../heroes/heroes.html');
createElement('h3', mainSection, 'Top Heroes');

heroes.then((info) => {
  info.splice(0, 4).forEach((element) => {
    const firstHeroesNames = createElement('a', mainSection, `${element.name}`);
    firstHeroesNames.setAttribute('href', `http://127.0.0.1:49321/Isabel-Gomez/challenge/tour-of-heroes/components/heroes-details/heroes-details.html?heroeName=${element.name}&heroeID=${element.id}`);
  });
});
