/* eslint-disable no-unused-vars */

function createElement(tag, className = null, text = null, parent = null) {
  const newElement = document.createElement(tag);
  newElement.classList.add(className);
  newElement.innerHTML = text;

  if (parent) {
    const newParent = document.querySelector(parent);
    newParent.appendChild(newElement);
  }
  return newElement;
}

// const createElement = (tag, cssClass = null, innerText = null, parentElement) => {
//   const element = document.createElement(tag);
//   element.classList.add(cssClass);
//   element.innerText = innerText;

//   if (parentElement) {
//     const newParent = document.querySelector(`.${parentElement}`);
//     newParent.appendChild(element);
//   }
//   return element;
// };

const getElementByClassName = (className) => document.querySelector(`.${className}`);

// const getElementByClassName = (className) => document.querySelector(`.${className}`);

function createImg(className = null, src, parent = null) {
  const newImg = document.createElement('img');
  newImg.classList.add(className);
  newImg.setAttribute('src', src);

  const newParent = document.querySelector(parent);
  newParent.appendChild(newImg);
  return newImg;
}

function createAnchor(className = null, href, text = null, parent = null) {
  const newAnchor = document.createElement('a');
  newAnchor.classList.add(className);
  newAnchor.innerHTML = text;
  newAnchor.setAttribute('href', href);

  const newParent = document.querySelector(parent);
  newParent.appendChild(newAnchor);
  return newAnchor;
}
