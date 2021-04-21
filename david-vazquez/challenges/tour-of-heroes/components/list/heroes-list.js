const container = document.querySelector('.container');

function generateHeader(){  
    const headerHeroes = createHtmlElement(container, 'header',null,'header');
    const title = createHtmlElement(headerHeroes,'h1',null,'header__title');
    title.innerText='Tour of Heroes';
    const navBar = createHtmlElement(headerHeroes, 'ul',null,'header__nav');
    generateNavButton(navBar,'Dashboard', './../dashboard/dashboard.html');
    generateNavButton(navBar,'Heroes', './../list/heroes-list.html');
    generateMyHeroesContainer();
}

function generateNavButton(parent ,name, link){
    const button = createHtmlElement(parent, 'li',null,'nav__button');
    const buttonLink = createHtmlElement(button, 'a',null,null);
    buttonLink.innerText=name;
    buttonLink.setAttribute('href', link);
}

function generateMyHeroesContainer(){
    const myHeroesContainer = createHtmlElement(container,'div',null,'myheroes')
    const myHeroesTitle = createHtmlElement(myHeroesContainer,'h2',null,'myheroes__title');
    myHeroesTitle.innerText='My Heroes';
    const myHeroesList = createHtmlElement(myHeroesContainer,'ul',null,'myheroes__list');
    const misheroes = fetchHeroes();
    misheroes.then(element=>{
        element.forEach((firstHeroe)=>{
            const heroes = createHtmlElement(myHeroesList,'li',null,'list__hero')
            const firstHeroeNames = document.createElement('a');
            firstHeroeNames.innerText=`${firstHeroe.id} ${firstHeroe.name}`;
            heroes.appendChild(firstHeroeNames);  
            const name = `${firstHeroe.name}`;
            const id = `${firstHeroe.id}`;
            firstHeroeNames.onclick = function () {generateMyHeroDetail(name, link)};
            const link = ('href',`./../detail/heroes-detail.html?heroeName=${firstHeroe.name}&heroeID=${firstHeroe.id}&heroeSlug=${firstHeroe.slug}&heroeBio=${firstHeroe.biography}`);       
            })
    })
}

function generateMyHeroDetail(name, link){
    const parent = document.querySelector('.myheroes');
    const myHeroDetail = createHtmlElement(parent,'div', null, 'myheroes__detail')
    const myHeroTitle = createHtmlElement(myHeroDetail, 'h2',null,'detail__title')
    myHeroTitle.innerText= name + ' is my hero';
    generateMyHeroDetailMore(myHeroDetail,link);
}

function generateMyHeroDetailMore(myHeroDetail, enlace){
    const link = createHtmlElement(myHeroDetail, 'a',null,null);
    link.href = enlace;
    const myHeroButton = createHtmlElement(link, 'button', null, 'detail__more')
    myHeroButton.innerText= 'View Details';
}
