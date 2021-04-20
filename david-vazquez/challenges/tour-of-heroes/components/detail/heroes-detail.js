const container = document.querySelector('.container');

function generateHeader(){
    
    const headerHeroes = createHtmlElement('header',null,'header');
    container.appendChild(headerHeroes);
    const title = createHtmlElement('h1',null,'header__title');
    title.innerText='Tour of Heroes';
    headerHeroes.appendChild(title);
    const navBar = createHtmlElement('ul',null,'header__nav');
    headerHeroes.appendChild(navBar);    
    generateNavButton(navBar,'Dashboard', './../dashboard/dashboard.html');
    generateNavButton(navBar,'Heroes', './../list/heroes-list.html');
    generateHeroContainer();
}

function generateNavButton(parent ,name, link){
    const button = createHtmlElement('li',null,'nav__button');
    parent.appendChild(button);
    const buttonLink = createHtmlElement('a',null,null);
    button.appendChild(buttonLink);
    buttonLink.innerText=name;
    buttonLink.setAttribute('href', link);
}

function generateHeroContainer(){
    const heroContainer = createHtmlElement('div', null, 'hero');
    container.appendChild(heroContainer);
    let paramName = new URLSearchParams(location.search);
    let heroeName = paramName.get('heroeName');
    let paramId = new URLSearchParams(location.search);
    let heroeId = paramId.get('heroeID');
    const heroTitle = createHtmlElement('h2', null, 'hero__title');
    heroTitle.innerText= heroeName + ' details!'
    heroContainer.appendChild(heroTitle);
    const detailList = createHtmlElement('ul', null, 'hero__details');
    heroContainer.appendChild(detailList);
    generateHeroDetails(detailList, 'span', heroeId, 'ID: ');
    generateHeroDetails(detailList, 'input', null, 'Name: ');
    generateButtonBack(heroContainer);
}


function generateHeroDetails(parent, elemento, dato, texto ){
    const heroDetail = createHtmlElement('li', null, 'hero__details');
    parent.appendChild(heroDetail);
    heroDetail.innerText=texto;
    const infoDetail = createHtmlElement(elemento,null,'detail__info');
    heroDetail.appendChild(infoDetail);
    infoDetail.innerText= dato;
}

function generateButtonBack(heroContainer){
    const link = createHtmlElement('a',null,null);
    heroContainer.appendChild(link);
    link.href='./../dashboard/dashboard.html';
    const goBack = createHtmlElement('button', null, 'hero__button')
    goBack.innerText='Back';
    link.appendChild(goBack);
}

function createHtmlElement(selector, object, classname){
    let node=document.createElement(selector);
    node.setAttribute('id',object);
    node.className=classname;
    return node;
}