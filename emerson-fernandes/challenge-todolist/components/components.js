const containerH1 = document.createElement('div');
document.body.appendChild(containerH1);

const title = document.createElement('h1');
containerH1.appendChild(title);
title.innerHTML = 'To do List ! !';

const main = document.createElement('main');
document.body.appendChild(main);

const containerTodo = document.createElement('div');
main.appendChild(containerTodo);

const containerInput = document.createElement('div');
main.appendChild(containerInput);

const inputCreate = document.createElement('input');
containerInput.appendChild(inputCreate);
inputCreate.setAttribute('id', 'inputTodo');

const createButton = document.createElement('button');
containerInput.appendChild(createButton);
createButton.innerHTML = 'Create';
createButton.setAttribute('onclick', 'createList()');
