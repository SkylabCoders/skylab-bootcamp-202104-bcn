function createNewElement(elementType, elementClass, parent) {
  const element = document.createElement(elementType);
  element.classList.add(elementClass);
  parent.appendChild(element);
  return element;
}
