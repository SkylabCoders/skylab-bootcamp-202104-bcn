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
    { id: 20, name: 'Tornado' }
    ]

function generateHeader(){
    const container = document.querySelector('.container');
    const header = document.createElement('header');
    header.className='header';
    container.appendChild(header);
    generateTitle(header);
    generateNav(header);
    generateHeroContainer(container);
}

function generateTitle (header){ 
    const title = document.createElement('h1');
    header.appendChild(title);
    title.className='header__title';
    title.innerText = 'Tour of Heroes';   
}

function generateNav (header){
    const nav = document.createElement('ul');
    header.appendChild(nav);
    nav.className='header__nav';
    generateNavButton(nav,'Dashboard', './../dashboard/dashboard.html');
    generateNavButton(nav,'Heroes', './../list/heroes-list.html');
}

function generateNavButton (nav, text, html){
    const button = document.createElement('li');
    nav.appendChild(button);
    button.className='nav__button';
    const a = document.createElement('a');
    button.appendChild(a);
    a.setAttribute("href", html);
    a.innerText = text;
}

function generateHeroContainer(container){
    const heroContainer = document.createElement('div');
    heroContainer.className='hero';
    container.appendChild(heroContainer);
    generateHeroeTitle(heroContainer);  
    generateHeroDetails(heroContainer,'id');
    generateHeroDetails(heroContainer,'name');
    generateButtonBack(heroContainer);
}

function generateHeroeTitle(heroContainer){
    const heroTitle = document.createElement('h2');
    heroTitle.innerText="Magneta details!" //enlazar con la seleciion de la otra pagina;
    heroTitle.className='hero__title';
    heroContainer.appendChild(heroTitle);
}

function generateHeroDetails(heroContainer, text){
    const heroDetail = document.createElement('div');
    heroDetail.className='hero__detail';
    heroContainer.appendChild(heroDetail);
    const infoDetail = document.createElement('span');
    heroDetail.appendChild(infoDetail);
    infoDetail.className='detail__info';
    infoDetail.innerText=text;
    const textDetail = document.createElement('span');
    heroDetail.appendChild(textDetail);
    textDetail.innerText='hello';
    textDetail.className='detail__text';
}

function generateButtonBack(heroContainer){
    const link = document.createElement('a');
    heroContainer.appendChild(link);
    link.href='./../dashboard/dashboard.html';
    const goBack = document.createElement('button');
    goBack.className='hero__button';
    goBack.innerText='Back';
    link.appendChild(goBack);
    //goBack.onclick = location.href='./../dashboard/dashboard.html';
    //goBack.setAttribute('onclick', 'location.href=./../dashboard/dashboard.html');

}