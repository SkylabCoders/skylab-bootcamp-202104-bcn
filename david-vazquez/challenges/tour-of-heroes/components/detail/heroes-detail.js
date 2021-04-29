const container = document.querySelector('.container');

const generateHeader = () => {  
    const headerHeroes = createHtmlElement(container,'header',null,'header');
    const title = createHtmlElement(headerHeroes, 'h1',null,'header__title');
    title.innerText='Tour of Heroes';
    const navBar = createHtmlElement(headerHeroes,'ul',null,'header__nav');
    generateNavButton(navBar,'Dashboard', './../dashboard/dashboard.html');
    generateNavButton(navBar,'Heroes', './../list/heroes-list.html');
    generateHeroContainer();
}

const generateNavButton = (parent ,name, link) => {
    const button = createHtmlElement(parent,'li',null,'nav__button');
    const buttonLink = createHtmlElement(button, 'a',null,null);
    buttonLink.innerText=name;
    buttonLink.setAttribute('href', link);
}

const generateHeroContainer = () => {
    const heroContainer = createHtmlElement(container, 'div', null, 'hero');
    let paramName = new URLSearchParams(location.search);
    let heroeName = paramName.get('heroeName');
    let paramId = new URLSearchParams(location.search);
    let heroeId = paramId.get('heroeID');
    const heroData = getHeroById(heroeId);
    heroData.then(({name,biography,images})=>{
        const heroTitle = createHtmlElement(heroContainer,'h2', null, 'hero__title');
        heroTitle.innerText= `${name} details!`;
        const detailList = createHtmlElement(heroContainer, 'ul', null, 'hero__details');
        generateHeroDetails(detailList, 'span', heroeId, 'ID: ','');
        generateHeroDetails(detailList, 'input', null, 'Name: ','');
        generateHeroDetails(detailList,'span', `${biography.fullName}`, 'Fullname: ','');
        generateHeroDetails(detailList, 'img', '', '',`${images.sm}`);
        generateButtonBack(heroContainer);
    })
    console.log(heroData);  
}


const generateHeroDetails = (parent, elemento, dato, texto, atributo) => {
    const heroDetail = createHtmlElement(parent, 'li', null, 'hero__details');
    heroDetail.innerText=texto;
    const infoDetail = createHtmlElement(heroDetail, elemento,null,'detail__info');
    infoDetail.innerText= dato;
    infoDetail.setAttribute('src' ,atributo);
}

const generateButtonBack = (heroContainer) => {
    const link = createHtmlElement(heroContainer,'a',null,null);
    link.href='./../dashboard/dashboard.html';
    const goBack = createHtmlElement(link, 'button', null, 'hero__button');
    goBack.innerText='Back';
}

