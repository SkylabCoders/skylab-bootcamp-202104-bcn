const generateTitle = () => {
  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = 'Tour of Heroes';
  document.body.appendChild(mainTitle);
};
generateTitle();
const generateMenu = () => {
  const menu = document.createElement('ul');
  menu.className = 'menu';
  for (let i = 0; i < 2; i += 1) {
    const nav = document.createElement('li');
    nav.innerHTML = 'Dashboard';
    menu.appendChild(nav);
  }
  document.body.appendChild(menu);
};
generateMenu();
