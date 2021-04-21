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

const paramId = getHeroe('heroeID');
const paramName = getHeroe('heroeNAME');

const heroeTitle = generateElement({ type: 'h3', classes: ['heroe-title'], context: paramName });
mainContent.append(heroeTitle);
const heroeInfo = generateElement({ type: 'div', classes: ['heroe-data'] });
mainContent.append(heroeInfo);
const heroeLabel = generateElement({ type: 'label', classes: [], context: 'Name' });
heroeLabel.setAttribute('for', 'hname');

const heroeId = generateElement({ type: 'p', classes: ['heroe-data__id'], context: `ID: ${paramId}` });
const heroeName = generateElement({ type: 'input', classes: ['heroe-data__name'] });

heroeName.setAttribute('type', 'text');
heroeName.setAttribute('id', 'hname');
heroeName.setAttribute('name', 'hname');
heroeInfo.append(heroeId);
heroeInfo.append(heroeLabel);
heroeInfo.append(heroeName);

heroeInfo.append(heroeLabel);
mainContent.append(heroeInfo);

const someDetailsUl = generateElement({ type: 'ul', classes: [] });
getAllHeroes('./../../store/superHeroData.json').then((heroe) => {
  const { powerstats } = heroe.find((el) => el.id.toString() === paramId.toString());
  for (const power in powerstats) {
    const li = generateElement({ type: 'li', classes: [], context: `${power} : ${powerstats[power]}` });
    someDetailsUl.append(li);
  }
});

mainContent.append(someDetailsUl);
