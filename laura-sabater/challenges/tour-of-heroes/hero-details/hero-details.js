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

const generateTitle2 = (list) => {
  const title2 = document.createElement('h2');
  title2.innerHTML = `${list[0].name} details!`;
  document.body.appendChild(title2);
};
generateTitle2(heroes);

const generateDetailsContainer = (list) => {
  const details = list[0];
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'detailsContainer';
  for (const elements of details) {
    for (const properties of elements) {
      const numId = document.createElement('label');
      numId.innerHTML = properties;
      const answerNumId = document.createElement('input');
      answerNumId.innerHTML = `${list[0].id}`;
      numId.appendChild(detailsContainer);
      answerNumId.appendChild(detailsContainer);
    }
  }
  document.body.appendChild(detailsContainer);
};
generateDetailsContainer(heroes);
