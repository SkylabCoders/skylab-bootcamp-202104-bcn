function fetchHeroes(url) {
  return fetch(url).then((response) => response.json());
  // .then((data) => data);
}

const createElement = (tag, innerHTML, parent, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.href = href;
};
