function createHeader(main, srcPath) {
  const header = createNewElement('header', 'header__container', main);
  const logo = createNewElement('img', 'logo', header);
  logo.setAttribute('src', `${srcPath}/../images/logo.png`);
  const nav = createNewElement('ul', 'nav__container', header);
  const mainButton = createNewElement('li', 'nav__button', nav);
  mainButton.innerHTML = 'Menu';
  const mainButtonAnchor = createNewElement('a', 'nav__button-link', mainButton);
  mainButtonAnchor.href = `${srcPath}/src/pages/index.html`;
  const listButton = createNewElement('li', 'nav__button', nav);
  const listButtonAnchor = createNewElement('a', 'nav__button-link', listButton);
  listButtonAnchor.innerHTML = 'List';
  listButtonAnchor.href = `${srcPath}/src/pages/list/list.html`;
}

function createFooter(main) {
  createNewElement('footer', 'footer__container', main);
}
