const header = document.createElement('header');
const title = document.createElement('h1');
const titleText = document.createTextNode('Tour of heroes');
title.appendChild(titleText);
header.appendChild(title);
const content = document.getElementById('content');
content.appendChild(header);

const buttonsZone = document.createElement('div');
const actionButtonDash = document.createElement('a');
actionButtonDash.href = ('');
const textButDash = document.createTextNode('Dashboard');
actionButtonDash.appendChild(textButDash);
buttonsZone.appendChild(actionButtonDash);
content.appendChild(buttonsZone);

const actionButtonHero = document.createElement('a');
actionButtonHero.href = ('.././heroes/heroes.html');
const textButHero = document.createTextNode('Heroes');
actionButtonHero.appendChild(textButHero);
buttonsZone.appendChild(actionButtonHero);
content.appendChild(buttonsZone);

const container = document.createElement('div');
const titleSection = document.createElement('h2');
const textContainer = document.createTextNode('Top heroes');
titleSection.appendChild(textContainer);
container.appendChild(titleSection);
content.appendChild(container);
