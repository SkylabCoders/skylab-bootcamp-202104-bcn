/* eslint-disable no-unused-expressions */
const createElement = (tag, className, innerText, parent) => {
  const newElement = document.createElement(tag);
  className && (newElement.classList.add(className));
  innerText && (newElement.innerText = innerText);
  parent && parent.appendChild(newElement);
  return newElement;
};

export default { createElement };
