const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

const generateMainTitle = () => {
  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = 'Tour of Heroes';
  document.body.appendChild(mainTitle);
};
generateMainTitle();
const generateMenu = () => {
  const menuOptions = [{ name: 'Dashboard', link: 'dashboard.html' }, { name: 'Heroes', link: 'heroes.html' }];
  const menu = document.createElement('ul');
  menu.className = 'menu';
  for (let i = 0; i < 2; i += 1) {
    const nav = document.createElement('li');
    nav.innerHTML = menuOptions[i].name;
    const link = document.createElement('a');
    link.href = menuOptions[i].link;
    nav.appendChild(link);
    menu.appendChild(nav);
  }
  document.body.appendChild(menu);
};
generateMenu();
const generateTitle2 = () => {
  const title2 = document.createElement('h2');
  title2.innerHTML = 'Top Heroes';
  document.body.appendChild(title2);
};
generateTitle2();
const generateHeroesMenu = (list) => {
  const topList = list.slice(1, 5);
  const heroesMenu = document.createElement('ul');
  heroesMenu.className = 'heroes-menu';
  for (let i = 0; i < topList.length; i += 1) {
    const nav = document.createElement('li');
    nav.innerHTML = topList[i].name;
    const link = document.createElement('a');
    link.href = topList[i].link;
    nav.appendChild(link);
    heroesMenu.appendChild(nav);
  }
  document.body.appendChild(heroesMenu);
};
generateHeroesMenu(heroes);
