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

function createImg(className = null, src, parent = null) {
  const newImg = document.createElement('img');
  newImg.classList.add(className);
  newImg.setAttribute('src', src);

  const newParent = document.querySelector(parent);
  newParent.appendChild(newImg);
  return newImg;
}

const getElementByClassName = (className) => document.querySelector(`.${className}`);
