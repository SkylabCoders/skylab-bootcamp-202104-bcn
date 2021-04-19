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
    generateMyHeroesContainer(container);
}

function generateTitle (header){ 
    const title = document.createElement('h1');
    header.appendChild(title);
    title.className='header__title';
    title.innerText = 'Tour of Heroes';   
}

function generateNav (header){
    const nav = document.createElement('nav');
    header.appendChild(nav);
    nav.className='header__nav';
    generateNavButton(nav,'Dashboard');
    generateNavButton(nav,'Heroes');
}

function generateNavButton (nav, text){
    const button = document.createElement('button');
    button.innerText = text;
    nav.appendChild(button);
    button.className='nav__button';
}

function generateMyHeroesContainer(container){
    const myHeroesContainer = document.createElement('div');
    myHeroesContainer.className='myheroes';
    container.appendChild(myHeroesContainer);
    generateMyHeroesTitle(myHeroesContainer);
    generateMyHeroesList(myHeroesContainer);
    generateMyHeroDetail(myHeroesContainer);
}

function generateMyHeroesTitle(myHeroesContainer){
    const myHeroesTitle = document.createElement('h2');
    myHeroesTitle.innerText='My heroes';
    myHeroesTitle.className='myheroes__title';
    myHeroesContainer.appendChild(myHeroesTitle);
}

function generateMyHeroesList(myHeroesContainer){
    const myHeroesList = document.createElement('ul');
    myHeroesContainer.appendChild(myHeroesList);
    myHeroesList.className='myheroes__list';
    heroes.forEach(heroe => {
        generateMyHeroesItems(myHeroesList, heroe.name);  
    })
}

function generateMyHeroesItems(myHeroesList, text){
    const myHeroesItem = document.createElement('li');
    myHeroesItem.className='list__items';
    myHeroesList.appendChild(myHeroesItem);
    myHeroesItem.innerText=text;  
    myHeroesItem.onclick = () => generateMyHeroDetail(null, text);
}

function generateMyHeroDetail(myHeroesContainer, text){
    const myHeroDetail = document.createElement('div');
    myHeroDetail.className='myheroes__detail';
    myHeroesContainer.appendChild(myHeroDetail);
    const myHeroTitle = document.createElement('h2');
    myHeroDetail.appendChild(myHeroTitle);
    myHeroTitle.className='detail__title';
    myHeroTitle.innerText=text + ' is my hero';
    generateMyHeroDetailMore(myHeroDetail);
}

function generateMyHeroDetailMore(myHeroDetail){
    const myHeroButton = document.createElement('button');
    myHeroButton.appendChild(myHeroDetail);
    myHeroButton.className='detail__more';
}