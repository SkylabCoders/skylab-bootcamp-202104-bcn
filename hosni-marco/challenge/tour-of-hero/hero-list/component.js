function nodeCreateElement(element, id, className) {
  const node = document.createElement(element);
  node.setAttribute('id', id);
  node.setAttribute('class', className);
  return node;
}

const title = nodeCreateElement('h1', 'id-h1', 'class-h1');
title.innerText = 'superhero list';
const mainId = document.getElementById('main');
const ul = nodeCreateElement('ul', 'id-ul', 'class-ul');
mainId.append(title);
mainId.append(ul);

function getList(heroList) {
  const liElement = nodeCreateElement('li', `id-${heroList.name}`, `class-${heroList.name}`);
  const aElement = nodeCreateElement('a', `id-link-${heroList.name}`, `class-link-${heroList.name}`);
  const spanElement = nodeCreateElement('span', `id-span-${heroList.id}`, `class-span-${heroList.id}`);
  spanElement.innerText = heroList.id;
  aElement.innerText = heroList.name;
  aElement.href = `./../hero-detail/hero-detail.html?heroID=${heroList.id}`;
  liElement.append(spanElement, aElement);
  ul.append(liElement);
}
