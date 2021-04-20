const mainContent = document.querySelector('.content');

const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Heroes' });
mainContent.append(headTitle);
const selectorGroup = generateElement({ type: 'div', classes: ['selector-group'] });
mainContent.append(selectorGroup);
const linkDashboard = generateElement({
  type: 'a', classes: ['selector-group__link-dasboard'], context: 'Dashboard', url: './../dashboard/dashboard.html',
});
selectorGroup.append(linkDashboard);
const linkHeroes = generateElement({
  type: 'a', classes: ['selector-group__link-heroes'], context: 'Heroes', url: 'list.html',
});
selectorGroup.append(linkHeroes);

const mainTitle = generateElement({ type: 'h3', classes: [], context: 'My Heroes' });
mainContent.append(mainTitle);
const highlitedHero = generateElement({ type: 'div', classes: ['higlited-hero'] });
const highlightHeroName = generateElement({ type: 'p', classes: ['highlighted-hero__name'], context: 'Peter' });
const highlightHeroDetailsButton = generateElement({
  type: 'a',
  context: 'View Details',
  classes: ['highlighted-hero__details-btn', '--inactive'],
  url: './../detalles/index.html',
});

const heroesList = generateElement({ type: 'ul', classes: ['heroes-list'] });
mainContent.append(heroesList);

getAllHeroes('./../../store/superHeroData.json')
  .then((data) => {
    data.slice(0, 20).forEach((heroe) => {
      const li = generateElement({
        type: 'li',
        classes: ['heroes-list__item'],
        context: heroe.name,
      });
      const anchor = generateElement({
        type: 'a',
        classes: [],
        url: [],
      });
      li.append(anchor);
      heroesList.append(li);
    });
  });
