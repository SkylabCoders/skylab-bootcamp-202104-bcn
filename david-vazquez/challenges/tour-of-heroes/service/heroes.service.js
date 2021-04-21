function fetchHeroes(){
    return fetch('./../../store/superHeroData.json')
    .then(response => response.json())  
};

const createHtmlElement = (parent, selector, object, classname) => {
    let node=document.createElement(selector);
    parent.appendChild(node);
    node.setAttribute('id',object);
    node.className=classname;
    return node;
}

const getHeroById = (heroId) => fetch('./../../store/superHeroData.json')
  .then((response) => response.json())
  .then((data) => {
    const heroData = data.find((hero) => hero.id === parseInt(heroId, 10));
    return heroData;
  });

