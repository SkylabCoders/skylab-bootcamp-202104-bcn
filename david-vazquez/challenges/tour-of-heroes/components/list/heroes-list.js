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
    generateMyHeroesContainer();
}

function generateNavButton(parent ,name, link){
    const button = createHtmlElement('li',null,'nav__button');
    parent.appendChild(button);
    const buttonLink = createHtmlElement('a',null,null);
    button.appendChild(buttonLink);
    buttonLink.innerText=name;
    buttonLink.setAttribute('href', link);
}

function generateMyHeroesContainer(){
    const myHeroesContainer = createHtmlElement('div',null,'myheroes')
    container.appendChild(myHeroesContainer);
    const myHeroesTitle = createHtmlElement('h2',null,'myheroes__title');
    myHeroesTitle.innerText='My Heroes';
    myHeroesContainer.appendChild(myHeroesTitle);
    const myHeroesList = createHtmlElement('ul',null,'myheroes__list');
    myHeroesContainer.appendChild(myHeroesList);
    const misheroes = fetchHeroes();
    misheroes.then(element=>{
        element.slice(1,20).forEach((firstHeroe)=>{
            const heroes = createHtmlElement('li',null,'list__hero')
            myHeroesList.appendChild(heroes);
            const firstHeroeNames = document.createElement('a');
            firstHeroeNames.innerText=`${firstHeroe.id} ${firstHeroe.name}`;
            const name = `${firstHeroe.name}`;
            const id = `${firstHeroe.id}`;
            firstHeroeNames.onclick = function () {generateMyHeroDetail(name, link)};
            const link = ('href',`./../detail/heroes-detail.html?heroeName=${firstHeroe.name}&heroeID=${firstHeroe.id}`); 
            heroes.appendChild(firstHeroeNames);  
            })
    })
}

function generateMyHeroDetail(name, link){
    const parent = document.querySelector('.myheroes');
    const myHeroDetail = createHtmlElement('div', null, 'myheroes__detail')
    parent.appendChild(myHeroDetail);
    const myHeroTitle = createHtmlElement('h2',null,'detail__title')
    myHeroDetail.appendChild(myHeroTitle);
    myHeroTitle.innerText= name + ' is my hero';
    generateMyHeroDetailMore(myHeroDetail,link);
}

function generateMyHeroDetailMore(myHeroDetail, enlace){
    const link = createHtmlElement('a',null,null);
    myHeroDetail.appendChild(link);
    link.href = enlace;
    const myHeroButton = createHtmlElement('button', null, 'detail__more')
    link.appendChild(myHeroButton);
    myHeroButton.innerText= 'View Details';
}

function createHtmlElement(selector, object, classname){
    let node=document.createElement(selector);
    node.setAttribute('id',object);
    node.className=classname;
    return node;
}
