const header = document.createElement('header');
const title = document.createElement('h1');
const titleText = document.createTextNode('Tour of heroes');
title.appendChild(titleText);
header.appendChild(title);
const content = document.getElementById('content');
content.appendChild(header);

const buttonsZone = document.createElement('div');
const actionButtonDash = document.createElement('a');
actionButtonDash.href = ('.././dashboard/dashboard.html');
const textButDash = document.createTextNode('Dashboard');
actionButtonDash.appendChild(textButDash);
buttonsZone.appendChild(actionButtonDash);
content.appendChild(buttonsZone);

const actionButtonHero = document.createElement('a');
actionButtonHero.href = ('');
const textButHero = document.createTextNode('Heroes');
actionButtonHero.appendChild(textButHero);
buttonsZone.appendChild(actionButtonHero);
content.appendChild(buttonsZone);

const container = document.createElement('div');
const titleSection = document.createElement('h2');
const textContainer = document.createTextNode('My heroes');
titleSection.appendChild(textContainer);
container.appendChild(titleSection);
content.appendChild(container);
const contentSection = document.createElement('div');
const contentSectionList = document.createElement('ul');
contentSection.appendChild(contentSectionList);
content.appendChild(contentSection);

const fechHero = () => fetch('../superHeroData.json')
  .then((response) => response.json())
  .then((data) => data);

const misHeroes = fechHero()
  .then((data) => {
    data.forEach((hero) => {
      const heroName = hero.name;
      const heroId = hero.id;
      const liText = document.createTextNode(heroName);
      const actionLiHero = document.createElement('a');
      actionLiHero.href = (`.././details/details.html?heroID=${heroId}`);
      const listLi = document.createElement('li');
      actionLiHero.appendChild(liText);
      listLi.appendChild(actionLiHero);
      contentSectionList.appendChild(listLi);
    });
  });
