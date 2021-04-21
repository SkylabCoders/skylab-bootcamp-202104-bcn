function createNewElement(elementType, elementClass, text, parent, url) {
  const element = document.createElement(elementType);
  element.getAttribute(elementClass);
  element.innerHTML = text;
  element.href = url;
  parent.appendChild(element);
  return element;
}
const main = document.querySelector('main');
