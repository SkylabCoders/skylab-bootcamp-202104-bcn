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
  type: 'a', classes: ['selector-group__link-heroes'], context: 'Heroes', url: './../list/list.html',
});
selectorGroup.append(linkHeroes);
const heroeTitle = generateElement({ type: 'h3', classes: ['heroe-title'], context: 'Magneta details!' });
mainContent.append(heroeTitle);
const heroeInfo = generateElement({ type: 'div', classes: ['heroe-data'] });
mainContent.append(heroeInfo);
const heroeLabel = generateElement({ type: 'label', classes: [], context: 'Name' });
heroeLabel.setAttribute('for', 'hname');
const heroeId = generateElement({ type: 'p', classes: ['heroe-data__id'], context: 12 });
const heroeName = generateElement({ type: 'input', classes: ['heroe-data__name'] });

heroeName.setAttribute('type', 'text');
heroeName.setAttribute('id', 'hname');
heroeName.setAttribute('name', 'hname');
heroeInfo.append(heroeId);
heroeInfo.append(heroeLabel);
heroeInfo.append(heroeName);

heroeInfo.append(heroeLabel);
mainContent.append(heroeInfo);
