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
];

const header = document.createElement('header');
const title = document.createElement('h1');
const titleText = document.createTextNode('Tour of heroes');
title.appendChild(titleText);
header.appendChild(title);
const content = document.getElementById('content');
content.appendChild(header);

const buttonsZone = document.createElement('div');
const buttonDash = document.createElement('button');
const actionButtonDash = document.createElement('a');
actionButtonDash.href = ('');
const textButDash = document.createTextNode('Dashboard');
actionButtonDash.appendChild(textButDash);
buttonDash.appendChild(actionButtonDash);
buttonsZone.appendChild(buttonDash);
content.appendChild(buttonsZone);

const buttonHeroes = document.createElement('button');
const actionButtonHero = document.createElement('a');
actionButtonHero.href = ('.././heroes/heroes.html');
const textButHero = document.createTextNode('Heroes');
actionButtonHero.appendChild(textButHero);
buttonHeroes.appendChild(actionButtonHero);
buttonsZone.appendChild(buttonHeroes);
content.appendChild(buttonsZone);

const container = document.createElement('div');
const titleSection = document.createElement('h2');
const textContainer = document.createTextNode('Top heroes');
titleSection.appendChild(textContainer);
container.appendChild(titleSection);
content.appendChild(container);
