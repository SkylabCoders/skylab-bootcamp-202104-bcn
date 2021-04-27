const createElement = (tag, cssClass = null, innerText = null, parentElement = null) => {
  const element = document.createElement(tag);
  element.classList.add(cssClass);
  element.innerText = innerText;
  if (parentElement) {
    parentElement.appendChild(element);
  }
  return element;
};

const getElementByClassName = (className) => document.querySelector(`.${className}`);
