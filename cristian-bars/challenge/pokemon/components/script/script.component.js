const header = document.createElement('header');
const title = document.createElement('h1');
const titleText = document.createTextNode('Pokemons');
title.appendChild(titleText);
header.appendChild(title);
const content = document.getElementById('content');
content.appendChild(header);

const contentSection = document.createElement('div');
const contentSectionList = document.createElement('ul');
contentSection.appendChild(contentSectionList);
content.appendChild(contentSection);

const buttonsZone = document.createElement('div');
const actionButtonHero = document.createElement('button');
actionButtonHero.setAttribute('onclick', 'moreItems()');
const textButHero = document.createTextNode('Heroes');
actionButtonHero.appendChild(textButHero);
buttonsZone.appendChild(actionButtonHero);
content.appendChild(buttonsZone);
