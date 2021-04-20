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
    generateDashboard();
}

function generateNavButton(parent ,name, link){
    const button = createHtmlElement('li',null,'nav__button');
    parent.appendChild(button);
    const buttonLink = createHtmlElement('a',null,null);
    button.appendChild(buttonLink);
    buttonLink.innerText=name;
    buttonLink.setAttribute('href', link);
}

function generateDashboard (){
    const dashContainer = createHtmlElement('div', null, 'dashboard');
    container.appendChild(dashContainer);
    const dashTitle = createHtmlElement('h2',null,'dashboard__title');
    dashContainer.appendChild(dashTitle);
    dashTitle.innerText='Top Heroes';
    const dashList = createHtmlElement('ul', null, 'dashboard__list');
    dashContainer.appendChild(dashList);
    const misheroes = fetchHeroes();
    misheroes.then(element=>{
        element.slice(1,5).forEach((firstHeroe)=>{
            const heroes = document.createElement('li');
            dashList.appendChild(heroes);
            const firstHeroeNames = document.createElement('a');
            firstHeroeNames.innerText=`${firstHeroe.name}`;
            firstHeroeNames.setAttribute('href',`http://127.0.0.1:5500/david-vazquez/challenges/tour-of-heroes/components/detail/heroes-detail.html?heroeName=${firstHeroe.name}&heroeID=${firstHeroe.id}`); 
            heroes.appendChild(firstHeroeNames);  
            })
    })
}

function createHtmlElement(selector, object, classname){
    let node=document.createElement(selector);
    node.setAttribute('id',object);
    node.className=classname;
    return node;
}