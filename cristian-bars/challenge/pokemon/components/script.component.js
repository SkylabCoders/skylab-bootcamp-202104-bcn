const header = document.createElement('header');
const title = createElementHtml('h1', 'Pokemons', 'id', 'headerTitle', 'header', link = null);
header.appendChild(title);
const content = document.getElementById('content');
content.appendChild(header);

const contentSection = createElementHtml('div', '', 'id', 'pokemonsList', 'pokemons__List', link = null);
const contentSectionList = createElementHtml('ul', '', 'id', 'pokemonsList', 'pokemons__List-list', link = null);
contentSection.appendChild(contentSectionList);
content.appendChild(contentSection);

const buttonsZone = createElementHtml('div', '', 'id', 'buttonsZone', 'buttons', link = null);
const actionButtonNext = createElementHtml('button', 'Next', 'id', 'nextButton', 'listButton', link = null);
actionButtonNext.setAttribute('onclick', 'moreItems()');
const actionButtonPrev = createElementHtml('button', 'Prev', 'id', 'prevButton', 'listButton', link = null);
actionButtonPrev.setAttribute('onclick', 'moreItems()');
buttonsZone.appendChild(actionButtonNext);
buttonsZone.appendChild(actionButtonPrev);
content.appendChild(buttonsZone);

function createElementHtml(node, nodeContent, att, attValue, className, link = null) {
  const newNode = document.createElement(node);
  newNode.innerText = nodeContent;
  newNode.setAttribute(att, attValue);
  newNode.className = className;
  if (link) {
    newNode.href = link;
  }
  return newNode;
}
