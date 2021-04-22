const HEROES_LIST = fetchData('../../store/superHeroData.json');
const APP_ELEMENT = document.querySelector('.app');

createHeader(APP_ELEMENT);
// -- Create Heroe detail section
HEROES_LIST.then((heroes) => {
  const heroIdFromURL = new URLSearchParams(window.location.search).get('heroId');
  const actualHero = heroes.find((hero) => hero.id.toString() === heroIdFromURL);
  const actualHeroPowerKeys = Object.keys(actualHero.powerstats);

  const myHeroSection = createHtmlElement('section', 'my-hero');
  const myHeroH2 = createHtmlElement('h2', null, `${actualHero.name} details`);
  const myHeroImage = createHtmlElement('img', 'my-hero__image');
  myHeroImage.src = actualHero.images.lg;
  const searchInput = createHtmlElement('input', 'search__input');
  const addHeroButton = createHtmlElement('button', null, 'Add hero');
  const myHeroPowerStatsUL = createHtmlElement('ul', 'my-hero__stats-list');
  actualHeroPowerKeys.forEach((key) => {
    const statItem = createHtmlElement('li', 'stats-list__item', `${key}: ${actualHero.powerstats[key]}`);
    myHeroPowerStatsUL.appendChild(statItem);
  });
  myHeroSection.appendChild(myHeroH2);
  myHeroSection.appendChild(myHeroImage);
  myHeroSection.appendChild(myHeroPowerStatsUL);
  myHeroSection.appendChild(searchInput);
  myHeroSection.appendChild(addHeroButton);
  APP_ELEMENT.appendChild(myHeroSection);
});
