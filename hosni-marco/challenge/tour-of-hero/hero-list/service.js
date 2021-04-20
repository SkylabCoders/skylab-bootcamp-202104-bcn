function nodeCreateElement(element, id, className) {
  const node = document.createElement(element);
  node.setAttribute('id', id);
  node.setAttribute('class', className);
  return node;
}

const mainId = document.getElementById('main');
const ul = nodeCreateElement('ul', 'id-ul', 'class-ul');
mainId.append(ul);

heroes.forEach((element) => {
  const liElement = nodeCreateElement('li', `id-${element.name}`, `class-${element.name}`);
  const aElement = nodeCreateElement('a', `id-link-${element.name}`, `class-link-${element.name}`);
  const spanElement = nodeCreateElement('span', `id-span-${element.id}`, `class-span-${element.id}`);

  spanElement.innerText = element.id;
  aElement.innerText = element.name;
  aElement.href = `./../hero-detail/hero-detail.html?heroID=${element.id}`;

  liElement.append(spanElement, aElement);
  ul.append(liElement);
});
