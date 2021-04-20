const mainContent = document.querySelector('.content');
const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Heroes' });
mainContent.append(headTitle);
const selectorGroup = generateElement({ type: 'div', classes: ['selector-group'] });
mainContent.append(selectorGroup);
const linkDashboard = generateElement({
  type: 'a', classes: ['selector-group__link-dasboard'], context: 'Dashboard', url: 'dashboard.html',
});
selectorGroup.append(linkDashboard);
const linkHeroes = generateElement({
  type: 'a', classes: ['selector-group__link-heroes'], context: 'Heroes', url: './../list/list.html',
});
selectorGroup.append(linkHeroes);
const mainTitle = generateElement({ type: 'h3', classes: [], context: 'Top Heroes' });
mainContent.append(mainTitle);

const heroesList = generateElement({ type: 'ul', classes: ['heroes-list'] });
mainContent.append(heroesList);

getAllHeroes('./../../store/superHeroData.json')
  .then((data) => {
    data.slice(0, 3).forEach((heroe) => {
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
