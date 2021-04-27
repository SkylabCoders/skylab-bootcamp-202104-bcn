const container = document.querySelector('.container');

function generateHeader(){ 
    const headerHeroes = createHtmlElement(container, 'header',null,'header');
    const title = createHtmlElement(headerHeroes, 'h1',null,'header__title');
    title.innerText='Tour of Heroes';
    const navBar = createHtmlElement(headerHeroes, 'ul',null,'header__nav');  
    generateNavButton(navBar,'Dashboard', './../dashboard/dashboard.html');
    generateNavButton(navBar,'Heroes', './../list/heroes-list.html');
    generateDashboard();
}

function generateNavButton(parent ,name, link){
    const button = createHtmlElement(parent, 'li',null,'nav__button');
    const buttonLink = createHtmlElement(button, 'a',null,null);
    buttonLink.innerText=name;
    buttonLink.setAttribute('href', link);
}

function generateDashboard (){
    const dashContainer = createHtmlElement(container, 'div', null, 'dashboard');
    const dashTitle = createHtmlElement(dashContainer, 'h2',null,'dashboard__title');
    dashTitle.innerText='Top Heroes';
    const dashList = createHtmlElement(dashContainer, 'ul', null, 'dashboard__list');
    
    const misheroes = fetchHeroes();
    misheroes.then(element=>{
        element.slice(1,5).forEach((firstHeroe)=>{
            const heroes = document.createElement('li');
            dashList.appendChild(heroes);
            const firstHeroeNames = document.createElement('a');
            firstHeroeNames.innerText=`${firstHeroe.name}`;
            firstHeroeNames.setAttribute('href',`http://127.0.0.1:5500/david-vazquez/challenges/tour-of-heroes/components/detail/heroes-detail.html?heroeName=${firstHeroe.name}&heroeID=${firstHeroe.id}&heroeSlug=${firstHeroe.slug}`); 
            heroes.appendChild(firstHeroeNames);  
            })
    })
}